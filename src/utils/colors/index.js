const MainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7d8797',
  grey2: '#E9E9E9',
};

export const colors = {
  primary: MainColors.green1,
  secondary: MainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: MainColors.dark1,
    secondary: MainColors.grey1,
    MenuInactive: MainColors.dark2,
    MenuActive: MainColors.green1,
  },
  button: {
    primary: {
      background: MainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: MainColors.dark1,
    },
  },
  border: MainColors.grey2,
};
