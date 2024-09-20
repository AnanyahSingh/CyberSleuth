import { Tabs } from "expo-router";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { TabNavigationState, ParamListBase } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const _layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
        tabBarLabelStyle: {
          textTransform: "capitalize",
          color: "#000000",
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Active",
        }}
      />
      <Tabs.Screen
        name="Closed"
        options={{
          title: "Closed",
        }}
      />
    </MaterialTopTabs>
  );
};

export default _layout;
