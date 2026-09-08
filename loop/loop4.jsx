import React from 'react';
import { View, Text } from 'react-native';

export default function MejaVIP() {
  const daftarMeja = [];

  for (let deret = 2; deret < 10; deret += 2) {
    const teks = `Nomor Meja VIP: ${deret}`;
    console.log(teks);
    daftarMeja.push(teks);
  }

  return (
    <View>
      {daftarMeja.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}