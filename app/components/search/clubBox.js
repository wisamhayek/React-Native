import React, { useState,useEffect } from "react";
// import { StyleSheet, Text, View, Button } from "react-native";
import { Image,Box,Checkbox,HStack,VStack,Text,Heading } from "native-base";
import {TouchableOpacity} from 'react-native';
import clubimg from '../../assets/images/ic_card_clubs.png';

const ClubBox = () => {

  const faceCard = ["7","8","9","10","J","Q","K","A"]

  const clubTemplate = {
    H7: false,
    H8: false,
    H9: false,
    H10: false,
    HJ: false,
    HQ: false,
    HK: false,
    HA: false
  };

  const [clubs, setClubs] = useState(clubTemplate);

  useEffect(() => {
    console.log(clubs);
  },[clubs])

  const handleClubChange = (value) => {
    console.log(value);
    setClubs((prevClubs) => ({
      ...prevClubs,
      [`H${value}`]: !prevClubs[`H${value}`],
    }));
  };
  
return (
  <Box bg="grey" padding={4}>
  <VStack space={2} alignItems="center">
    {/* First Row */}
    <Image
      source={clubimg}
      alt="Centered Image"
      width={200}
      height={200}
      resizeMode="contain"
    />

    {/* Second Row */}
    <HStack space={2}>
      {faceCard.map((value, index) => (
      <TouchableOpacity key={index}onPress={() =>handleClubChange(value)}>
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
              onChange={() => handleClubChange(value)}
              isChecked={clubs[`H${value}`]}
              value={value}
              aria-label={`checkbox for clubs ${value}`}
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

export default ClubBox;