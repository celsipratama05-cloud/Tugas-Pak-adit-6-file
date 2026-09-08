import React from 'react';
import { View, Text } from 'react-native';

export default function PerbaikanLoop() {
  let flag = 1;
  const logIterasi = [];

  while (flag < 10) {
    const teks = `Iterasi ke-${flag}`;
    console.log(teks);
    logIterasi.push(teks);
    flag++; // Ditambahkan increment agar loop berhenti saat flag = 10
  }

  return (
    <View>
      {logIterasi.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}