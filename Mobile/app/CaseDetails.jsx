import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Knife1 } from "../assets/images";
import ImageGrid from "../components/ImageGrid.jsx";
import BottomFloatingButtons from "../components/BottomFloatingButtons.jsx";
import { getEvidences } from "../lib/Node/index.js";

const CaseDetails = () => {
  const { caseId } = useLocalSearchParams();

  const [evidence, setEvidence] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Single useState hook for all form fields
  const [formData, setFormData] = useState({
    aiAnalysis: "",
    proximityToScene: "",
    evidenceType: "",
    sceneType: "",
    location: "",
    hoursTillEvidence: "",
  });

  // Function to handle input changes
  const handleInputChange = (name, value) => {
    console.log(formData);

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchEvidences = async () => {
      try {
        const fetchedEvidences = await getEvidences(caseId);
        setEvidence(fetchedEvidences);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch evidences.");
        setLoading(false);
      }
    };

    fetchEvidences();
  }, [caseId]);

  if (loading) {
    return (
      <SafeAreaView className="flex flex-1 flex-col items-center justify-center">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="flex flex-1 flex-col items-center justify-center">
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  //function to return random id
  const randomId = () => {
    const id = Math.floor(Math.random);
    console.log(id);

    return id;
  };

  return (
    <SafeAreaView className="flex flex-1 flex-col items-center">
      <View className="flex flex-col w-full px-3">
        <View>
          <Text className="text-2xl text-left font-bold">
            Case - {evidence[0]?.caseId || caseId}
          </Text>
          <Text className="text-lg mt-2">
            Evidence - {evidence[0]?.evidenceId || randomId()}
          </Text>
          <ImageGrid images={Knife1} />
        </View>

        <ScrollView className="mb-10 h-[300px]">
          <View className="z-[-10] w-[359px] h-[142px] mt-3 bg-[#93E396] rounded-xl p-3">
            <Text className="text-ls">{evidence[0]?.testimonial}</Text>
          </View>
          <View className="z-[-10] w-[359px] h-[142px] mt-3 bg-[#0075E2] rounded-xl p-3">
            <Text>{evidence[0]?.extraNotes}</Text>
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.aiAnalysis}
              onChangeText={(text) => handleInputChange("aiAnalysis", text)}
              placeholder={evidence[0]?.AiAnalysis || "AI Analysis"}
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.proximityToScene}
              onChangeText={(text) =>
                handleInputChange("proximityToScene", text)
              }
              placeholder="Evidence Proximity to scene"
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.evidenceType}
              onChangeText={(text) => handleInputChange("evidenceType", text)}
              placeholder="Evidence Type"
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.sceneType}
              onChangeText={(text) => handleInputChange("sceneType", text)}
              placeholder="Scene Type"
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.location}
              onChangeText={(text) => handleInputChange("location", text)}
              placeholder="Location"
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>

          <View className="w-[100%] mx-auto">
            <TextInput
              value={formData.hoursTillEvidence}
              onChangeText={(text) =>
                handleInputChange("hoursTillEvidence", text)
              }
              placeholder="Hours till evidence was gotten"
              className="border-[1px] w-full rounded-lg mt-2 py-2 px-[10px]"
            />
          </View>
        </ScrollView>
        <BottomFloatingButtons />
      </View>
    </SafeAreaView>
  );
};

export default CaseDetails;
