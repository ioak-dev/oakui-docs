import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './NavElements.scss';
import NavGroup from './NavGroup';
import NavItem from './NavItem';

interface Props {
  space: string;
  closeAfterRouteChange?: boolean;
}

const NavElements = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="nav-elements">
      <NavItem
        to="/home"
        label="Home"
        closeAfterRouteChange={props.closeAfterRouteChange}
      />
      <NavItem
        to="/palette"
        label="Generate Palette"
        closeAfterRouteChange={props.closeAfterRouteChange}
      />
      <NavGroup
        space={props.space}
        closeAfterRouteChange={props.closeAfterRouteChange}
        label="Inputs"
        context="inputs-group"
      >
        <NavItem
          to="/play-input"
          label="Input"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-select"
          label="Select"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-checkbox"
          label="Checkbox"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-radio"
          label="Radio"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-button"
          label="Button"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-click-area"
          label="Click area"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-menu"
          label="Menu"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
      </NavGroup>
      <NavGroup
        space={props.space}
        closeAfterRouteChange={props.closeAfterRouteChange}
        label="Data Display"
        context="data-display-group"
      >
        <NavItem
          to="/play-typography"
          label="Typography"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-divider"
          label="Divider"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-spacing"
          label="Spacing"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-infinite-scroll"
          label="Infinite scroll"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-table"
          label="Table"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
      </NavGroup>
      <NavGroup
        space={props.space}
        closeAfterRouteChange={props.closeAfterRouteChange}
        label="Surfaces"
        context="surfaces-group"
      >
        <NavItem
          to="/play-section"
          label="Section"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-expanse"
          label="Expanse"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-sheet"
          label="Sheet"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-modal"
          label="Modal"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
      </NavGroup>
      <NavGroup
        space={props.space}
        closeAfterRouteChange={props.closeAfterRouteChange}
        label="Navigation"
        context="navigation-group"
      >
        <NavItem
          to="/play-toolbar"
          label="Toolbar"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-drawer"
          label="App Drawer"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-tab"
          label="Tab"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-nav-group"
          label="Nav group"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-nav-element"
          label="Nav element"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
      </NavGroup>
      <NavGroup
        space={props.space}
        closeAfterRouteChange={props.closeAfterRouteChange}
        label="Non web components"
        context="sidebar-group"
      >
        <NavItem
          to="/play-chart"
          label="Chart"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
        <NavItem
          to="/play-spinner"
          label="Spinner"
          closeAfterRouteChange={props.closeAfterRouteChange}
        />
      </NavGroup>
    </div>
  );
};

export default NavElements;
