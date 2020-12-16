import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    margin: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    margin: 24,
  },
  image: {
    width: SCREEN_WIDTH - 48,
    height: SCREEN_WIDTH - 48,
    resizeMode: 'contain',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText:{
    fontSize: 20,
    margin: 24,
  }
});
