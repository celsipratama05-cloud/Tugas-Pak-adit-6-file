import React from 'react';
import { View, Text } from 'react-native';

export default function CelenganSiswa() {
  let deret = 4;
  let jumlah = 0;
  const logTabungan = [];

  while (deret > 0) {
    jumlah += deret;
    const teks = `Jumlah tabungan saat ini: ${jumlah}`;
    console.log(teks);
    logTabungan.push(teks);
    deret--;
  }

  return (
    <View>
      {logTabungan.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}