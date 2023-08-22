import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Maps from './Maps';
import MyAccount from './MyAccount';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Maps}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={MyAccount}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
