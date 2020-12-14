import React, { useEffect } from 'react';
import WriteActionButton from '../../components/write/WriteActionButton.js';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write.js';
import { withRouter } from 'react-router-dom';

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(writePost({ title, body, tags }));
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { user, _id } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.error(postError);
    }
  }, [history, post, postError]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonContainer);
