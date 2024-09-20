import { View, Text, Image, Pressable, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import ImageMethodModal from "./ImageMethodModal";
import { uploadImageAsync } from "../firebaseConfig.js";
import { sendImage } from "../lib/Node";

const ImageGrid = ({ Knife1 }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageBstr, setImageBstr] = useState();
  const [imageMethodModalVisible, setImageMethodModalVisible] = useState(false);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  async function handlePickPhotoSelection() {
    //Setting Up Image Picker
    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        // allowsMultipleSelection: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.canceled) {
        const a = await uploadImageAsync(result.assets[0].uri);

        // Read the image file as a binary string
        const uri = result.assets[0].uri;
        const response = await fetch(uri);
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onloadend = () => {
          const binaryString = reader.result;
          setImageBinary(binaryString);
        };
        reader.readAsBinaryString(blob);

        const b = sendImage(suspect.images);
        console.log(b);

        // const a = await uploadImageAsync(result.assets[0].uri);

        // setSelectedImages([...selectedImages, ...result.assets]);

        // // setIsSavingImage(false);
      } else {
        alert("You did not select any image.");
      }
    };
    pickImageAsync();
  }

  async function handleTakePhotoSelection() {
    requestPermission();
    if (status.granted) {
      const result = await ImagePicker.launchCameraAsync({
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        cameraType: "front",
      });
      if (!result.canceled) {
        // setIsSavingImage(true);
        // const a = await uploadImageAsync(result.assets[0].uri);
        // setSelectedImage(a);
        setSelectedImages([...selectedImages, ...result.assets]);
        // setIsSavingImage(false);
      } else {
        alert("You did not take any photo.");
      }
    }

    closeSelectImageMethodModal();
  }

  function closeSelectImageMethodModal() {
    setImageMethodModalVisible(false);
  }

  function selectImageMethod() {
    setImageMethodModalVisible(true);
  }

  return (
    <View className="flex justify-center items-center">
      <View className="mt-2 w-[337px] h-[240px]  rounded-xl mx-auto">
        <Image
          className="w-full h-full"
          source={{
            uri: selectedImages[0],
          }}
        />
      </View>
      <Pressable
        className="flex items-center w-[60%] rounded-lg justify-center bg-slate-600 py-3 mt-3 mb-2"
        onPress={selectImageMethod}
      >
        <Text>Upload Photos</Text>
      </Pressable>
      <ImageMethodModal
        visible={imageMethodModalVisible}
        onCloseImageMethod={closeSelectImageMethodModal}
        onChoosePhoto={handlePickPhotoSelection}
        onTakePhoto={handleTakePhotoSelection}
      />
    </View>
  );
};

export default ImageGrid;
