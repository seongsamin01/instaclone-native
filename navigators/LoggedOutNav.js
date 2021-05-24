import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
    return (
        <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}
        >
        <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
        />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen
        options={{
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
        name="CreateAccount"
        component={CreateAccount}
      />
      </Stack.Navigator>
    );
  }