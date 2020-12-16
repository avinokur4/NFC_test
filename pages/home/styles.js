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

  button: { 
    height: 50,
    paddingHorizontal: 80,
    margin: 12, 
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
