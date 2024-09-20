import * as SecureStore from "expo-secure-store";

async function saveToken(token) {
  try {
    await SecureStore.setItemAsync("jwt_token", token);
  } catch (error) {
    console.log(error);
  }
}

async function getToken() {
  try {
    const token = await SecureStore.getItemAsync("jwt_token");
    if (token) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteToken() {
  try {
    await SecureStore.deleteItemAsync("jwt_token");
    console.log("Token deleted");
  } catch (error) {
    console.log(error);
  }
}

export { saveToken, getToken, deleteToken };
