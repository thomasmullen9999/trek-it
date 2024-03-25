import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/(tabs)/Login';
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from 'react-navigation/bottom-tabs'


export default function App() {

  // const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
      <Tab.Screen name={ 'Login'} component={<Login/>}/> */}
      <Login/>
      {/* </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
