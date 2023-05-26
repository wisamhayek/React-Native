import {View, StyleSheet, Text} from 'react-native';

const Profile = () => (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Wisam Da Code</Text>
        <Text style={styles.subtitle}>Name: wisam, Surname: hayek, Age: 25, Job: developer, Hobby: coding</Text>
      </View>
    </View>
);

export default Profile;

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