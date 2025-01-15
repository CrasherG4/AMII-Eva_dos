import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LogInScreen from '../Screens/LogInScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import OperacionesScreen from '../Screens/OperacionesScreen';
import { NavigationContainer } from '@react-navigation/native';
import HistorialScreen from '../Screens/HistorialScreen';

const Stack = createStackNavigator();
const Tap = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Registro" component={RegisterScreen} />
      <Stack.Screen name="Welcome" component={MyTaps} />
    </Stack.Navigator>
  );
}

function MyTaps(){
  return(
    <Tap.Navigator>
      <Tap.Screen name="Operaciones" component={OperacionesScreen}/>
      <Tap.Screen name="Historial" component={HistorialScreen}/>
    </Tap.Navigator>
  )
}

export default function MainNavigator(){
  return(
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>

  );
}