import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  content: { 
    padding: 20, 
    alignItems: 'center',
  },
  
  title:{
    padding: 50,
  },

  input: { 
    height: 40, 
    width: 200, 
    borderColor: 'green', 
    borderWidth: 1, 
    margin: 50,
  },

  button: { 
    padding: 10, 
    width: 200, 
    margin: 12, 
    borderWidth: 1,
    borderColor: 'black'
  },

  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
