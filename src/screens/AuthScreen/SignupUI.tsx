import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import styles from './styles';

const SignupUI: React.FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}>
        <Text style={styles.h1}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label={'Username'}
          activeOutlineColor={'#5ED5A8'}
          selectionColor={'#5ED5A8'}
          
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupUI;
