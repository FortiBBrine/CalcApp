
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {store} from "./store/store";
import React from "react";
import {Provider} from "react-redux";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen} options={{title: "Головна"}} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

