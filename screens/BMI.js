import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function BMI(){
  
  const [weight,setWeight]=useState('')
  const [height,setHeight]=useState('')
  const [result,setResult]=useState('')
  const [bmi,setBmi] = useState('')

  const calculate = (height, weight) => {
    if (height>0){
      const a=weight/(height*height);
      setResult(a.toFixed(2));
      setHeight('');
      setWeight('');
      if (a <= 18.5 ){
        setBmi("You are underweight.")
      }
      else if (a >24.9 && a<30){
        setBmi("You are overweight.")
      }
      else if (a >=30){
        setBmi("You have obesity.")
      }
      else if (a>18.5 && a<=24.9){
        setBmi("You have normal weight.")
      }
    }
    else{
      setResult("invalid")
      setHeight('');
      setWeight('');
      setBmi('')
    }
  }

  
    return(
      <View style={styles.container}>
        <Text style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>
        Here are the steps to calculate your BMI(body mass index): 
        </Text>
        <Text style={styles.head}>
        <Text style={{fontWeight: 500}}>Measure your weight :</Text> Weigh yourself and record your weight in <Text style={{backgroundColor: '#FFA500'}}>kilograms (kg)</Text> .
        </Text>
        <Text style={styles.head}>
          <Text style={{fontWeight: 500}}>
        Measure your height: </Text> Measure your height and record it in <Text
        style={{backgroundColor: '#FFA500'}}>meters (m)</Text> .
        </Text>
        <TextInput
        placeholder="Enter your weight"
        value={weight}
        onChangeText={setWeight}
        style={styles.box}
        keyboardType="numeric">
        </TextInput>
        <TextInput
        placeholder="Enter your height"
        value={height}
        onChangeText={setHeight}
        style={styles.box}
        keyboardType="numeric">
        </TextInput>
        <TouchableOpacity
        onPress={()=>calculate(height,weight)}
        style={{
          margin: 20,
          padding: 10,
          borderRadius: 15,
          elevation: 5,
          backgroundColor: '#FFA500',
          // height: 80,
          width: 160
        }}>
         <Text
         style={{fontSize: 20}}> Calculate BMI</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginTop: 10}}>
          Your BMI is {result} .
          {bmi}
        </Text>
      </View>  
    );   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  head: {
    fontSize: 19,
  },
  box: {
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFA500',
    fontSize:20,
  }
});