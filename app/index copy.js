import { StyleSheet, Text, View } from "react-native";
import {Link} from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link style={styles.link} href={{pathname: "/wisamDaCode",
              params: {name: "wisam",surname: "hayek",age: "25",job: "developer",hobby: "coding"}
        }}>Open wisam</Link>
        <Link style={styles.link} href={{pathname: "/amalDaLaw",
              params: {name: "amal",surname: "simaan",age: "25",job: "lawyer",hobby: "swiming"}
        }}>Open Amal</Link>
      </View>
    </View>
    </SafeAreaProvider>
  );
}

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
  link:{
    textAlign:"center",
    color:"black",
    fontSize:20,
    padding:10,
  }
});
