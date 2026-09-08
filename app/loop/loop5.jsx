import React from 'react';
import { View, Text } from 'react-native';

export default function PeringatanSuhu() {
  const riwayatPengecekan = [];

  for (let i = 0; i <= 6; i++) {
    let pesan = '';
    if (i === 3) {
      pesan = 'Peringatan: Suhu Mesin Stabil!';
    } else {
      pesan = `Siklus pengecekan ke-${i}`;
    }

    console.log(pesan);
    riwayatPengecekan.push(pesan);
  }

  return (
    <View>
      {riwayatPengecekan.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}