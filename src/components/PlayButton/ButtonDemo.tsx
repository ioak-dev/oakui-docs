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
          <OakTypography variant="h5">Size demonstration</OakTypography>
          <OakTypography variant="caption" gutterBottom>
            You can vary button dimension using size attribute
          </OakTypography>
          <ButtonDemoSize />
        </div>

        <div>
          <OakTypography variant="h5">Shape demonstration</OakTypography>
          <OakTypography variant="caption" gutterBottom>
            You can vary button shapes using shape attribute
          </OakTypography>
          <ButtonDemoShape />
        </div>
        <div>
          <OakTypography variant="h5">Theme demonstration</OakTypography>
          <OakTypography variant="caption" gutterBottom>
            You can vary color themes using theme attribute
          </OakTypography>
          <ButtonDemoTheme />
        </div>
        <div>
          <OakTypography variant="h5">Variant demonstration</OakTypography>
          <OakTypography variant="caption" gutterBottom>
            You can choose among available button style dynamism / hover changes
            using variant attribute
          </OakTypography>
          <ButtonDemoVariant />
        </div>
        <div>
          <OakTypography variant="h5">
            Primary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for primary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="primary" />
        </div>
        <div>
          <OakTypography variant="h5">
            Secondary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for secondary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="secondary" />
        </div>
        <div>
          <OakTypography variant="h5">
            Tertiary color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for tertiary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="tertiary" />
        </div>
        <div>
          <OakTypography variant="h5">
            Default color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for default color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="default" />
        </div>
        <div>
          <OakTypography variant="h5">
            Info color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for info color scheme
          </OakTypography>
          <ButtonDemoContrast theme="info" />
        </div>
        <div>
          <OakTypography variant="h5">
            Danger color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for danger color scheme
          </OakTypography>
          <ButtonDemoContrast theme="danger" />
        </div>
        <div>
          <OakTypography variant="h5">
            Warning color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for warning color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="warning" />
        </div>
        <div>
          <OakTypography variant="h5">
            Success color scheme contrast testing
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for success color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="success" />
        </div>
        <div>
          <OakTypography variant="h5">
            Primary color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for primary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="primary" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Secondary color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for secondary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="secondary" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Tertiary color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for tertiary color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="tertiary" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Default color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for default color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="default" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Info color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for info color scheme
          </OakTypography>
          <ButtonDemoContrast theme="info" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Danger color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for danger color scheme
          </OakTypography>
          <ButtonDemoContrast theme="danger" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Warning color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for warning color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="warning" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">
            Success color scheme contrast testing (Semi-transparent)
          </OakTypography>
          <OakTypography variant="caption" gutterBottom>
            Test contrast levels on dark and light modes for success color
            scheme
          </OakTypography>
          <ButtonDemoContrast theme="success" semitransparent />
        </div>
        <div>
          <OakTypography variant="h5">Icon demo</OakTypography>
          <ButtonDemoIcon />
        </div>
      </div>
    </OakContainer>
  );
};

export default ButtonDemo;
