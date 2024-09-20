import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import EvidenceCard from "../components/EvidenceCard";
import { Icon, Knife1 } from "../assets/images";
import evidences from "../constants";
import { Link } from "expo-router";

const CaseEvidences = () => {
  return (
    <SafeAreaView className="flex flex-1 flex-col ">
      <View className="flex flex-1 px-3">
        <View>
          <Text className="text-3xl font-bold">Case - 4HH4C2</Text>
        </View>

        <View className="mt-5">
          <Text className="text-2xl font-medium ">All Evidences</Text>
        </View>

        <View className="flex items-center">
          <FlatList
            data={evidences}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <EvidenceCard
                evidenceCoverPhoto={item.photo}
                evidenceTitle={item.description}
              />
            )}
            numColumns={2}
            horizontal={false}
          />
        </View>

        <Link href="CaseDetails" asChild>
          <TouchableOpacity className="absolute left-2 bottom-6 mt-[20px] flex justify-center items-center bg-[#EB4335] w-full py-3 rounded-lg">
            <Text className="text-white text-lg">New Evidence</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default CaseEvidences;
