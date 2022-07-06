import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import register from '../../API/register';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState(null)
  const handleRegister = () => {
    register(email, password, username).then(val => setStatus(val))
  }
  if(status === 2000){
    navigation.navigate("Home")
  }
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
      <Text style={styles.text}>Register</Text>
      <View style={styles.viewinput}>
        <Text style={styles.text}>Email         :</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={val => setEmail(val)}
        />
      </View>
      <View style={styles.viewinput}>
        <Text style={styles.text}>Password :</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={val => setPassword(val)}
        />
      </View>
      <View style={styles.viewinput}>
        <Text style={styles.text}>Username :</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={val => setUsername(val)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          padding: 10,
          borderWidth: 1,
        }}
        onPress={() => handleRegister()}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
