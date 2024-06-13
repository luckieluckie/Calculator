import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { Dailylife } from "./screens/Dailylife";
import { Pulse } from "./screens/Pulse";
import { Ionicons } from '@expo/vector-icons';
import { BMI } from "./screens/BMI";

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={ ({ route }) => ({
        drawerIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Pulse rate') {
            iconName = focused ? 'pulse' : 'pulse';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'BMI') {
            iconName = focused ? 'body' : 'body-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: '#FFA500',
        drawerInactiveTintColor: '#000000',
      }) }>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Dailylife Calculation" component={Dailylife} />
        <Drawer.Screen name="Pulse rate" component={Pulse} /> 
        <Drawer.Screen name="BMI" component={BMI} />        
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}