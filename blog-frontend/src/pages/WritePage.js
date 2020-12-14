import React from 'react';
import Responsive from '../components/common/Responsive.js';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonsContainer.js';
import EditorContainer from '../containers/write/EditorContainer.js';
import TagBoxContainer from '../containers/write/TagBoxContainer.js';

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;
