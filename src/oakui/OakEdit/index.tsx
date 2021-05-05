import React, { useEffect, useRef, useState } from 'react';
import OakEditBlock from './OakEditBlock';
import './style.scss';
// import {} from 'lod';
import OakButton from '../wc/OakButton';
import { newId } from '../../events/MessageService';
import OakEditBlockType from './types/OakEditBlockType';
import OakEditBlockTypeToolbar from './toolbar/OakEditBlockTypeToolbar';
import OakEditToolbarButton from './toolbar/OakEditToolbarButton';

interface Props {
  value: any[];
  handleChange: any;
}

const OakEdit = (props: Props) => {
  const [showNewBlock, setShowNewBlock] = useState(false);
  const [data, _setData] = useState<any>();
  const [groupId, setGroupId] = useState<any>(newId());

  const dataRef = useRef(data);
  const setData = (val: any) => {
    dataRef.current = val;
    _setData(val);
  };

  useEffect(() => {
    if (props.value) {
      setData(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    if (props.value) {
      setData(props.value);
    }
  }, []);

  const handleChange = (block: any, newData: any) => {
    const _data = [...dataRef.current];
    _data.forEach((item) => {
      if (item.id === block.id) {
        item.data = newData;
      }
    });
    // _data[index].data.text = text;
    console.log('****', _data);
    props.handleChange(_data);
    // setData(_data);
  };

  const changeBlockType = (block: any, type: OakEditBlockType) => {
    const _data = [...dataRef.current];
    _data.forEach((item) => {
      if (item.id === block.id) {
        item.type = type;
      }
    });
    props.handleChange(_data);
  };

  const moveDown = (block: any) => {
    const _data: any[] = [...dataRef.current];
    const index = _data.findIndex((item) => item.id === block.id);
    arraymove(_data, index, index + 1);
    props.handleChange(_data);
  };

  const moveUp = (block: any) => {
    console.log(block);
    const _data: any[] = [...dataRef.current];
    const index = _data.findIndex((item) => item.id === block.id);
    arraymove(_data, index, index - 1);
    props.handleChange(_data);
  };

  const add = (blockType: OakEditBlockType, block?: any) => {
    console.log(blockType, block);
    if (!dataRef.current || !block) {
      addBlockToEnd(blockType);
      return;
    }
    const _data: any[] = [...dataRef.current];
    const index = _data.findIndex((item) => item.id === block.id);
    _data.splice(index + 1, 0, getNewBlock(blockType));
    props.handleChange(_data);
  };

  const addBlockToEnd = (blockType: OakEditBlockType) => {
    const _data: any[] = dataRef.current ? [...dataRef.current] : [];
    _data.push(getNewBlock(blockType));
    props.handleChange(_data);
  };

  const getNewBlock = (blockType: OakEditBlockType) => {
    switch (blockType) {
      case OakEditBlockType.PARAGRAPH:
        return {
          id: newId(),
          type: blockType,
          data: {
            text: '',
          },
        };
      case OakEditBlockType.HEADING:
        return {
          id: newId(),
          type: blockType,
          data: {
            level: 1,
            text: '',
          },
        };
      case OakEditBlockType.LIST:
        return {
          id: newId(),
          type: blockType,
          data: {
            text: '<ul><li> </li></ul>',
          },
        };

      default:
        return {
          id: newId(),
          type: blockType,
          data: {
            text: '',
          },
        };
    }
  };

  const remove = (block: any) => {
    const _data: any[] = [...dataRef.current];
    const index = _data.findIndex((item) => item.id === block.id);
    _data.splice(index, 1);
    props.handleChange(_data);
  };

  const arraymove = (arr: any[], fromIndex: number, toIndex: number) => {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  };

  return (
    <div className="oak-edit">
      {dataRef?.current?.map((block: any, index: number) => (
        <OakEditBlock
          groupId={groupId}
          key={block.id}
          block={block}
          handleChange={(text: any) => handleChange(block, text)}
          changeBlockType={(type: OakEditBlockType) =>
            changeBlockType(block, type)
          }
          add={(blockType: OakEditBlockType) => add(blockType, block)}
          remove={() => remove(block)}
          moveUp={() => moveUp(block)}
          moveDown={() => moveDown(block)}
        />
      ))}
      {(!dataRef?.current || dataRef?.current?.length === 0) && (
        <div className="oak-edit__new-block">
          {!showNewBlock && (
            <OakEditToolbarButton handleClick={() => setShowNewBlock(true)}>
              Add new block
            </OakEditToolbarButton>
          )}
          {showNewBlock && (
            <OakEditBlockTypeToolbar
              handleChange={add}
              handleClose={() => setShowNewBlock(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default OakEdit;
