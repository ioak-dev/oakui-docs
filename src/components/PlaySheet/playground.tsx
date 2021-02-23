import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakSectionStyleProps } from 'oakui/dist/styles/OakSectionStyles';
import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakInput from '../../oakui/wc/OakInput';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';
import OakFormActionsContainer from '../../oakui/wc/OakFormActionsContainer';
import OakButton from '../../oakui/wc/OakButton';
import OakSheet from '../../oakui/wc/OakSheet';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<OakSectionStyleProps>({
    position: 'bottom',
    fill: 'surface',
    sizeHorizontal: 'half',
    sizeVertical: 'half',
    elevation: 0,
    paddingHorizontal: 2,
    paddingVertical: 2,
    backdropIntensity: 2,
    outlined: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  return (
    <div>
      <OakSection rounded>
        <OakFormActionsContainer>
          <OakButton
            theme="primary"
            variant="drama"
            handleClick={() => setIsOpen(true)}
          >
            Bottom sheet
          </OakButton>
        </OakFormActionsContainer>
      </OakSection>
      <br />
      <OakSection fillColor="container" outlineColor="none" rounded>
        <OakSelect
          label="position"
          value={state.position}
          options={['left', 'right', 'top', 'bottom', 'middle']}
          name="position"
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="sizeHorizontal"
          value={state.sizeHorizontal}
          options={['one-third', 'half', 'two-third', 'full', 'auto']}
          name="sizeHorizontal"
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="sizeVertical"
          value={state.sizeVertical}
          options={['one-third', 'half', 'two-third', 'full', 'auto']}
          name="sizeVertical"
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="fill"
          value={state.fill}
          options={['global', 'container', 'surface', 'float']}
          name="fill"
          gutterBottom
          handleChange={handleChange}
        />
        <OakInput
          label="backdropIntensity"
          type="number"
          value={state.backdropIntensity}
          name="backdropIntensity"
          min={0}
          max={5}
          gutterBottom
          handleChange={handleChange}
        />
        <OakInput
          label="elevation"
          type="number"
          value={state.elevation}
          name="elevation"
          min={0}
          max={24}
          gutterBottom
          handleChange={handleChange}
        />
        <OakInput
          label="paddingHorizontal"
          type="number"
          value={state.paddingHorizontal}
          name="paddingHorizontal"
          min={0}
          max={10}
          gutterBottom
          handleChange={handleChange}
        />
        <OakInput
          label="paddingVertical"
          type="number"
          value={state.paddingVertical}
          name="paddingVertical"
          min={0}
          max={10}
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="fill"
          value={state.fill}
          options={['global', 'container', 'surface', 'float']}
          name="fill"
          gutterBottom
          handleChange={handleChange}
        />
        <OakCheckbox
          name="outlined"
          value={state.outlined}
          color="primary"
          handleChange={handleChange}
        >
          outlined
        </OakCheckbox>
      </OakSection>
      <OakSheet
        elevation={state.elevation}
        paddingHorizontal={state.paddingHorizontal}
        paddingVertical={state.paddingVertical}
        backdropIntensity={state.backdropIntensity}
        position={state.position}
        fill={state.fill}
        sizeHorizontal={state.sizeHorizontal}
        sizeVertical={state.sizeVertical}
        isOpen={isOpen}
        outlined={state.outlined}
        handleClose={() => setIsOpen(false)}
      >
        Modi autem aperiam amet eaque laudantium nobis a ut ea a unde magni quam
        incidunt sed temporibus. Voluptates deserunt atque sequi repellat
        facilis expedita consequatur laborum inventore sunt iste totam nulla quo
        rerum exercitationem recusandae. Aperiam neque dolorum facere laboriosam
        beatae similique tempora ad eligendi dolorem dolore ad voluptas
        quibusdam vel. Repudiandae quidem non eveniet laudantium nobis sequi
        architecto nam sed vel. Voluptatum repellat minima iste cum quod
        explicabo nihil illum exercitationem facere aspernatur asperiores
        temporibus maiores nam non
      </OakSheet>
    </div>
  );
};

export default Playground;
