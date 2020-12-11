import Post from '../../models/post.js';
import mongoose from "mongoose";
import Joi from '@hapi/joi';

const {ObjectId} = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
};

export const checkOwnPost = async (ctx, next) => {
    const {id} = ctx.params;
    const post = await Post.findById(id);
  
    if(post.user.toString() !== ctx.state.user._id){
        ctx.status = 403;
        return
    };

    return next();
}

export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    });

    const result = schema.validate(ctx.request.body);

    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    };

    const {title, body, tags} = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
        user:ctx.state.user._id
    });
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500,e);
    };
};

export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1){
        ctx.status = 400;
        return;
    };

    const {tag, username} = ctx.query;
    const query = {
        ...(username ? {'user.username' : username} : {}),
        ...(tag ? {tags : tag} : {})
    }

    try{
        const posts = await Post.find(query).sort({_id:-1}).limit(10).skip((page-1)*10).lean().populate('user','_id username');
        const postCount = await Post.countDocuments(query);

        ctx.set('Last-Page', Math.ceil(postCount/10));
        ctx.body = posts.map(post => ({
            ...post,
            body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`
        }));
    }catch(e){
        ctx.throw(500, e);
    };
};

export const read = async ctx => {
    const {id} = ctx.params;
    try{
        const post = await Post.findById(id);
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    };
};

export const remove = async ctx => {
    const {id} = ctx.params
    try{
        await Post.findByIdAndRemove(id);
        ctx.status = 204;
    }catch(e){
        ctx.throw(500 ,e);
    };
};

export const update = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    });

    const result = schema.validate(ctx.request.body);

    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return
    }

    const {id} = ctx.params;
    try{
        const post = await Post.findByIdAndUpdate({_id: id}, ctx.request.body, {new: true});
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};