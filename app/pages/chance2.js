import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Table, Row, Rows } from 'react-native-table-component';


const Chance2 = () => {

  const tableHead = ['Heart', 'Spade', 'Diamond', 'Club'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['5', '6', '7', '8'],
    ['9', '10', '11', '12'],
    ['13', '14', '15', '16'],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
        <Rows data={tableData} textStyle={styles.text}/>
      </Table>
    </View>
  );
};

export default Chance2;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});