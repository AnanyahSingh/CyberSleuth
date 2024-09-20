import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HomeCards from "../components/HomeCards";
import { MyCases } from "../assets/icons";
import { MyReports } from "../assets/icons";

const Home = () => {
  return (
    <SafeAreaView className="flex flex-1 items-center ">
      <View className="w-[55%]">
        <Text className="text-4xl text-center mt-4 font-bold">
          Welcome Investigator Frank
        </Text>
      </View>
      <View className="flex flex-row gap-3">
        <HomeCards route={"/(zMyCases)"} icon={MyCases} label="My Cases" />
        <HomeCards route={"/MyReports"} icon={MyReports} label="Reports" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
