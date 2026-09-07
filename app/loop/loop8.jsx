import React from 'react';
import { View, Text } from 'react-native';

export default function SensorParkir() {
  let i = 0;
  const statusSensor = [];

  while (i < 5) {
    let teks = '';
    if (i === 3) {
      teks = 'Awas Halangan Dekat!';
    } else {
      teks = `Pemeriksaan posisi ke-${i}`;
    }

    console.log(teks);
    statusSensor.push(teks);
    i++;
  }

  return (
    <View>
      {statusSensor.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}