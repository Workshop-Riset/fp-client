import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  Pressable,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 25,
          borderWidth: 3,
          borderColor: "gray",
        }}
      >
        <View
          style={{
            flex: 3,
            // backgroundColor: "gray",
            borderRadius: 25,
            borderColor: "#eecc6a",
            borderWidth: 3,
            marginBottom: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/home.png")}
            style={{ width: 350, height: 300 }}
          />
        </View>

        <View style={{ flex: 3 }}>
          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder="Username"
          />
          <TextInput
            style={[styles.input, { width: "100%", marginBottom: 20 }]}
            placeholder="Password"
          />

          <Pressable>
            <View
              style={{
                borderRadius: 30,
                borderColor: "#eecc6a",
                borderWidth: 1,
                marginTop: 5,
                backgroundColor: "#eecc6a",
                alignItems: "center",
                justifyContent: "center",
                height: 35,
              }}
            >
              <Text> Login </Text>
            </View>
          </Pressable>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ marginTop: 5, marginBottom: 5 }}>
            You already have an account? Login
            <Text style={{ color: "blue", fontSize: 16 }}> here </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const width_proportion = "80%";
const height_proportion = "40%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    // borderRadius: 10,
    // backgroundColor: "#eecc6a",
  },
  input: {
    borderRadius: 30,
    borderColor: "#eecc6a",
    borderWidth: 1,
    height: 40,

    paddingLeft: 20,
    marginTop: 5,
    backgroundColor: "white",
  },
});
