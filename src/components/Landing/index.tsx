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
      {/* <div className="landing">
        {authorization.isAuth && (
          <>
            <ListAssets history={props.history} />
            <hr />
            <GettingStartedAsset history={props.history} />
          </>
        )}
        {!authorization.isAuth && (
          <OakFormActionsContainer align="center">
            <OakButton theme="primary" variant="appear" handleClick={goToLogin}>
              Login
            </OakButton>
          </OakFormActionsContainer>
        )}
      </div> */}
      <div className="landing-page">
        <div className="top-banner">
          <img src={topBannerLogo} />
          <h1>Build scalable experiences in the open.</h1>
          <p>
            OakUI is an open source design system built to drive consistency and
            unify teams.
          </p>
          <div className="action-buttons">
            <OakButton size="large" variant="regular" theme="default">
              Get Started
            </OakButton>
            <OakButton size="large" variant="appear" theme="default">
              Code
            </OakButton>
          </div>
        </div>
        <div className="about-oakui-section">
          <h2>Hello, we're OakUI.</h2>
          <p>
            We think quality product experiences should be easy to build and
            easy to scale, so we provide the tools to make that happen.
          </p>
          <p>
            From documentation and components to code examples and tutorials,
            OakUIhas it all—and our community of Flyers help make it better
            every day.
          </p>
        </div>
        <div className="feature-oakui-section">
          <div className="feature">
            <h2>We guide, you decide</h2>
            <p>
              PatternFly’s foundation is made of design guidelines, so help is
              always there when you need it. Check out our approach to icons,
              color, content, and more.
            </p>
            <a href="#">View design guidelines </a>
          </div>
          <div className="feature">
            <h2>Lay it out</h2>
            <p>
              A layout provides a fully responsive page structure that keeps
              your components organized and aligned regardless of screen size.
            </p>
            <a href="#">View layouts </a>
          </div>
          <div className="feature">
            <h2>Build things your way</h2>
            <p>
              Components are like building blocks. Designed to be flexible and
              modular, you can mix and match components to create a solution for
              almost any UI problem.
            </p>
            <a href="#">View components </a>
          </div>
          <div className="feature">
            <h2>See it in action</h2>
            <p>
              Components are better together. Demos show how multiple components
              can be used in a single design. They also provide some useful
              starter code, so the days of creating complex layouts from scratch
              are over.
            </p>
            <a href="#">View demos </a>
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
            <h2>Flyer fundamentals</h2>
            <p>
              Every Flyer is unique, with different ideas and opinions. But
              there are some things we all agree on. These are our Flyer
              fundamentals.
            </p>
          </div>
          <div className="fundamentals">
            <img src={modular} alt="" />
            <div>
              <h2>Make it flexible.</h2>
              <p>
                Open source thrives on variety, and our resources do too. Our
                components can be arranged in any number of ways, and our CSS
                variable system can be used for all kinds of customization.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            <img src={accessible} alt="" />
            <div>
              <h2>Make it accessible.</h2>
              <p>
                Building applications that work for everyone, regardless of
                ability, is just the right thing to do. Our accessible markup
                and guidance is geared towards creating experiences that people
                of all abilities can enjoy.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            <img src={consistent} alt="" />
            <div>
              <h2>Make it consistent.</h2>
              <p>
                The best product experiences stem from teamwork. Our clear
                guidelines and tools help streamline communication so that all
                teams can create unified applications and interfaces.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            <img src={scale} alt="" />
            <div>
              <h2>Make it scalable.</h2>
              <p>
                Helping teams work productively at scale is at the heart of
                everything we do. Our components are designed for enterprise IT
                applications used in businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="fundamentals">
            <img src={open} alt="" />
            <div>
              <h2>Make it open.</h2>
              <p>
                We're focused on shaping the future of open source design and
                development, and we can't do this alone. So we work as an open
                source community, where everyone is free to share their ideas
                and contribute their work.
              </p>
            </div>
          </div>
          <p className="link">
            <a href="#">Get started for developers</a>
          </p>
          <p className="link">
            <a href="#">Get started for designers</a>
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
            OakUI is an open source design system built to drive
              consistency and unify teams. From documentation and components to
              code examples and tutorials, OakUI is a place where design
              and development can thrive. We’re on a mission to help teams build
              consistent, accessible, and scalable enterprise product
              experiences—the open source way.
            </p>
          </div>
        </div>
        <div className="copyright-oakui-section">
          <div className="right-text">
      <oak-link href="/">
        {profile.theme === 'theme_light' && (
          <img className="logo--image" src={oakuiBlack} alt="OAKUI logo" />
        )}
        {profile.theme !== 'theme_light' && (
          <img className="logo--image" src={oakuiWhite} alt="OAKUI logo" />
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
