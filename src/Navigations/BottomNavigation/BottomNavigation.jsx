import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart} from '../../Screens';
import HomeIcon from 'react-native-vector-icons/Fontisto';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartIcon from 'react-native-vector-icons/FontAwesome';
import {Styles} from "./Styles"
import {AccountStack} from '../../Screens';
import {HomeStack} from '../../Screens';
import AdminIcon from 'react-native-vector-icons/FontAwesome5';
import {AdminStack} from '../../Screens';
import ConstantStrings from '../../Constants/ConstantStrings';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName={ConstantStrings.HOME} screenOptions={Styles}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <HomeIcon name="home" size={25} color={color} />
            ),
            title: 'Home',
            headerShown: false
          }}
        />
        <Tab.Screen
          name={ConstantStrings.ACCOUNT_STACK}
          component={AccountStack}
          options={{
            tabBarIcon: ({color}) => (
              <AccountIcon name="account-circle" size={33} color={color} />
            ),
            // headerShown: false,
            title: 'Account'
          }}
        />
        <Tab.Screen
          name={ConstantStrings.CART}
          component={Cart}
          options={{
            tabBarIcon: ({color}) => (
              <CartIcon name="shopping-cart" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ConstantStrings.ADMIN_STACK}
          component={AdminStack}
          options={{
            tabBarIcon: ({color}) => (
              <AdminIcon name="user-shield" size={26} color={color} />
            ),
            headerShown: false,
            title: 'Admin'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
