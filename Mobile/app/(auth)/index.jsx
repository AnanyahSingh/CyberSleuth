import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "../../assets/images";
import { Link, router } from "expo-router";
import { createAccount, login } from "../../lib/Node";

const index = () => {
  const [numberErrorVisibility, setNumberErrorVisibility] = useState(false);
  const [error, setError] = useState("");
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  const [agentInfo, setAgentInfo] = useState({
    agentId: "",
    pwd: "",
  });

  function handleInput(text, field) {
    setAgentInfo({ ...agentInfo, [field]: text });
  }

  user = "goAhead";

  async function handleSubmit() {
    console.log(agentInfo);

    if (agentInfo.agentId?.length == 5) {
      setNumberErrorVisibility(false);
      try {
        setIsFetchingUser(true);
        const token = await login(agentInfo);
        // const token = await createAccount(agentInfo);
        if (token) {
          console.log("User Logged in, Token received");
          // setCreatingUser(false);
          router.navigate("Home");
        }
        // if (user) {
        //   router.push({
        //     pathname: "Home",
        //     params: { agentId: agentInfo.agentId },
        //   });
        setIsFetchingUser(false);
        // } else {
        // }
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("Incorrect Credentials");
      setNumberErrorVisibility(true);
    }
  }

  return (
    <SafeAreaView className="flex flex-1 px-3">
      <View className="flex flex-col items-center justify-center">
        <View>
          <Image
            source={Icon}
            className="mt-4"
            // style={{ width: 200, height: 200 }}
          />
          <View className="flex items-center justify-center mt-[100px]">
            <Text className="text-2xl font-bold">Login</Text>
          </View>
        </View>
        <View className="flex mt-4 flex-col w-full justify-center items-center">
          <View className="flex items-center justify-center w-[80%]">
            <Text className="flex self-start">Enter your id</Text>
            <TextInput
              className="border-[1px] rounded-md p-2 w-full"
              placeholder="Agent-45x..."
              secureTextEntry={false}
              onChangeText={(text) => handleInput(text, "agentId")}
            />
          </View>

          <View className="flex items-center justify-center w-[80%]">
            <Text className="flex self-start">Enter password</Text>
            <TextInput
              className="border-[1px] rounded-md p-2 w-full"
              placeholder="Enter your id"
              secureTextEntry={true}
              onChangeText={(text) => handleInput(text, "pwd")}
            />
          </View>
        </View>

        {numberErrorVisibility && (
          <Text className="text-[#FF4747] text-[14px]">{error}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit}
          className="flex items-center mt-16 w-[80%] bg-black p-2 rounded-lg"
        >
          <Text className="text-white text-3xl">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
