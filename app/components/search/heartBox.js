import React, { useState,useEffect } from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
import { Image,Box,Checkbox,HStack,VStack,Text,Heading } from "native-base";
import {TouchableOpacity} from 'react-native';
import heartimg from '../../assets/images/ic_card_hearts.png';

const HeartBox = () => {

  const faceCard = ["7","8","9","10","J","Q","K","A"]

  const heartTemplate = {
    H7: false,
    H8: false,
    H9: false,
    H10: false,
    HJ: false,
    HQ: false,
    HK: false,
    HA: false
  };

  const [hearts, setHearts] = useState(heartTemplate);

  useEffect(() => {
    console.log(hearts);
  },[hearts])

  const handleHeartChange = (value) => {
    console.log(value);
    setHearts((prevHearts) => ({
      ...prevHearts,
      [`H${value}`]: !prevHearts[`H${value}`],
    }));
  };
  
return (
  <Box bg="grey" padding={4}>
  <VStack space={2} alignItems="center">
    {/* First Row */}
    <Image
      source={heartimg}
      alt="Centered Image"
      width={200}
      height={200}
      resizeMode="contain"
    />

    {/* Second Row */}
    <HStack space={2}>
      {faceCard.map((value, index) => (
      <TouchableOpacity key={index} onPress={() =>handleHeartChange(value)}>
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
              onChange={() => handleHeartChange(value)}
              value={value}
              isChecked={hearts[`H${value}`]}
              aria-label={`checkbox for hearts ${value}`}
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

export default HeartBox;