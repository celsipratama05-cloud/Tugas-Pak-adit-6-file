import React from 'react';
import { View, Text } from 'react-native';

export default function SyaratBeasiswa() {
  const isNilaiTinggi = true;
  const isJuaraLomba = false;

  const berhakBeasiswa = isNilaiTinggi || isJuaraLomba;

  console.log(`Dapat Beasiswa: ${berhakBeasiswa}`);

  return (
    <View>
      <Text>
        Status Beasiswa:{' '}
        {berhakBeasiswa ? 'Berhak Menerima' : 'Tidak Menerima'}
      </Text>
    </View>
  );
}