/* eslint-disable import/prefer-default-export */

const tinycolor = require('tinycolor2');

const DARKEN_LIGHTEN_BY = 8;
const LIGHT = '#fcfcfc';
const DARK = '#0f0f0f';

export const computePalette = (
  isDarkMode: boolean,
  themeName: string,
  base: string
): { key: string; value: string }[] => {
  let output: { key: string; value: string }[] = [];
  if (base) {
    output = output.concat(
      getColorPair(`--color-${themeName}`, tinycolor(base))
    );
    if (isDarkMode) {
      output = output.concat(
        getColorPair(
          `--color-${themeName}-darker`,
          tinycolor(base).lighten(DARKEN_LIGHTEN_BY),
          tinycolor(base)
        )
      );
      output = output.concat(
        getColorPair(
          `--color-${themeName}-lighter`,
          tinycolor(base).darken(DARKEN_LIGHTEN_BY),
          tinycolor(base)
        )
      );
    } else {
      output = output.concat(
        getColorPair(
          `--color-${themeName}-darker`,
          tinycolor(base).darken(DARKEN_LIGHTEN_BY),
          tinycolor(base)
        )
      );
      output = output.concat(
        getColorPair(
          `--color-${themeName}-lighter`,
          tinycolor(base).lighten(DARKEN_LIGHTEN_BY),
          tinycolor(base)
        )
      );
    }
  }
  output = output.concat(
    getColorPair(
      `--color-${themeName}-semitransparent1`,
      tinycolor(base).setAlpha(0.2),
      tinycolor(base)
    )
  );
  output = output.concat(
    getColorPair(
      `--color-${themeName}-semitransparent2`,
      tinycolor(base).setAlpha(0.5),
      tinycolor(base)
    )
  );
  return output;
};

const getColorPair = (
  baseName: string,
  baseValue: any,
  commonRoot?: any
): { key: string; value: string }[] => {
  return [
    { key: baseName, value: baseValue },
    {
      key: `${baseName}-i`,
      value: (commonRoot || baseValue).isLight() ? DARK : LIGHT,
    },
  ];
};

export const getGreyShades = (
  isDarkMode: boolean
): { key: string; value: string }[] => {
  if (isDarkMode) {
    return [
      {
        key: '--color-global',
        value: '#141b2d',
      },
      {
        key: '--color-container',
        value: '#1f2940',
      },
      {
        key: '--color-surface',
        value: '#2b3858',
      },
      {
        key: '--color-i1',
        value: '#ffffff',
      },
      {
        key: '--color-i2',
        value: '#ffffff',
      },
      {
        key: '--color-i3',
        value: '#ffffff',
      },
    ];
  }
  return [
    {
      key: '--color-global',
      value: '#fbfcfd',
    },
    {
      key: '--color-container',
      value: '#f7f8f9',
    },
    {
      key: '--color-surface',
      value: '#ffffff',
    },
    {
      key: '--color-i1',
      value: '#202225',
    },
    {
      key: '--color-i2',
      value: '#202225',
    },
    {
      key: '--color-i3',
      value: '#202225',
    },
  ];
};
