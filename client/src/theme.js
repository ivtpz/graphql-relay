// @flow

export type Theme = {
  cranberry: {
    base: string
  },
  mint: {
    darkest: string,
    darker: string,
    dark: string,
    base: string,
    light: string,
    lighter: string,
    lightest: string
  },
  plum: {
    dark: string,
    base: string,
    light: string
  },
  lemon: {
    dark: string,
    base: string,
    light: string
  },
  strawberry: {
    dark: string,
    base: string,
    light: string
  },
  tomato: {
    base: string
  },
  apple: {
    dark: string,
    base: string,
    light: string
  },
  neutral: {
    lightest: string,
    lighter: string,
    light: string,
    base: string,
    dark: string,
    darker: string,
    darkest: string
  },
  white: {
    base: string
  }
};

const theme: Theme = {
  cranberry: {
    base: '#f4436d',
  },
  mint: {
    darkest: '#1c4c4c',
    darker: '#198080',
    dark: '#7fa9a9',
    base: '#53cccc',
    light: '#ace6e6',
    lighter: '#e3f6f6',
    lightest: '#eff9f9',
  },
  plum: {
    dark: '#4c0f39',
    base: '#662653',
    light: '#cc99bb',
  },
  lemon: {
    dark: '#664f33',
    base: '#f3d979',
    light: '#fff6cc',
  },
  strawberry: {
    dark: '#611',
    base: '#c66',
    light: '#f9e0e0',
  },
  tomato: {
    base: '#c0143c',
  },
  apple: {
    dark: '#104020',
    base: '#53A970',
    light: '#e0f9e9',
  },
  neutral: {
    lightest: '#f9f6f6',
    lighter: '#f0ecec',
    light: '#d6cfc9',
    base: '#8c8983',
    dark: '#6c6963',
    darker: '#46433f',
    darkest: '#33302f',
  },
  white: {
    base: '#fff',
  },
};

export default theme;
