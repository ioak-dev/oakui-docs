import { faCalendar, faHourglass } from '@fortawesome/free-regular-svg-icons';
import {
  faChartPie,
  faCogs,
  faGlassCheers,
  faGlasses,
  faGlassMartini,
  faGlassWhiskey,
  faRoad,
  faWineGlass,
  faWineGlassAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BlurOn,
  CalendarToday,
  Schedule,
  ShoppingCart,
  AccountBalance,
  Drafts,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OakButton from '../../oakui/wc/OakButton';
import ButtonContainer from './ButtonContainer';

const ButtonDemoIcon = () => {
  const dummyAction = () => {
    console.log('button clicked');
  };

  return (
    <>
      <ButtonContainer align="left">
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="small"
        >
          <Drafts />
          Icon in button
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="small"
        >
          <BlurOn />
          Material icon
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="small"
        >
          <FontAwesomeIcon icon={faCalendar} />
          Font awesome
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="large"
        >
          <CalendarToday />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="medium"
        >
          <Schedule />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="small"
        >
          <FontAwesomeIcon icon={faChartPie} />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="rectangle"
          size="xsmall"
        >
          <FontAwesomeIcon icon={faRoad} />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="icon"
          size="large"
        >
          <FontAwesomeIcon icon={faWineGlass} />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="icon"
          size="medium"
        >
          <ShoppingCart />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="icon"
          size="small"
        >
          <FontAwesomeIcon icon={faCogs} />
        </OakButton>
        <OakButton
          handleClick={dummyAction}
          theme="primary"
          variant="disappear"
          shape="icon"
          size="xsmall"
        >
          <AccountBalance />
        </OakButton>
      </ButtonContainer>
    </>
  );
};

export default ButtonDemoIcon;
