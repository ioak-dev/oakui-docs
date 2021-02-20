import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { OakSectionStyleProps } from 'oakui/dist/styles/OakSectionStyles';
import './style.scss';
import OakTypography from '../../oakui/wc/OakTypography';
import OakSection from '../../oakui/wc/OakSection';
import OakInput from '../../oakui/wc/OakInput';
import OakSelect from '../../oakui/wc/OakSelect';
import OakCheckbox from '../../oakui/wc/OakCheckbox';

interface Props {
  match: any;
  history: any;
}

const Playground = (props: Props) => {
  const [state, setState] = useState<OakSectionStyleProps>({
    fillColor: 'container',
    outlineColor: 'container',
    textColor: 'auto',
    elevation: 0,
    paddingHorizontal: 2,
    paddingVertical: 2,
    rounded: false,
    semitransparent: false,
  });

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };
  return (
    <div>
      <OakSection fillColor="container" outlineColor="none" rounded>
        <OakSelect
          label="fillColor"
          value={state.fillColor}
          options={[
            'none',
            'container',
            'surface',
            'float',
            'primary',
            'secondary',
            'tertiary',
            'default',
            'danger',
            'warning',
            'success',
            'info',
            'invert',
          ]}
          name="fillColor"
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="outlineColor"
          value={state.outlineColor}
          options={[
            'none',
            'container',
            'surface',
            'float',
            'primary',
            'secondary',
            'tertiary',
            'default',
            'danger',
            'warning',
            'success',
            'info',
            'invert',
          ]}
          name="outlineColor"
          gutterBottom
          handleChange={handleChange}
        />
        <OakSelect
          label="textColor"
          value={state.textColor}
          options={[
            'auto',
            'primary',
            'secondary',
            'tertiary',
            'default',
            'danger',
            'warning',
            'success',
            'info',
            'invert',
          ]}
          name="textColor"
          gutterBottom
          handleChange={handleChange}
        />
        <OakInput
          type="number"
          name="elevation"
          label="elevation"
          value={state.elevation}
          min={0}
          max={24}
          gutterBottom
          handleInput={handleChange}
        />
        <OakInput
          type="number"
          name="paddingHorizontal"
          label="paddingHorizontal"
          value={state.paddingHorizontal}
          gutterBottom
          handleInput={handleChange}
        />
        <OakInput
          type="number"
          name="paddingVertical"
          label="paddingVertical"
          value={state.paddingVertical}
          gutterBottom
          handleInput={handleChange}
        />
        <OakCheckbox
          name="rounded"
          value={state.rounded || false}
          handleChange={handleChange}
        >
          rounded
        </OakCheckbox>
        <OakCheckbox
          name="semitransparent"
          value={state.semitransparent || false}
          handleChange={handleChange}
        >
          semitransparent
        </OakCheckbox>
      </OakSection>
      <br />
      <OakSection
        paddingHorizontal={state.paddingHorizontal}
        paddingVertical={state.paddingVertical}
        elevation={state.elevation}
        fillColor={state.fillColor}
        outlineColor={state.outlineColor}
        textColor={state.textColor}
        rounded={state.rounded}
        semitransparent={state.semitransparent}
      >
        <OakTypography variant="h4" gutterBottom>
          Voluptatem provident eveniet incidunt occaecati sed commodi a
          accusamus
        </OakTypography>
        <OakTypography variant="body2">
          Voluptatem provident eveniet incidunt occaecati sed commodi a
          accusamus repellat in occaecati debitis. Aperiam iusto odit quis sed
          quos deleniti unde dolor quis sunt nobis eveniet quas cumque quas
          suscipit. Fugiat doloribus repudiandae illum ut eaque adipisci dolor
          qui accusamus vel quibusdam accusantium expedita atque at. Temporibus
          aperiam molestias cum perspiciatis natus unde optio molestias at
          maxime earum sunt exercitationem Beatae vel accusamus unde numquam
          tempore natus cum deserunt accusamus repellendus provident placeat sit
          ipsam. Consequatur quis dolorem fugit natus dolorum sit soluta illum
        </OakTypography>
      </OakSection>
    </div>
  );
};

export default Playground;
