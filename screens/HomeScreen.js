import React,{ useState, useEffect } from 'react';
import { Appearance, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function HomeScreen() {

  const [theme, setTheme]= useState('');

  useEffect(() => {
    const colorScheme=Appearance.getColorScheme();
  if (colorScheme ==='dark'){
    setTheme('DARK')
    console.log("dark")
  }
  else{
    setTheme('LIGHT')
    console.log("light")
  }
  },[]);
  

  const [result, setResult] = useState('');
  const [prev, setPrev] = useState('');
  const calculation = (title) => {
    if (title == 'C') {
      setResult('');
      setPrev('');
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1))
    }
    else if (title == '=') {
      setPrev(result);
      var r= result.replace('×','*').replace('÷','/')
      const ans = Number(eval(r).toFixed(4)).toString()
      setResult(ans)
    } else setResult(result + title);
  }

  // const getColor = (light1, dark1) => darktheme ? dark1 : light1;
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculation(title)}
      style={{
        padding: 20,
        borderRadius: 50,
        // elevation: 5,
        backgroundColor: getBackcolor(type),
        height: 80,
        width: 80
      }}>
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

  const getBtnColor = (type) => {
    if (type == 'right') {
      return '#FFF'
    } else if (type == 'button') {
      return '#22252D'
    } else {
      return colors.dark
    }
  }

  const getBackcolor= (type) => {
    if (type == 'right'){
      return 'orange'
    } else if (type == 'button'){
      return '#A9A9A9'
    } else {
      return '#F7F7F7'
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
        justifyContent: 'space-between',
        backgroundColor: theme ==='DARK' ? colors.dark: colors.light
      }}>
        
        <View style={{
          height: '35%',
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: '300',
            color: theme ==='DARK' ? colors.light: colors.dark,
            paddingRight: 20,
            paddingBottom: 10,
            textAlign: 'right',
            alignItems: 'flex-end'
          }}>
            {prev}</Text>
          <Text style={{
            fontSize: 55,
            fontWeight: '200',
            color: theme ==='DARK' ? colors.light: colors.dark,
            paddingRight: 20,
            paddingBottom: 10,
            textAlign: 'right',
            alignItems: 'flex-end'
          }}>{result}</Text>
        </View>
        <View style={{
          flexDirection: 'column',
          height: '65%',
          justifyContent: 'space-evenly',
        }}>
          <View style={styles.rowStyle}>
            <Btn title='%' type="button" />
            <Btn title='C' type="button" />
            <Btn title='DL' type="button" />
            <Btn title='÷' type="right" />
          </View>
          <View style={styles.rowStyle}>
            <Btn title='7' type="numb" />
            <Btn title='8' type="numb" />
            <Btn title='9' type="numb" />
            <Btn title='×' type="right" />
          </View>
          <View style={styles.rowStyle}>
            <Btn title='4' type="numb" />
            <Btn title='5' type="numb" />
            <Btn title='6' type="numb" />
            <Btn title='+' type="right" />
          </View>
          <View style={styles.rowStyle}>
            <Btn title='1' type="numb" />
            <Btn title='2' type="numb" />
            <Btn title='3' type="numb" />
            <Btn title='-' type="right" />
          </View>
          <View style={styles.rowStyle}>
            <Btn title='00' type="numb" />
            <Btn title='0' type="numb" />
            <Btn title='.' type="numb" />
            <Btn title='=' type="right" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  }
});