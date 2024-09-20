import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "../assets/images";
import { Link } from "expo-router";

const HomeCards = ({ label, icon, route }) => {
  return (
    <Link href={`${route}`} className="mt-8">
      <View className="w-[156px] h-[201px] mx-[5px]">
        <Image
          className="w-full h-full object-contain rounded-2xl"
          source={icon}
        />
        <Text className="absolute bottom-3 text-white bg-black ml-6 text-2xl">
          {label}
        </Text>
      </View>
    </Link>
  );
};

export default HomeCards;
