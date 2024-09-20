import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" options={{ initial: true }} />
        <Stack.Screen name="Home" />
        <Stack.Screen name="MyReports" />
        <Stack.Screen name="(zMyCases)" />
        <Stack.Screen name="CaseDetails" />
        <Stack.Screen name="Testimonials" />
        <Stack.Screen name="EditNote" />
        <Stack.Screen name="CaseEvidences" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default _layout;
