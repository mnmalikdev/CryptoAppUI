import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../../components/Input';
import RootStackParamList from './../../../../types';
import styles from './styles';
type navigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Login',
  'Confirmation'
>;

interface inputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onFocus: () => void;
  error?: object;
  onChangeText: (text: string) => void;
}

const SignupUI: React.FC<inputProps> = () => {
  const navigation = useNavigation<navigationProps['navigation']>();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const [errorMessage, setErrorMessage] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const onSubmit = () => {
    if (
      inputs.email.length > 0 &&
      inputs.password.length > 0 &&
      inputs.username.length > 0 &&
      errorMessage.email === '' &&
      errorMessage.password === '' &&
      errorMessage.username === ''
    ) {
      navigation.navigate('Confirmation');
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.h1}>Sign Up</Text>
        <Text style={styles.h4}>Create a free account by signing up</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          placeholder="something@gmail.com"
          onFocus={() => {}}
          onChangeText={text => {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            setInputs({...inputs, email: text});
            if (!inputs.email.match(emailRegex)) {
              setErrorMessage({...errorMessage, email: 'Email is invalid'});
            } else {
              setErrorMessage({...errorMessage, email: ''});
            }
          }}
          error={errorMessage.email}
        />
        <Input
          label="Username"
          placeholder="example123"
          onFocus={() => {}}
          onChangeText={text => {
            // generate a username regex that has atleast 6 characters and no spaces or special characters except for _ and must have atleast one letter
            const usernameRegex = /^[a-zA-Z]\w{4,}$/;
            setInputs({...inputs, username: text});
            if (!inputs.username.match(usernameRegex)) {
              setErrorMessage({
                ...errorMessage,
                username:
                  'username must have atleast 6 characters, no spaces, special characters except for _ & must have one letter are all ',
              });
            } else {
              setErrorMessage({...errorMessage, username: ''});
            }
          }}
          error={errorMessage.username}
        />
        <Input
          label="Password"
          placeholder="choose a 8 character password"
          secureTextEntry={true}
          onChangeText={text => {
            const passwordRegex =
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
            setInputs({...inputs, password: text});
            if (!inputs.password.match(passwordRegex)) {
              setErrorMessage({
                ...errorMessage,
                password:
                  'At least 1 alphabet At least 1 digit Contains no space Optional special characters e.g. @$!%*#?&^_- Minimum 8 characters long',
              });
            } else {
              setErrorMessage({...errorMessage, password: ''});
            }
          }}
          error={errorMessage.password}
          onFocus={() => {}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.h3}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.hyperlink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupUI;
