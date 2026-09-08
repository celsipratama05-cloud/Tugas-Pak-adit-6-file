import React from 'react';
import { View, Text } from 'react-native';

export default function ScopeTest() {
  const isMember = true;
  let statusDiskon = '';

  if (isMember) {
    let diskonLet = 0.2; // Hanya bisa diakses di dalam blok 'if'
    var diskonVar = 0.1; // Bisa diakses di luar blok 'if'

    statusDiskon = `Diskon di dalam blok (let): ${diskonLet}`;
  }

  console.log(`Akses diskonVar dari luar blok: ${diskonVar}`);

  return (
    <View>
      <Text>{statusDiskon}</Text>
      <Text>Diskon di luar blok (var): {diskonVar}</Text>
    </View>
  );
}