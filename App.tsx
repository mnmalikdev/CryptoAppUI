import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import RootStackParamList from './types';
// imported screens
import ConfirmationUI from './src/screens/AuthScreen/Confirmation/ConfirmationUI';
import LoginUI from './src/screens/AuthScreen/Login/LoginUI';
import SignupUI from './src/screens/AuthScreen/Signup/SignupUI';
import DashboardUI from './src/screens/Dashboard/DashboardUI';
import HomeComponent from './src/screens/HomeScreen/HomeUI';
import SplashComponent from './src/screens/SplashScreen/SplashUI';
import WalletConnectComponent from './src/screens/WalletConnection/WalletConnectUI';
// state to maintain splash screen and auto navigate

const Stack = createNativeStackNavigator<RootStackParamList>(); //create a stack navigator

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {showSplash ? (
          <Stack.Screen
            name="Splash"
            component={SplashComponent}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeComponent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="WalletConnect"
              component={WalletConnectComponent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupUI}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Confirmation"
              component={ConfirmationUI}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginUI}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardUI}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
