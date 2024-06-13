import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function Pulse() {

  const [result,setResult]=useState('');
  
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 600, fontSize: 20 }}>
        Here are the steps to calculate your pulse rate. 
        </Text>
      <Text style={styles.head}>
        First you need to locate your pulse:
        </Text>
      <Text style={styles.subhead}>
        <Text style={{ fontWeight: 600 }}>Wrist:</Text> 
        Place your index and middle fingers on the inside of your wrist, below your thumb. This is where the radial artery is located.
        </Text>
      <Text style={styles.subhead}>
        <Text style={{ fontWeight: 600 }}>Neck:</Text> 
        Place your index and middle fingers on your neck to the side of your windpipe. This is where the carotid artery is located.
        </Text>
      <Text style={styles.head} >
        Then count the number of beats you feel in
        <Text
        style={{ fontWeight: 500, fontSize: 18, backgroundColor: '#FFA500' }}> 10 seconds.</Text>
      </Text>
      <TextInput placeholder="Number of beats"
        keyboardType="numeric"
        style={styles.box}
        value={result}
        onChangeText={setResult}
      ></TextInput>
      <Text style={styles.head}>Your Pulse rate is : {result*6}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  head: {
    fontSize: 20,
    paddingTop: 5,
  },
  subhead: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  box: {
    margin: 15,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFA500',
    fontSize:20,
  }
});