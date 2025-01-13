import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './navigation/screens/Home';
import { Monsters } from './navigation/screens/Monsters';
import { Details } from './navigation/screens/Details';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#d40000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Kaiju" component={Monsters} options={{ title: 'MONSTERPEDIA' }}/>
        <Stack.Screen name="Detalhes" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
