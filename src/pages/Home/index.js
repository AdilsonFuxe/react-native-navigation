import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  const gotoSobre = () => navigation.navigate('Perfil', {nome: 'Matheus'});
  return (
    <View>
      <Text>Home</Text>
      <Button title="Perfil" onPress={gotoSobre} />
      <Button
        title="Muda titulo"
        onPress={() => navigation.setOptions({title: 'Inicio'})}
      />
    </View>
  );
};

export default Home;
