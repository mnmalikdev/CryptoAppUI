import {Dimensions, StyleSheet} from 'react-native';

const WalletStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B232A',
    flexDirection: 'column',
  },
  illustration: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 2,
    resizeMode: 'contain',
    marginTop: 60,
    zIndex: -1,
  },
  h1: {
    color: '#E0E0E0',
    fontSize: 25,
    fontFamily: 'sans-serif-light',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5ED5A8',
    width: '100%',
    marginTop: 20,
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
  ModalContainer: {
    // center this container
    alignSelf: 'center',
    backgroundColor: '#1B232A',
    padding: 20,
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width * 0.9,
    border: 1,
    borderColor: '#E0E0E0',
    zIndex: 20,
    borderRadius: 15,
  },
});

export default WalletStyle;
