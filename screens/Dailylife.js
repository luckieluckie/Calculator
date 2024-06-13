import { Image, Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export function Dailylife(){
    return(
        <View>
            <Pressable
            style={{
                fontSize:24,
                margin:5,
                padding:10}}
               >
            <Icon name="heart-pulse" size={30} color="#000" />
                <Text>
                    Pulse rate
                </Text>
            </Pressable>
        </View>
    );
}