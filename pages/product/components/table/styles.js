import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default EStyleSheet.create({
  label:{
    width: SCREEN_WIDTH/2 - 24,
    fontWeight: 'bold',
  },
  value:{
    width: SCREEN_WIDTH/2 - 24,
  },
  description_item: {
    marginVertical: 8,
    flexDirection: 'row'
  },
  description: {
    margin: 24,
  }
});
