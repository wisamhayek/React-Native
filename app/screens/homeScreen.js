import React, { useState,useEffect } from "react";
import { ScrollView,Box,Heading } from "native-base";
import UpdatedToDraw from '../components/search/updatedToDraw';
import SpadeBox from '../components/search/spadeBox';
import DiamondBox from "../components/search/diamondBox";
import HeartBox from "../components/search/heartBox";
import ClubBox from "../components/search/clubBox";

const HomeScreen = ({ navigation }) => {
  
return (
  <ScrollView>
    <UpdatedToDraw />
    <Box
    justifyContent="center"
    alignItems="center"
    padding={1}
    >
      <Heading padding={"6px"} textAlign={"center"}>Search</Heading>
    </Box>

    <SpadeBox />
    <DiamondBox />
    <HeartBox />
    <ClubBox />

  </ScrollView>
)
};

export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });



{/* <Stack direction="row" space={2} justifyContent="center" alignItems="center">
    <Checkbox.Group style={{ display: "flex", flexDirection: "row" }} onChange={setSelectedValues} value={selectedValues}>
      <Checkbox value="checkbox1" onChange={() => handleCheckboxChange('checkbox1')}>
        Checkbox 1
      </Checkbox>
      <Checkbox value="checkbox2" onChange={() => handleCheckboxChange('checkbox2')}>
        Checkbox 2
      </Checkbox>
      <Checkbox value="checkbox3" onChange={() => handleCheckboxChange('checkbox3')}>
        Checkbox 3
      </Checkbox>
      <Checkbox value="checkbox4" onChange={() => handleCheckboxChange('checkbox4')}>
        Checkbox 4
      </Checkbox>
    </Checkbox.Group>
  </Stack> */}

      {/* <Box
        justifyContent="center"
        alignItems="center"
        padding={1}
        onPress={handleBoxClick}
      >
        <HStack>
          <Box>
          <Image source={diamondimg} alt="Diamond Image" size="md" resizeMode="contain" />
            <Checkbox isChecked={checkboxState} onChange={handleBoxClick} />
          </Box>
          <Box>
          <Image source={diamondimg} alt="Diamond Image" size="md" resizeMode="contain" />
            <Checkbox isChecked={checkboxState} onChange={handleBoxClick} />
          </Box>
        </HStack>
      </Box> */}



  //     const [checkboxState, setCheckboxState] = useState(false);

  // const handleBoxClick = () => {
  //   setCheckboxState(!checkboxState);
  // };

  // useEffect(() => {
  //   console.log(checkboxState);
  // },[checkboxState])