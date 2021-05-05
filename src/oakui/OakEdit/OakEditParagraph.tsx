import React, { useEffect, useState } from 'react';
import './OakEditParagraph.scss';
import OakEditPrimaryToolbar from './toolbar/OakEditPrimaryToolbar';
import OakEditRichText from './OakEditRichText';
import OakRichTextControlType from './types/OakRichTextControlType';
import OakEditToolbar from './toolbar/OakEditToolbar';
import { OakEditFocusedEvent } from './OakEditFocusedEvent';

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
const OakEditParagraph = (props: Props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    OakEditFocusedEvent.asObservable().subscribe((item) => {
      if (item.groupId === props.groupId) {
        setEditing(item.id === props.block.id);
      }
    });
  }, []);

  const handleFocus = (isFocused: boolean) => {
    if (isFocused) {
      OakEditFocusedEvent.next({
        groupId: props.groupId,
        id: props.block.id,
      });
    }
  };

  const handleChange = (text: string) => {
    const _newData = { ...props.block.data, text };
    props.handleChange(_newData);
  };

  return (
    <div className="oak-edit-paragraph">
      <OakEditToolbar
        isActive={editing}
        add={props.add}
        remove={props.remove}
        moveDown={props.moveDown}
        moveUp={props.moveUp}
        changeBlockType={props.changeBlockType}
      />
      <div
        className={`oak-edit-paragraph__input ${
          editing ? 'oak-edit-paragraph__input--editing' : ''
        }`}
      >
        <OakEditRichText
          blockStyle
          value={props.block?.data?.text}
          controls={[
            OakRichTextControlType.BOLD,
            OakRichTextControlType.ITALIC,
            OakRichTextControlType.UNDERLINE,
            OakRichTextControlType.INCREASE_INDENT,
            OakRichTextControlType.DECREASE_INDENT,
            OakRichTextControlType.BULLET_LIST,
            OakRichTextControlType.ORDERED_LIST,
            OakRichTextControlType.STRIKE,
            OakRichTextControlType.FONT_SIZE,
          ]}
          handleChange={handleChange}
          handleFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default OakEditParagraph;
