import React from 'react';
import { View, Text } from "react-native";

export default function Var() {
  let rawUsername = " admin_smknegeri10 ";

  let username = rawUsername.trim();
  let panjang = username.length;

  console.log(`Username: ${username}`);
  console.log(`Jumlah karakter: ${panjang}`);

  return (
    <View>
      <Text>Username: {username}</Text>
      <Text>Jumlah Karakter: {panjang}</Text>
    </View>
  );
}