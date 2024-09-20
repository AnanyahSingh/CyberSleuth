import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CaseRowItem({ caseId, caseTitle }) {
  return (
    <View className="flex flex-row gap-3 my-[2px] bg-white px-2 rounded-lg items-center justify-center">
      <Link href={{ pathname: "CaseDetails", params: { caseId } }}>
        <Text className="text-xl">Case - {caseId}</Text>
        <Text className="text-lg">{caseTitle}</Text>
      </Link>
    </View>
  );
}
