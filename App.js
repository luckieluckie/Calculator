import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function App() {

  const [darktheme, setDarktheme] = useState(false);
  const [result, setResult] = useState('')

  const calculation=(title)=>{
    if (title=='C'){
      setResult('')
    } else if (title== 'DL'){
      setResult(result.substring(0,result.length - 1))
    } else if (title== '='){
      const ans= Number(eval(result).toFixed(4)).toString()
      setResult(ans)
    }else setResult(result+title);
  }

  const getColor = (light1, dark1) => darktheme ? dark1 : light1;
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={()=> calculation(title)}
     style={{ 
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      backgroundColor: '#A9A9A9',
      margin: 5,
      height: 80,
      width: 80 }}>
      <Text style={{
        fontSize: 30,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: getBtnColor(type)
      }}
      >{title}
      </Text>
    </TouchableOpacity>
  )

  const getBtnColor=(type)=>{
    if (type=='right'){
      return '#EB6363'
    } else if (type=='button'){
      return '#35FB06'
    } else{
      return getColor(colors.dark, colors.light)
    }
  }


  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    gray: '#A9A9A9',
    light: '#FFF',
    light1: '#F7F7F7',
    silver: '#C0C0C0'
  }

  return (
    <SafeAreaView>
    <View style={{
      height: '100%',
      width: '100%',

      paddingVertical: 20,
      backgroundColor: getColor(colors.light, colors.dark)
    }}>
      <Switch
        value={darktheme}
        onValueChange={() => setDarktheme(!darktheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{
          true: colors.silver, false: colors.gray
        }} />
      <View>
      <Text style={{
        fontSize: 40,
        color: getColor(colors.dark, colors.light),
        paddingRight: 20,
        paddingBottom: 10,
        marginTop: 220,
        textAlign: 'right',
        alignItems: 'flex-end'
      }}>
        {result}</Text>
      </View>
      <View style={{ 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: getColor(colors.silver, colors.gray)
        }}>
        <Btn title='C' type= "button"/>
        <Btn title='DL' type= "button"/>
        <Btn title='%' type= "button"/>
        <Btn title='/' type= "right"/>
        <Btn title='7' type= "numb"/>
        <Btn title='8' type= "numb"/>
        <Btn title='9' type= "numb"/>
        <Btn title='*' type= "right"/>
        <Btn title='4' type= "numb"/>
        <Btn title='5' type= "numb"/>
        <Btn title='6' type= "numb"/>
        <Btn title='+' type= "right"/>
        <Btn title='1' type= "numb"/>
        <Btn title='2' type= "numb"/>
        <Btn title='3' type= "numb"/>
        <Btn title='-' type= "right"/>
        <Btn title='00' type= "numb"/>
        <Btn title='0' type= "numb"/>
        <Btn title='.' type= "numb"/>
        <Btn title='=' type= "right"/>
      </View>
    </View>
    </SafeAreaView>
  );
}
