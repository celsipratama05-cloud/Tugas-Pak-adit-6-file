import React from 'react';
import { View, Text } from 'react-native';

export default function AntreanBank() {
  let flag = 1;
  const panggilNasabah = [];

  while (flag < 10) {
    const teks = `Memanggil nasabah antrean ke-${flag}`;
    console.log(teks);
    panggilNasabah.push(teks);
    flag++;
  }

  return (
    <View>
      {panggilNasabah.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}