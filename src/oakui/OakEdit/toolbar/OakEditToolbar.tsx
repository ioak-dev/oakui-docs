import React, { useEffect, useState } from 'react';
import './OakEditToolbar.scss';
import OakEditBlockType from '../types/OakEditBlockType';
import OakEditPrimaryToolbar from './OakEditPrimaryToolbar';
import OakEditBlockTypeToolbar from './OakEditBlockTypeToolbar';
import OakEditToolbarButton from './OakEditToolbarButton';

interface Props {
  isActive: boolean;
  changeBlockType: any;
  moveDown?: any;
  moveUp?: any;
  remove?: any;
  add?: any;
  headingLevelOne?: any;
  headingLevelTwo?: any;
  headingLevelThree?: any;
  headingLevelFour?: any;
}
const OakEditToolbar = (props: Props) => {
  const [contentType, setContentType] = useState<
    'blocktype' | 'navigate' | 'add'
  >('navigate');
  const changeContentType = (type: 'blocktype' | 'navigate' | 'add') => {
    setContentType(type);
  };

  const changeBlockType = (type: OakEditBlockType) => {
    props.changeBlockType(type);
    setContentType('navigate');
  };

  const addBlock = (type: OakEditBlockType) => {
    props.add(type);
    setContentType('navigate');
  };

  useEffect(() => {
    if (!props.isActive) {
      setContentType('navigate');
    }
  }, [props.isActive]);

  return (
    <div
      className={`oak-edit-toolbar ${
        props.isActive ? 'oak-edit-toolbar--active' : ''
      }`}
    >
      {contentType === 'navigate' && (
        <OakEditPrimaryToolbar
          handleClose={() => changeContentType('blocktype')}
          add={() => changeContentType('add')}
          remove={props.remove}
          moveDown={props.moveDown}
          moveUp={props.moveUp}
          headingLevelOne={props.headingLevelOne}
          headingLevelTwo={props.headingLevelTwo}
          headingLevelThree={props.headingLevelThree}
          headingLevelFour={props.headingLevelFour}
        />
      )}
      {contentType === 'blocktype' && (
        <OakEditBlockTypeToolbar
          handleChange={changeBlockType}
          handleClose={() => changeContentType('navigate')}
        />
      )}
      {props.isActive && contentType === 'add' && (
        <OakEditBlockTypeToolbar
          handleChange={addBlock}
          handleClose={() => changeContentType('navigate')}
        />
      )}
    </div>
  );
};

export default OakEditToolbar;
