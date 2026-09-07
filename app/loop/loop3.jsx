import React from 'react';
import { View, Text } from 'react-native';

export default function AkumulasiPoin() {
  let jumlah = 0;
  const riwayat = [];

  for (let deret = 5; deret > 0; deret--) {
    jumlah += deret;
    const teks = `Jumlah total saat ini: ${jumlah}`;
    console.log(teks);
    riwayat.push(teks);
  }

  return (
    <View>
      {riwayat.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}