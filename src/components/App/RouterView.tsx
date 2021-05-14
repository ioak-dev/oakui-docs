import React from 'react';

import { Route } from 'react-router-dom';
import './RouterView.scss';
import Home from '../Home';
import OaLogin from '../Auth/OaLogin';
import Landing from '../Landing';
import OakRoute from '../Auth/OakRoute';
import Unauthorized from '../Auth/Unauthorized';
import PlaySpinner from '../PlaySpinner';
import PlayButton from '../PlayButton';
import PlayModal from '../PlayModal';
import PlayChart from '../PlayChart';
import PlayTable from '../PlayTable';
import PlayFormElements from '../PlayFormElements';
import ColorPaletteGenerator from '../ColorPaletteGenerator';
import PlayTab from '../PlayTab';
import PlayCheckbox from '../PlayCheckbox';
import PlayRadio from '../PlayRadio';
import PlaySection from '../PlaySection';
import PlayDrawer from '../PlayDrawer';
import PlaySheet from '../PlaySheet';
import PlayInput from '../PlayInput';
import PlayImageUpload from '../PlayImageUpload';
import PlayTypography from '../PlayTypography';
import PlayDivider from '../PlayDivider';
import PlayExpanse from '../PlayExpanse';
import PlaySpacing from '../PlaySpacing';
import PlayClickArea from '../PlayClickArea';
import PlayToolbar from '../PlayToolbar';
import PlaySelect from '../PlaySelect';
import PlayNavGroup from '../PlayNavGroup';
import PlayNavElement from '../PlayNavElement';
import PlayInfiniteScroll from '../PlayInfiniteScroll';
import PlayMenu from '../PlayMenu';
import PlayEditor from '../PlayEditor';
import PlayLink from '../PlayLink';

interface Props {
  cookies: any;
}

const RouterView = (props: Props) => {
  return (
    <div className="router-view">
      <Route
        path="/login"
        render={(propsLocal: any) => (
          <OakRoute {...propsLocal} {...props} component={OaLogin} />
        )}
      />
      <Route
        path="/"
        exact
        render={(propsLocal: any) => (
          <OakRoute {...propsLocal} {...props} component={Landing} />
        )}
      />
      <Route
        path="/palette"
        exact
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={ColorPaletteGenerator}
          />
        )}
      />
      <Route
        path="/home"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Home}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-drawer"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayDrawer}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-click-area"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayClickArea}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-link"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayLink}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-typography"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayTypography}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-divider"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayDivider}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-spacing"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlaySpacing}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-expanse"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayExpanse}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-nav-group"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayNavGroup}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-nav-element"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayNavElement}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-infinite-scroll"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayInfiniteScroll}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-tab"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayTab}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-menu"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayMenu}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-toolbar"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayToolbar}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-sheet"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlaySheet}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-section"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlaySection}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-input"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayInput}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-select"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlaySelect}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-checkbox"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayCheckbox}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-radio"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayRadio}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-image-upload"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayImageUpload}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-editor"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayEditor}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-spinner"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlaySpinner}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-button"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayButton}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-modal"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayModal}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-chart"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayChart}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-table"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayTable}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/play-form-elements"
        render={(propsLocal: any) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={PlayFormElements}
            middleware={['readAuthentication']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
