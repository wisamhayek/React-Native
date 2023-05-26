import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useSearchParams } from 'expo-router';


const UserName = () => {
    const router =  useRouter();

    const {username,name} = useSearchParams();

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);

    const headers = {
      id: "6359b43d7a53ea804741c57e",
    };

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/v1/users/',{headers:headers});
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };
    
  return (
    <SafeAreaView>
    <View>
      <Text style={{fontSize:30}}>Hello {name}! (@{username})</Text>
      {data && data.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
      {error && <Text>{error}</Text>}
      <Button title="Go to home" onPress={() => router.back()} />
    </View>
    </SafeAreaView>
  )
}

export default UserName