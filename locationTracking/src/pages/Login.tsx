import {
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../App';
import firestore from '@react-native-firebase/firestore';

interface Iprops {}
const Login: React.FC<Iprops> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const getUsers = async () => {
    const users = await firestore().collection('users').get();
    console.log('users', users.docs[0].data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  async function requestGeolocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        'android.permission.ACCESS_FINE_LOCATION',
        {
          title: 'Ridesharer Geolocation Permission',
          message:
            'Ridesharer needs access to your current location so you can share or search for a ride',
        } as any,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the geolocation');
      } else {
        console.log('Geolocation permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            requestGeolocationPermission();
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'MyTabs',
                },
              ],
            });
          }}>
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
