import React from 'react';
import {StatusBar} from 'react-native';
import {Home, Sobre, Perfil} from './src/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Home} />
    <Tab.Screen name="Sobre" component={Sobre} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: 'Bem-Vindo',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </NavigationContainer>
  );
};

export default App;
