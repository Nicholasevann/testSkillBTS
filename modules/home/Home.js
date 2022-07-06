import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import login from '../../API/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      console.log('failed to store data');
    }
  };
  const handleLogin = () => {
    login(password, username).then(val => {
      setStatus(val.statusCode);
      setData(val.data.token);
    });
  };
  if (status === 2110) {
    storeData();
    navigation.navigate('Main');
  }
  
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.viewinput}>
        <Text style={styles.text}>Username :</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={val => setUsername(val)}
        />
      </View>
      <View style={styles.viewinput}>
        <Text style={styles.text}>Password :</Text>
        <TextInput
          style={{borderWidth: 1, width: '60%', marginLeft: 20}}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          padding: 10,
          borderWidth: 1,
          marginBottom: 20,
        }}
        onPress={() => handleLogin()}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          padding: 10,
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {fontSize: 20, color: 'black'},
  viewinput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textinput: {borderWidth: 1, width: '60%', marginLeft: 20},
});
