import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Logo } from './assets';
import { AccountScreen, EditListAcc, EditListTask, HomeScreen, ListAccount, ListTask, LoginScreen, SelectEdit, SelectScreen, SelectTask, SelectTaskEdit, TaskScreen } from './Pages';
import store from './store';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
function App() {
  function SplashScreen({ navigation }) {
    setTimeout(() => {
      navigation.replace('Login')
    }, 5000)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#fca503',}}>
        <Image source={Logo} style={{ width: 250, height: 120, resizeMode: 'contain' }} />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false }}  />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="ListAcc" component={ListAccount} />
        <Stack.Screen name="EditAccount" component={EditListAcc} />
        <Stack.Screen name="EditSelect" component={SelectEdit} />
        <Stack.Screen name="Task" component={TaskScreen} />
        <Stack.Screen name="SelectTask" component={SelectTask} />
        <Stack.Screen name="Listtask" component={ListTask} />
        <Stack.Screen name="EditTask" component={EditListTask} />
        <Stack.Screen name="EditSelectTask" component={SelectTaskEdit} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
