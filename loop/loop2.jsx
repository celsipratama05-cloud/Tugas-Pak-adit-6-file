import React from 'react';
import { View, Text } from 'react-native';

export default function PeluncuranRoket() {
  const log = [];

  for (let i = 5; i >= 1; i--) {
    console.log(i);
    log.push(`${i}`);
  }

  console.log('Roket Meluncur!');
  log.push('Roket Meluncur!');

  return (
    <View>
      {log.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}