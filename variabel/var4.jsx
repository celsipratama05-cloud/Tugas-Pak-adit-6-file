import React from 'react';
import { View, Text } from 'react-native';

export default function KodeKupon() {
  const string1 = 'diskon';
  const string2 = 'spesial50';

  const kodeKupon = string1.concat(string2).toUpperCase();

  console.log(`Kode Kupon: ${kodeKupon}`);

  return (
    <View>
      <Text>Kode Kupon: {kodeKupon}</Text>
    </View>
  );
}