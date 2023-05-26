import React, { useState,useEffect } from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
import { Image,Box,Checkbox,HStack,VStack,Text,Heading } from "native-base";
import {TouchableOpacity} from 'react-native';
import spadeimg from '../../assets/images/ic_card_spades.png';

const SpadeBox = () => {

  const faceCard = ["7","8","9","10","J","Q","K","A"]

  const spadeTemplate = {
    H7: false,
    H8: false,
    H9: false,
    H10: false,
    HJ: false,
    HQ: false,
    HK: false,
    HA: false
  };

  const [spades, setSpades] = useState(spadeTemplate);

  useEffect(() => {
    console.log(spades);
  },[spades])

  const handleSpadeChange = (value) => {
    console.log(value);
    setSpades((prevSpades) => ({
      ...prevSpades,
      [`H${value}`]: !prevSpades[`H${value}`],
    }));
  };
  
return (
  <Box bg="grey" padding={4}>
  <VStack space={2} alignItems="center">
    {/* First Row */}
    <Image
      source={spadeimg}
      alt="Centered Image"
      width={200}
      height={200}
      resizeMode="contain"
    />

    {/* Second Row */}
    <HStack space={2}>
      {faceCard.map((value, index) => (
      <TouchableOpacity key={index} onPress={() =>handleSpadeChange(value)}>
        <Box
          key={index}
          width={"auto"}
          height={"auto"}
          bg="white"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <VStack space={2} alignItems="center">
            <Text fontSize="md" fontWeight="bold" nativeID="formLabel">
              {value}
            </Text>
            <Checkbox 
              key={value}
              size={"lg"}
              onChange={() => handleSpadeChange(value)}
              isChecked={spades[`H${value}`]}
              value={value}
              aria-label={`checkbox for spades ${value}`}
              aria-labelledby="formLabel"
            />
          </VStack>
        </Box>
      </TouchableOpacity>
      ))}
    </HStack>
  </VStack>
  </Box>
)
};

export default SpadeBox;