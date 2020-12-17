import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  content: { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
  titleContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  title:{
    fontSize: 20,
  },

  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
