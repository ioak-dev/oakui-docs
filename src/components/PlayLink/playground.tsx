import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';

import './style.scss';
import OakTab from '../../oakui/wc/OakTab';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakButton from '../../oakui/wc/OakButton';
import OakCheckboxGroup from '../../oakui/wc/OakCheckboxGroup';
import OakInput from '../../oakui/wc/OakInput';
import OakForm from '../../oakui/wc/OakForm';
import OakSheet from '../../oakui/wc/OakSheet';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakRadio from '../../oakui/wc/OakRadio';
import OakRadioGroup from '../../oakui/wc/OakRadioGroup';
import { newId } from '../../events/MessageService';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<any>({
    color: 'primary',
    dotted: false,
    underlineThickness: 'normal',
    blockStyle: 'none',
    textStyle: 'always',
    underlineStyle: 'hover',
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  return (
    <>
      <OakSheet
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        fillColor="surface"
        sizeHorizontal="full"
      >
        <OakSection fillColor="none" outlineColor="none" rounded fullWidth>
          <OakCheckbox
            gutterBottom
            name="dotted"
            value={state.dotted}
            handleChange={handleChange}
          >
            dotted
          </OakCheckbox>
          <OakSelect
            label="color"
            value={state.color}
            options={[
              'primary',
              'secondary',
              'tertiary',
              'default',
              'info',
              'invert',
              'danger',
              'warning',
              'success',
              'inherit',
            ]}
            name="color"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="underlineStyle"
            value={state.underlineStyle}
            options={['none', 'hover', 'always']}
            name="underlineStyle"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="textStyle"
            value={state.textStyle}
            options={['none', 'hover', 'always']}
            name="textStyle"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="blockStyle"
            value={state.blockStyle}
            options={['none', 'hover', 'always']}
            name="blockStyle"
            handleChange={handleChange}
            gutterBottom
          />
          <OakSelect
            label="underlineThickness"
            value={state.underlineThickness}
            options={['thin', 'normal', 'thick']}
            name="underlineThickness"
            handleChange={handleChange}
            gutterBottom
          />
        </OakSection>
      </OakSheet>
      <div className="playground-link">
        <h3
          className={typographyCompose({
            baseClass: 'playground-link__title',
            variant: 'h3',
          })}
        >
          Lorem ipsum{' '}
          <a
            href=""
            className={linkCompose({
              color: state.color,
              blockStyle: state.blockStyle,
              dotted: state.dotted,
              textStyle: state.textStyle,
              underlineStyle: state.underlineStyle,
              underlineThickness: state.underlineThickness,
            })}
          >
            dolor sit
          </a>{' '}
          cumque
        </h3>
        <p
          className={typographyCompose({
            variant: 'body1',
          })}
        >
          Maison selles deux mort disant dit l'israélite alors allons prudente
          effarée quand galiléenne
          <a
            href=""
            className={linkCompose({
              color: state.color,
              blockStyle: state.blockStyle,
              dotted: state.dotted,
              textStyle: state.textStyle,
              underlineStyle: state.underlineStyle,
              underlineThickness: state.underlineThickness,
            })}
          >
            Vestphalien parole carreau leurs demoiselle l'écurie par n'est
            perdus moyadors commençait milles
          </a>{' '}
          Partage à prépare par quoique effarée lui les par moeurs conseils
          milieu minuit montagnes candide montagnes ma. D'avacéna demoiselle
          avec raisonna tenir sa brave suis donner ma si parlaient à
          sierramorena
        </p>
      </div>
      <br />
      <OakFormActionsContainer align="left">
        <OakButton
          theme="info"
          variant="appear"
          handleClick={() => setIsOpen(true)}
          size="xsmall"
        >
          Component settings
        </OakButton>
      </OakFormActionsContainer>
      {/* </OakSection> */}
    </>
  );
};

export default Playground;
