import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import ListAssets from './ListAssets';
import GettingStartedAsset from './GettingStartedAsset';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakPage from '../../oakui/OakPage';
import topBannerLogo from '../../images/top-banner-logo.svg';
import modular from '../../images/modular.svg';
import accessible from '../../images/accessible.svg';
import consistent from '../../images/consistent.svg';
import scale from '../../images/scale.svg';
import open from '../../images/open.svg';
import oakuiWhite from '../../images/oakui_white.svg';
import oakuiBlack from '../../images/oakui_black.svg';

interface Props {
  history: any;
}

const Landing = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const goToLogin = () => {
    window.location.href = `${process.env.REACT_APP_ONEAUTH_URL}/#/appspace/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/login?type=signin&appId=${process.env.REACT_APP_ONEAUTH_APP_ID}`;
  };

  return (
    <OakPage>
      <div className="landing-page">
        <div className="top-banner">
          {/* <img src={topBannerLogo} /> */}
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className="action-buttons">
            <OakButton size="large" variant="regular" theme="default">
              Lorem ipsum
            </OakButton>
            <OakButton size="large" variant="appear" theme="default">
              Lorem
            </OakButton>
          </div>
        </div>
        <div className="about-oakui-section">
          <h2>Lorem ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
        <div className="feature-oakui-section">
          <div className="feature">
            <h2>Lorem ipsum, dolor sit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </p>
            <a href="#">Dolore magna aliqua </a>
          </div>
          <div className="feature">
            <h2>Ut enim ad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">Excepteur sint </a>
          </div>
          <div className="feature">
            <h2>Duis aute irure dolor</h2>
            <p>
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
            <a href="#">Ut enim ad minim </a>
          </div>
          <div className="feature">
            <h2>Excepteur sint occaecat</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a href="#">Duis aute </a>
          </div>
          <div className="images">
            <div className="image__laptop"></div>
            <div className="image__phone"></div>
            <div className="image__screen"></div>
            <div className="image__desktop"></div>
          </div>
        </div>
        <div className="fundamentals-oakui-section">
          <div className="fundamentals-header">
            <h2>Dolor in reprehenderit</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="fundamentals">
            {/* <img src={modular} alt="" /> */}
            <div>
              <h2>Excepteur sint occaecat.</h2>
              <p>
                Aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            {/* <img src={accessible} alt="" /> */}
            <div>
              <h2>nostrud exercitation.</h2>
              <p>
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            {/* <img src={consistent} alt="" /> */}
            <div>
              <h2>Sed ut perspiciatis.</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            {/* <img src={scale} alt="" /> */}
            <div>
              <h2>Nemo enim ipsam.</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            {/* <img src={open} alt="" /> */}
            <div>
              <h2>Quis autem vel.</h2>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur. Ut enim ad minima veniam,
                quis nostrum
              </p>
            </div>
          </div>
          <p className="link">
            <a href="#">Nemo enim ipsam voluptatem</a>
          </p>
          <p className="link">
            <a href="#">Neque porro quisquam est</a>
          </p>
        </div>
        <div className="footer-oakui-section">
          <div className="footer-links">
            <div>
              <h3>QUICKLINKS</h3>
              <ul>
                <li>Get started</li>
                <li>Components</li>
                <li>Layouts</li>
                <li>Styles</li>
                <li>OakUI</li>
              </ul>
            </div>
            <div>
              <h3>CONTRIBUTE</h3>
              <ul>
                <li>Designers</li>
                <li>Developers</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
            <div>
              <h3>STAY IN TOUCH</h3>
              <ul>
                <li>Slack</li>
                <li>Forum</li>
                <li>Mailing list</li>
                <li>OakUI Medium</li>
              </ul>
            </div>
          </div>
          <div className="footer-about">
            <h4>OakUI</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        <div className="copyright-oakui-section">
          <div className="right-text">
            <oak-link href="/">
              {profile.theme === 'theme_light' && (
                <img
                  className="logo--image"
                  src={oakuiBlack}
                  alt="OAKUI logo"
                />
              )}
              {profile.theme !== 'theme_light' && (
                <img
                  className="logo--image"
                  src={oakuiWhite}
                  alt="OAKUI logo"
                />
              )}
            </oak-link>
            Copyright © 2021 ioak.org, Inc.
          </div>
          <ul>
            <li>Privacy statement</li>
            <li>Terms of use</li>
            <li>All policies and guidelines</li>
          </ul>
        </div>
      </div>
    </OakPage>
  );
};

export default Landing;
