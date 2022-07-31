import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B232A',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    flex: 8,
  },
  illustration: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    marginTop: 60,
  },
  textContainer: {
    marginVertical: 25,
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
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
  buttonContainer: {
    minHeight: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minHeight: 50,
    backgroundColor: '#5ED5A8',
    width: '80%',
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
});

export default styles;
