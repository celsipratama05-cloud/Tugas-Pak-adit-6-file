import React from 'react';
import { View, Text } from 'react-native';

export default function ValidasiUsia() {
  const inputUsia = '17';
  const syaratUsia = 17;

  // Konversi hasil boolean ke string menggunakan .toString()
  const hasilStrict = (inputUsia === syaratUsia).toString();
  const hasilPerbandingan = (inputUsia >= syaratUsia).toString();

  console.log(`Strict Equal (===): ${hasilStrict}`);
  console.log(`erbandingan (>=): ${hasilPerbandingan}`);

  return (
    <View>
      <Text>Hasil Strict Equal (===) : {hasilStrict}</Text>
      <Text>Hasil Perbandingan (>=) : {hasilPerbandingan}</Text>
    </View>
  );
}