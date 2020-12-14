import React from 'react';
import Responsive from '../components/common/Responsive.js';
import WriteActionButtons from '../components/write/WriteActionButton.js';
import EditorContainer from '../containers/write/EditorContainer.js';
import TagBoxContainer from '../containers/write/TagBoxContainer.js';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
