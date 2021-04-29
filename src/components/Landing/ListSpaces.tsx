import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import SpaceItem from './SpaceItem';
import OakTypography from '../../oakui/wc/OakTypography';

interface Props {
  history: any;
}

const ListSpaces = (props: Props) => {
  const spaceList = useSelector((state: any) => state.space);
  return (
    <div className="list-spaces">
      <OakTypography variant="h2">Choose a space to proceed</OakTypography>
      <div className="list-spaces--content">
        {spaceList?.spaces?.map((space: any) => (
          <SpaceItem space={space} history={props.history} key={space.id} />
        ))}
      </div>
    </div>
  );
};

export default ListSpaces;
