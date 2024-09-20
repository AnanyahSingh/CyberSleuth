import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const EvidenceCard = ({ evidenceCoverPhoto, evidenceTitle }) => {
  return (
    <Link href="CaseDetails">
      <View className="w-[155px] rounded-xl border-b-[1px] border-l-[1px] border-r-[1px] mx-3">
        <Image
          className="w-[155px] h-[129px] rounded-t-xl"
          source={evidenceCoverPhoto}
        />
        <Text className="text-xl font-bold">{evidenceTitle}</Text>
      </View>
    </Link>
  );
};

export default EvidenceCard;
