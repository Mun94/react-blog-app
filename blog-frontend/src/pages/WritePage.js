import React from 'react';
import Editor from '../components/write/Editor.js';
import TagBox from '../components/write/TagBox.js';
import Responsive from '../components/common/Responsive.js';
import WriteActionButtons from '../components/write/WriteActionButton.js';

const WritePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
