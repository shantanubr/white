import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DETAILS, HOME} from '../constants/routes';
import React from 'react';
import {HomeScreen} from './home';
import {DetailScreen} from './details';

export const AppStack: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={DETAILS} component={DetailScreen} />
    </Stack.Navigator>
  );
};
