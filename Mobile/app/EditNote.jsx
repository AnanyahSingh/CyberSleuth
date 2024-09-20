import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Edit } from "../assets/icons";
import { Link } from "expo-router";
import { useState } from "react";

const Testimonials = () => {
  const [noteData, setNoteData] = useState({
    testimonial: "",
    testifier: "",
  });

  function handleNoteInput(text, field) {
    console.log(noteData);
    setNoteData({ ...noteData, [field]: text });
  }

  return (
    <SafeAreaView className="flex flex-1  items-center px-3">
      <View className="flex flex-row w-full justify-end">
        <Text>Close</Text>
      </View>
      <View
        style={{
          backgroundColor: "#EFEFEF",
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        className="flex fex-col items-center justify-center w-[80%] py-2 rounded-3xl drop-shadow-3xl"
      >
        <View className="bg-black w-[150px] h-[150px] flex items-center justify-center rounded-full">
          <Image source={Edit} className="w-[105px] h-[105px] rounded-full" />
        </View>
        <Text className="text-[20px] mt-2">ADD A NOTE</Text>
      </View>
      <View className="flex items-center w-full">
        <View className="mt-8">
          <Text className="text-[#C4C3C3] text-[13px]">ENTER TESTIMONIAL</Text>
          <TextInput
            className="w-[359px] h-[142px] text-white p-3 text-2xl rounded-lg bg-[#728290]"
            placeholder="Enter testimonial"
            value={noteData.testimonial}
            onChangeText={(text) => handleNoteInput(text, "testimonial")}
            placeholderTextColor="#ffffff"
            autoFocus
            multiline
          />
        </View>
        <View className="mt-8 w-[90%]">
          <Text className="text-[#C4C3C3] text-[13px]">TESTIFIER</Text>
          <TextInput
            placeholderTextColor="#ffffff"
            className="p-2 text-xl text-white rounded-lg bg-[#0075E2]"
            onChangeText={(text) => handleNoteInput(text, "testifier")}
            value={noteData.testifier}
            placeholder="Enter name"
          />
        </View>

        <Link href="(auth)" asChild>
          <TouchableOpacity className="mt-12 flex justify-center items-center bg-[#EB4335] w-[80%] py-3 rounded-lg mx-auto">
            <Text className="text-white text-lg">Submit</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Testimonials;
