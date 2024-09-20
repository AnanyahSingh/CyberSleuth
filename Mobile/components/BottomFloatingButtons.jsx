import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Edit, Speak } from "../assets/icons";

const BottomFloatingButtons = () => {
  //Define handleSubmit function
  const handleSubmit = () => {
    Alert.alert("Evidencee Confirmed");
  };

  //Define handleNewEvidenceCreate function
  const handleNewEvidenceCreate = () => {
    console.log("Creating new evidence...");
  };

  return (
    <View className="mt-6">
      <View>
        <Link href="EditNote" asChild>
          <TouchableOpacity className="absolute w-[50px] h-[50px] bottom-[190px] right-6">
            <View className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-black">
              <Image source={Edit} />
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="Testimonials" asChild>
          <TouchableOpacity className="absolute w-[50px] h-[50px] bottom-[130px] right-6">
            <Link href="/editTesimonial" asChild>
              <View className="flex justify-center items-center w-[45px] h-[45px] rounded-full bg-black">
                <Image source={Speak} />
              </View>
            </Link>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          onPress={handleNewEvidenceCreate}
          className="absolute w-[50px] h-[50px] bottom-16 right-6"
        >
          <View className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-black">
            <Text className="text-5xl text-white">+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        className="absolute bottom-0 mt-[20px] flex justify-center items-center bg-[#EB4335] w-full py-3"
      >
        <Text className="text-white text-lg">Confirm Evidence</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomFloatingButtons;
