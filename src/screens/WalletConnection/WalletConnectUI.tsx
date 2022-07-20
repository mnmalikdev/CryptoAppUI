import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import styles from './styles';
import WalletConnectHOC from './WalletConnectHOC';

import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from './../../../types';
type navigationProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const WalletConnectUI: React.FC = () => {
  const navigation = useNavigation<navigationProps['navigation']>();
  const wallets = [
    {
      name: 'MetaMask',
      address: '0x0',
      icon: require('./../../assets/icons/metamask.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/walletconnect.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico1.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico2.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico3.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico4.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico5.png'),
    },
    {
      name: 'WalletConnect',
      address: '0x0',
      icon: require('./../../assets/icons/ico6.png'),
    },
  ];

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.ModalContainer}>
          <ScrollView>
            {wallets.map((wallet, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    hideModal();
                    navigation.navigate('Signup');
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Image
                      source={wallet.icon}
                      style={{
                        width: 70,
                        height: 70,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#E0E0E0',
                        marginTop: 10,
                      }}>
                      {wallet.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Modal>
      </Portal>
      <View
        style={{
          flex: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/connect.png')}
          style={styles.illustration}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.h1}>
          Lets Get You On Board by Connecting Your Crypto Wallet
        </Text>
      </View>
      <View
        style={{
          flex: 4.5,
        }}>
        <TouchableOpacity style={styles.button} onPress={showModal}>
          <Text style={styles.buttonText}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const WalletConnectComponent = WalletConnectHOC(WalletConnectUI);

export default WalletConnectComponent;
