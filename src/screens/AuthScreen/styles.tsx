import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B232A',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#161C22',
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
  },
  h2: {
    color: '#E0E0E0',
    fontSize: 22,
    lineHeight: 50,
    fontFamily: 'sans-serif-light',
  },
  button: {
    backgroundColor: '#5ED5A8',
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 15,
  },
  buttonText: {
    color: '#171D22',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
  },
});

export default styles;
