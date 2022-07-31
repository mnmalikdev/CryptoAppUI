import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1B232A',
    paddingHorizontal: 10,
  },
  innerContainer: {
    minHeight: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  h1: {
    color: '#FFFFFF',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
  },
  h2: {
    color: '#E0E0E0',
    fontSize: 22,
    lineHeight: 50,
    fontFamily: 'sans-serif-light',
  },
  h3: {
    color: '#E0E0E0',
    fontSize: 15,
    fontFamily: 'sans-serif',
    marginLeft: 10,
    marginTop: 20,
  },
  h4: {
    color: '#E0E0E0',
    fontSize: 15,
    fontFamily: 'sans-serif',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 25,
  },
  inputContainer: {
    justifyContent: 'center',
    minHeight: '30%',
  },
  buttonContainer: {
    minHeight: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minHeight: 50,
    backgroundColor: '#5ED5A8',
    width: '90%',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 15,
    marginRight: 10,
  },
  buttonText: {
    color: '#171D22',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'sans-serif-medium',
    textAlign: 'center',
  },
  hyperlink: {
    color: '#5ED5A8',
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    marginLeft: 4,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default styles;
