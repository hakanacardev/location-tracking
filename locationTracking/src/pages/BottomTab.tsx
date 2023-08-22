import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Maps from './Maps';
import MyAccount from './MyAccount';
import {Image, View} from 'react-native';
import MyAccountImage from '../assets/MyAccount.png';
import Gps from '../assets/Gps.png';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#4D4D4D' : '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                padding: 10,
                width: '100%',
                borderTopColor: 'rgba(77, 77, 77, 0.5)',
              }}>
              <Image
                source={Gps}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 35,
                  tintColor: focused ? '#FFFFFF' : '#4D4D4D',
                }}
              />
              {/*  <Text style={{ color: focused ? '#FFFFFF' : '#3C3C3B', }}>{t("anasayfa")}</Text> */}
            </View>
          ),
        }}
        name="Home"
        component={Maps}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#4D4D4D' : '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                padding: 10,
                width: '100%',
                borderTopColor: 'rgba(77, 77, 77, 0.5)',
              }}>
              <Image
                source={MyAccountImage}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 35,
                  tintColor: focused ? '#FFFFFF' : '#4D4D4D',
                }}
              />
              {/*  <Text style={{ color: focused ? '#FFFFFF' : '#3C3C3B', }}>{t("anasayfa")}</Text> */}
            </View>
          ),
        }}
        name="MyAccount"
        component={MyAccount}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
