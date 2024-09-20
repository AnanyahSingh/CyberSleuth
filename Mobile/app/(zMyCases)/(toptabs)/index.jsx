import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CaseRowItem from "../../../components/CaseRowItem";
import { getCases } from "../../../lib/Node";

const Active = () => {
  const [cases, setCases] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      const fetchedCases = await getCases(); // Await the result of getCases()
      setCases(fetchedCases);
    };

    fetchCases(); // Call the async function
  }, []);

  return (
    <View className="flex flex-col justify-center items-center">
      <View className="mt-8">
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <CaseRowItem caseId={item.caseId} caseTitle={item.caseTitle} />
          )}
          keyExtractor={(item) => item.caseId} // Add a key extractor
        />
      </View>
    </View>
  );
};

export default Active;
