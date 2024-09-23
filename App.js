import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  AppState,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import SettingsDetailsScreen from "./screens/Settings";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./state/store";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreenTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#4D5963",
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "WixMadeforText-Bold",
        },
        tabBarStyle: { height: 60 + insets.bottom, paddingVertical: 10 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Today",
          tabBarIcon: ({ color, size }) => (
            <Feather name="sun" size={size} color={color} />
          ),
        }}
        name="Today"
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
        component={SettingsDetailsScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  let persistor = persistStore(store);
  const appState = useRef(AppState.currentState);
  console.log(`App state: ${JSON.stringify(appState)}`);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#f4511e",
                },
              }}
            >
              <Stack.Screen
                name="Onboarding"
                options={{ headerShown: false }}
                component={Onboarding}
              />
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={MainScreenTabs}
              />
              {/* <Stack.Screen name="Settings" component={SettingsDetailsScreen} /> */}
            </Stack.Navigator>
            <StatusBar style="dark" />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
