import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface inputProps {
  label: string;
  placeholder: string;
  onFocus: () => void;
  secureTextEntry?: boolean;
  error?: string;
  onChangeText: (text: string) => void;
}

const Input: React.FC<inputProps> = ({
  label,
  placeholder,
  error,
  onFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#777777"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          style={[
            styles.Input,
            {
              borderColor: error
                ? '#FF0000'
                : isFocused
                ? '#5ED5A8'
                : '#161C22',
            },
          ]}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    margin: 10,
  },
  Input: {
    borderWidth: 1,
    width: '90%',
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#161C22',
    color: '#FFFFFF',
  },
  label: {
    fontSize: 17,
    fontWeight: '400',
    color: '#A7AFB7',
    marginBottom: 10,
  },
  error: {
    color: '#f00',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
