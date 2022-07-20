import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import RootStackParamList from './../../../types';
import HomeHoc from './HomeHoc';
import styles from './styles';

type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  'WalletConnect'
>;

const HomeUI: React.FC = () => {
  const navigation = useNavigation<navigationProps['navigation']>();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/space.png')}
          style={styles.illustration}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.h1}>Welcome to Micrypto</Text>
        <Text style={styles.h2}>Trade anytime , anywhere</Text>
      </View>
      <View
        style={{
          flex: 4.5,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('WalletConnect');
            console.log(navigation);
          }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const HomeComponent = HomeHoc(HomeUI);
export default HomeComponent;
