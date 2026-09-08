import React from 'react';
import { View, Text } from 'react-native';

export default function KalkulatorDiskon() {
  let totalBelanja = 250000;

  // Potongan kupon 50.000
  totalBelanja -= 50000;

  // Pajak 10%
  const pajak = totalBelanja * 0.1;
  totalBelanja += pajak;

  console.log(`Total Pembayaran Akhir: ${totalBelanja}`);

  return (
    <View>
      <Text>Total Pembayaran Akhir: Rp {totalBelanja}</Text>
    </View>
  );
}