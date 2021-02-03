import React, { useState } from 'react';
import OakTypography from '../../oakui/wc/OakTypography';
import OakContainer from '../../oakui/wc/OakContainer';
import './ButtonDemo.scss';
import ButtonDemoContrast from './ButtonDemoContrast';
import ButtonDemoIcon from './ButtonDemoIcon';
import ButtonDemoShape from './ButtonDemoShape';
import ButtonDemoSize from './ButtonDemoSize';
import ButtonDemoTheme from './ButtonDemoTheme';
import ButtonDemoVariant from './ButtonDemoVariant';

const ButtonDemo = () => {
  return (
    <OakContainer paddingHorizontal={4} paddingVertical={2} rounded>
      <div className="button-demo">
        <div>
          <OakTypography variant="h3">Size demonstration</OakTypography>
          <OakTypography variant="subtitle1">
            You can vary button dimension using size attribute
          </OakTypography>
          <ButtonDemoSize />
        </div>

        <div>
          <OakTypography variant="h3">Shape demonstration</OakTypography>
          <OakTypography variant="subtitle1">
            You can vary button shapes using shape attribute
          </OakTypography>
          <ButtonDemoShape />
        </div>
        <div>
          <OakTypography variant="h3">Theme demonstration</OakTypography>
          <OakTypography variant="subtitle1">
            You can vary color themes using theme attribute
          </OakTypography>
          <ButtonDemoTheme />
        </div>
        <div>
          <OakTypography variant="h3">Variant demonstration</OakTypography>
          <OakTypography variant="subtitle1">
            You can choose among available button style dynamism / hover changes
            using variant attribute
          </OakTypography>
          <ButtonDemoVariant />
        </div>
        <div>
          <OakTypography variant="h3">
            Primary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for primary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="primary" />
        </div>
        <div>
          <OakTypography variant="h3">
            Secondary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for secondary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="secondary" />
        </div>
        <div>
          <OakTypography variant="h3">
            Tertiary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for tertiary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="tertiary" />
        </div>
        <div>
          <OakTypography variant="h3">
            Default color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for default color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="default" />
        </div>
        <div>
          <OakTypography variant="h3">
            Info color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for info color scheme
          </OakTypography>
          <ButtonDemoContrast theme="info" />
        </div>
        <div>
          <OakTypography variant="h3">
            Danger color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for danger color scheme
          </OakTypography>
          <ButtonDemoContrast theme="danger" />
        </div>
        <div>
          <OakTypography variant="h3">
            Warning color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for warning color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="warning" />
        </div>
        <div>
          <OakTypography variant="h3">
            Success color scheme contrast testing
          </OakTypography>
          <OakTypography variant="subtitle1">
            Test contrast levels on dark and light modes for success color
            scheme
          </OakTypography>
        </div>
        <div>
          <OakTypography variant="h3">Icon demo</OakTypography>
          <ButtonDemoIcon />
        </div>
      </div>
    </OakContainer>
  );
};

export default ButtonDemo;
