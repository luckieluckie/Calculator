import { Text, Switch, View, Pressable } from "react-native";
import { useState } from "react";


export function SettingsScreen() {

    const colors = {
        dark: '#22252D',
        dark1: '#292B36',
        gray: '#A9A9A9',
        light: '#FFF',
        light1: '#F7F7F7',
        silver: '#C0C0C0'
    }

    const [darktheme, setDarktheme] = useState(false);
    const getColor = (light1, dark1) => darktheme ? dark1 : light1;
    return <View style={{
        justifyContent: "space-between",
        flexDirection:"row",
        width: '100%',
        alignItems:"center"

    }}> 
        <Text style={{ fontSize: 24, margin: 5, padding: 10 }}>Darkmode   </Text>
        <Switch
            value={darktheme}
            onValueChange={() => setDarktheme(!darktheme)}
            thumbColor={getColor(colors.dark, colors.light)}
            trackColor={{
                true: colors.silver, false: colors.gray
            }} />
          

    </View>
}