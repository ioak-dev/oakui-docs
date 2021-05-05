import React, { useEffect, useState } from 'react';
import './OakEditHeading.scss';
import { OakEditFocusedEvent } from './OakEditFocusedEvent';
import OakEditToolbar from './toolbar/OakEditToolbar';

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
const OakEditHeading = (props: Props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    OakEditFocusedEvent.asObservable().subscribe((item) => {
      console.log(item, props.groupId, props.block.id);
      if (item.groupId === props.groupId) {
        setEditing(item.id === props.block.id);
      }
    });
  }, []);

  const handleFocus = () => {
    OakEditFocusedEvent.next({
      groupId: props.groupId,
      id: props.block.id,
    });
  };

  const handleHeadingLevelChange = (level: number) => {
    const _newData = { ...props.block.data, level };
    props.handleChange(_newData);
  };

  const handleChange = (event: any) => {
    const _newData = { ...props.block.data, text: event.currentTarget.value };
    props.handleChange(_newData);
  };

  return (
    <div className="oak-edit-heading">
      <OakEditToolbar
        isActive={editing}
        add={props.add}
        remove={props.remove}
        moveDown={props.moveDown}
        moveUp={props.moveUp}
        headingLevelOne={() => handleHeadingLevelChange(1)}
        headingLevelTwo={() => handleHeadingLevelChange(2)}
        headingLevelThree={() => handleHeadingLevelChange(3)}
        headingLevelFour={() => handleHeadingLevelChange(4)}
        changeBlockType={props.changeBlockType}
      />
      <input
        className={`oak-edit-heading__input oak-edit-heading__input--level-${
          props.block.data.level || 1
        } ${editing ? 'oak-edit-heading__input--editing' : ''}`}
        placeholder="Start typing content..."
        value={props.block.data.text}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  );
};

export default OakEditHeading;
