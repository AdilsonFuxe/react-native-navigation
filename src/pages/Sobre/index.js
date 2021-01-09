import React from 'react';
import {View, Text} from 'react-native';

const Sobre = ({route}) => {
  return (
    <View>
      <Text> Meu nome é: {route.params?.nome}</Text>
    </View>
  );
};

export default Sobre;
