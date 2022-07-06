import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import getdata from '../../API/getdata';
import axios, {Axios} from 'axios';

const Main = () => {
  const [data, setData] = useState(null);
  const [check, setCheck] = useState('');
  const [dataChecklist, setDataChecklist] = useState(null);
  const change = false
  getdata().then(val => setData(val));
  const config = {
    headers: {Authorization: `Bearer ${data}`},
  };
  useEffect(() => {
    if (dataChecklist === null) {
      axios
        .get('http://94.74.86.174:8080/api/checklist', config)
        .then(val => setDataChecklist(val.data.data))
        .catch(console.log);
    }
  });
  const handleChecklist = () => {
    const bodyParameters = {
      name: check,
    };
    axios
      .post('http://94.74.86.174:8080/api/checklist', bodyParameters, config)
      .then(val => console.log(val.data.data));
  };
  const deleteCheckList = id => {
    axios
      .delete('http://94.74.86.174:8080/api/checklist/' + id, config)
      .then(val => console.log(val.data));
  };
  if (dataChecklist === null) {
    return <Text>Loading</Text>;
  }
  console.log(dataChecklist);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 15}}>
      <TextInput
        style={{borderWidth: 1, width: '60%', marginLeft: 20}}
        onChangeText={val => setCheck(val)}
      />
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
          padding: 10,
          borderWidth: 1,
          marginBottom: 20,
        }}
        onPress={() => handleChecklist()}>
        <Text>Checklist</Text>
      </TouchableOpacity>
      {dataChecklist.map(val => {
        return (
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{marginRight: 20}}>{val.name}</Text>
            <TouchableOpacity
              style={{backgroundColor: 'red'}}
              onPress={() => deleteCheckList(val.id)}>
              <Text>Hapus</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
