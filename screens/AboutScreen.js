import { Text, View } from "react-native";

export function AboutScreen(){
    return(
      <View>
        
           <Text style={{
            fontSize:24,
            margin:5,
            padding:10
           }}>
             Calculator is just like a normal calculator that does simple calculations
            like divison, multiplication, addition, subtractions but this one has some
            special features that helps you in your daily life mathematical calculations
            like Birthday, BMI, Pulse rate, etc.
            These features can be excessed from the Dailylife calculation section. 
           </Text>
        

      </View>  
    );   
}