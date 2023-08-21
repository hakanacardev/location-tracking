import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface Iprops {}
const Login: React.FC<Iprops> = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <SafeAreaView style={styles.root}>
        <TextInput
          value={form.email}
          onChangeText={e => setForm(prev => ({...prev, email: e}))}
          style={styles.input}
          keyboardType="email-address"
          placeholder={'Email Giriniz'}
          placeholderTextColor="#000"
        />
        <TextInput
          value={form.password}
          onChangeText={e => setForm(prev => ({...prev, password: e}))}
          style={styles.input}
          keyboardType="visible-password"
          placeholder={'Password Giriniz'}
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.button} onPress={() => null}>
          <Text style={styles.text}>{'Giriş Yap'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
  },
  input: {
    width: '95%',
    height: 56,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.42)',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 4,
    color: 'black',
  },
  button: {
    width: '95%',
    height: 56,
    backgroundColor: '#4D4D4D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});
