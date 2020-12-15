import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  avatar: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    height: 265,
  },
  dataContainer: {
    marginHorizontal: 24,
  },
  userInfo: {
    backgroundColor: '$transparentGray',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
  },
  userName: {
    paddingLeft: 34,
    fontSize: '$H1Size',
    color: '$white',
  },
  ordersCount: {
    paddingLeft: 34,
    fontSize: '$fontMediumSize',
    color: '$white',
  },
  relatStyle: {
    position: 'relative',
  },
  rating: {
    paddingLeft: '80%',
    paddingTop: '5%',
    position: 'absolute',
    fontSize: '$H2_5Size',
    color: '$white',
  },
});
