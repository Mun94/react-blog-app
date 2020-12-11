import Router from 'koa-router';
import * as postCtrl from './posts.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);
posts.get('/:id', postCtrl.checkObjectId, postCtrl.read);
posts.delete('/:id', checkLoggedIn, postCtrl.checkObjectId, postCtrl.checkOwnPost, postCtrl.remove);
posts.patch('/:id', checkLoggedIn, postCtrl.checkObjectId, postCtrl.checkOwnPost, postCtrl.update);

export default posts