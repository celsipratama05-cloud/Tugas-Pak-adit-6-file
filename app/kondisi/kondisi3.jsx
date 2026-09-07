import { Text, View } from "react-native";

export default function Soal3() {
  const isLoggedIn = true;
  const namaUser = "Amey";

  return (
    <View>
      <Text>
        {isLoggedIn
          ? `Halo, ${namaUser}!`
          : "Silakan Login Terlebih Dahulu"}
      </Text>
    </View>
  );
}