import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAF50' }}>
      <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>Welcome to MedRemind</Text>
      <TouchableOpacity 
        onPress={() => router.push('/auth')}
        style={{
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#4CAF50', fontSize: 16 }}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
