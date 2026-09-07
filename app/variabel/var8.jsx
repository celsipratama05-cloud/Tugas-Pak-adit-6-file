import React from 'react';
import { View, Text } from 'react-native';

export default function LoginSecurity() {
  const isPasswordCorrect = true;
  const isEmailVerified = true;

  const canLogin = isPasswordCorrect && isEmailVerified;

  console.log(`Bisa Login: ${canLogin}`);

  return (
    <View>
      <Text>
        Status Login: {canLogin ? 'Tombol Terbuka' : 'Tombol Terkunci'}
      </Text>
    </View>
  );
}