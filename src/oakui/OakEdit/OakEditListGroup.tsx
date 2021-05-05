import React, { useEffect, useState } from 'react';
import './OakEditListGroup.scss';
import OakEditRichText from './OakEditRichText';
import OakRichTextControlType from './types/OakRichTextControlType';
import { OakEditFocusedEvent } from './OakEditFocusedEvent';
import OakEditInlineButton from './OakEditInlineButton';

interface Props {
  counterPrefix?: string;
  groupId: string;
  id: string;
  items: any;
  sourceItems: any;
  handleChange: any;
}
const OakEditListGroup = (props: Props) => {
  const handleFocus = (isFocused: boolean) => {
    if (isFocused) {
      OakEditFocusedEvent.next({
        groupId: props.groupId,
        id: props.id,
      });
    }
  };

  const decreaseIndent = (item: any) => {
    handleChange(item, { level: 1 });
  };

  const increaseIndent = (item: any) => {
    handleChange(item, { level: 2 });
  };

  const handleChange = (item: any, delta: any) => {
    const _newData = [...props.sourceItems];
    _newData.forEach((localItem, index: number) => {
      if (localItem.id === item.id) {
        _newData[index] = { ...localItem, ...delta };
      }
    });

    props.handleChange(_newData);
  };

  const handleTextChange = (text: string, item: any) => {
    handleChange(item, { text });
  };

  return (
    <div className="oak-edit-list-group">
      {props.items.map((item: any, index: number) => (
        <>
          {Array.isArray(item) && (
            <OakEditListGroup
              counterPrefix={`${
                props.counterPrefix ? `${props.counterPrefix}.${index}` : index
              }`}
              groupId={props.groupId}
              id={props.id}
              items={item}
              sourceItems={props.sourceItems}
              handleChange={props.handleChange}
            />
          )}
          {!Array.isArray(item) && (
            <div className="oak-edit-list-group__item">
              <div className="oak-edit-list-group__item__action">
                {item.level}--{item.text}
                <OakEditInlineButton handleClick={() => decreaseIndent(item)}>
                  &lt;
                </OakEditInlineButton>
                <OakEditInlineButton handleClick={() => increaseIndent(item)}>
                  &gt;
                </OakEditInlineButton>
                <OakEditInlineButton handleClick={decreaseIndent}>
                  A
                </OakEditInlineButton>
                <OakEditInlineButton handleClick={decreaseIndent}>
                  X
                </OakEditInlineButton>
              </div>
              <div className="oak-edit-list-group__item__bullet">
                {`${
                  props.counterPrefix
                    ? `${props.counterPrefix}.${index + 1}`
                    : index + 1
                }`}
              </div>
              <div className="oak-edit-list-group__item__input">
                <OakEditRichText
                  blockStyle
                  value={item.text}
                  controls={[
                    OakRichTextControlType.BOLD,
                    OakRichTextControlType.ITALIC,
                    OakRichTextControlType.UNDERLINE,
                  ]}
                  handleChange={(text: string) => handleTextChange(text, item)}
                  handleFocus={handleFocus}
                />
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default OakEditListGroup;
