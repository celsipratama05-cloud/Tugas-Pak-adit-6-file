import { Text, View } from "react-native";

export default function Soal4() {
  const totalBelanja = 350000;

  return (
    <View>
      <Text
        style={{
          color:
            totalBelanja > 500000
              ? "purple"
              : totalBelanja >= 200000
              ? "blue"
              : "gray",
        }}
      >
        {totalBelanja > 500000
          ? "Anda Mendapat Diskon 20%!"
          : totalBelanja >= 200000
          ? "Anda Mendapat Diskon 10%!"
          : "Belanja lebih banyak untuk dapat diskon!"}
      </Text>
    </View>
  );
}