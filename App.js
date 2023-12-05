import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Menu from './Component/Pages/Menu/Menu';
import Stock from './Component/Pages/Stock/Stock'; 
import { Ionicons } from '@expo/vector-icons';
import Shop from './Component/Pages/Shop/Shop';
import About from './Component/Pages/About/About';
import lol from './Component/Pages/Shop/Shop';

const Tab = createBottomTabNavigator();

export default function App() { 
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'notify') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          } else if (route.name === 'lol') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }else if (route.name === 'Stock'){
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ activeTintColor: 'blue', inactiveTintColor: 'gray'}}
    >
      <Tab.Screen name="Home" component={Menu} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Stock" component={Stock} />
      <Tab.Screen name="notify" component={Stock} />
      <Tab.Screen name="lol" component={About} />
    </Tab.Navigator> 
    
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      }

});
