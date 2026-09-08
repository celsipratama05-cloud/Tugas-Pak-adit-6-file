import React from 'react';
import { View, Text } from 'react-native';

export default function AntreanBioskop() {
  const hasil = [];

  for (let i = 1; i <= 8; i++) {
    const teks = `Tiket antrean nomor: ${i}`;
    console.log(teks);
    hasil.push(teks);
  }

  return (
    <View>
      {hasil.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}