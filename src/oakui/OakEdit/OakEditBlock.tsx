import React, { useEffect, useState } from 'react';
import OakEditHeading from './OakEditHeading';
import OakEditList from './OakEditList';
import OakEditParagraph from './OakEditParagraph';
import OakEditBlockType from './types/OakEditBlockType';

interface Props {
  groupId: string;
  block: any;
  handleChange: any;
  changeBlockType: any;
  moveDown?: any;
  moveUp?: any;
  remove?: any;
  add?: any;
}
const OakEditBlock = (props: Props) => {
  return (
    <div className="oak-edit-block">
      {props.block.type === OakEditBlockType.PARAGRAPH && (
        <OakEditParagraph
          groupId={props.groupId}
          block={props.block}
          handleChange={props.handleChange}
          add={props.add}
          remove={props.remove}
          moveDown={props.moveDown}
          moveUp={props.moveUp}
          changeBlockType={props.changeBlockType}
        />
      )}
      {props.block.type === OakEditBlockType.LIST && (
        <OakEditList
          groupId={props.groupId}
          block={props.block}
          handleChange={props.handleChange}
          add={props.add}
          remove={props.remove}
          moveDown={props.moveDown}
          moveUp={props.moveUp}
          changeBlockType={props.changeBlockType}
        />
      )}
      {props.block.type === OakEditBlockType.HEADING && (
        <OakEditHeading
          groupId={props.groupId}
          block={props.block}
          handleChange={props.handleChange}
          add={props.add}
          remove={props.remove}
          moveDown={props.moveDown}
          moveUp={props.moveUp}
          changeBlockType={props.changeBlockType}
        />
      )}
    </div>
  );
};

export default OakEditBlock;
