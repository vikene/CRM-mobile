/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button } from '@rneui/base';
import { ThemeProvider, createTheme, lightColors } from '@rneui/themed';
import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPageComponent from './src/login.page';
import ForgotPasswordPage from './src/forgotPassword.page';
const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    })
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#7CA1B4",
    flexWrap: "wrap",
    gap: 10,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  }
})

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ForgotPasswordPage />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
