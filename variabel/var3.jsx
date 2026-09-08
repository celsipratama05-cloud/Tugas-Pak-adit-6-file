import React from 'react';
import { View, Text } from 'react-native';

export default function SensorKomentar() {
  let komentar = 'Wah, aplikasi ini sangat lambat dan buruk!';

  let posisiBuruk = komentar.indexOf('buruk');
  let potonganKalimat = komentar.substring(0, 19);

  console.log(`Posisi kata buruk: ${posisiBuruk}`);
  console.log(`Potongan kalimat: ${potonganKalimat}`);

  return (
    <View>
      <Text>Posisi 'buruk': Indeks ke-{posisiBuruk}</Text>
      <Text>Potongan Kalimat: {potonganKalimat}</Text>
    </View>
  );
}