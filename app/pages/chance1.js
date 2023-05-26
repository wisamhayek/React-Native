import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useSearchParams } from 'expo-router';

const Chance1 = () => {
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
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Chance 1</Text>
        <Text style={styles.subtitle}>This is Chance 1 page</Text>
      </View>
    </View>
      <View>
        <Text style={{fontSize:30}}>Hello {name}! (@{username})</Text>
        <Text style={{fontSize:30}}>Hello {name}! (@{username})</Text>
        {data && data.map((item, index) => (
          <Text key={index}>{item.name}</Text>
        ))}
        {error && <Text>{error}</Text>}
        {/* <Button title="Go to home" onPress={() => router.back()} /> */}
      </View>
      </SafeAreaView>
)};

export default Chance1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});