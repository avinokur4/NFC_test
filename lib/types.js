import PropTypes from 'prop-types';

export const Navigation = PropTypes.shape({
  navigate: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  setParams: PropTypes.func,
});

export const Theme = PropTypes.shape({
  colors: PropTypes.shape({
    primary: PropTypes.string,
    darkGray: PropTypes.string,
    accent: PropTypes.string,
  }),
  fonts: PropTypes.shape({
    regular: PropTypes.string.isRequired,
    thin: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
  }),
  styles: PropTypes.shape({
    container: PropTypes.shape(),
  }),
});

export const NavigationScene = PropTypes.shape({
  index: PropTypes.number.isRequired,
  descriptor: PropTypes.shape({
    navigation: Navigation.isRequired,
    options: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    state: PropTypes.shape({ params: PropTypes.shape() }).isRequired,
  }),
});
