import React from 'react';
import { View, Text } from 'react-native';

export default function KonversiHarga() {
  const hargaStr = '150000.50';
  const stokStr = '25';

  const harga = parseFloat(hargaStr);
  const stok = parseInt(stokStr);
  const totalHarga = harga * stok;

  console.log(`Total Harga: ${totalHarga}`);

  return (
    <View>
      <Text>Harga: Rp {harga}</Text>
      <Text>Stok: {stok}</Text>
      <Text>Total Harga: Rp {totalHarga}</Text>
    </View>
  );
}