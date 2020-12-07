import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    marginHorizontal: 24,
    flexDirection: 'column',
  },
  popupStyle: {
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  modalView: {
    top: 200,
    height: 200,
    width: '100%',
    backgroundColor: '$white',
    alignItems: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 12,
    alignItems: 'center',
    height: 52,
  },

  buttonText: {
    fontSize: '$fontBigSize',
    letterSpacing: 0.34,
    fontFamily: '$primaryFontFamily',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: '$darkGray',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 200,

  },
});
