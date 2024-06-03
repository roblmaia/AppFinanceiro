import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/home';
import ReceitasScreen from './screens/receitas';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Receitas' component={ReceitasScreen} />
    </Drawer.Navigator>
  );
}

export default App;
