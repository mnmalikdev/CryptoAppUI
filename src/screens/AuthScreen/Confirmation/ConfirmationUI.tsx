import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RootStackParamList from './../../../../types';
type navigationProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const ConfirmationUI = () => {
  const navigation = useNavigation<navigationProps['navigation']>();

  const onSubmit = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../../assets/images/confirmation.png')}
          style={styles.illustration}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>Account Created Successfully</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationUI;
