import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, Order, Account, Login, Signup} from '../../Screens';
import {Theme} from '../../Theme/Theme';
import ConstantStrings from '../../Constants/ConstantStrings';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.primary, // Set the background color here
        },
        headerTintColor: 'white', // Set the text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false
      }}>
      <Stack.Screen name={ConstantStrings.ACCOUNT} component={Account} />
      <Stack.Screen name={ConstantStrings.PROFILE} component={Profile} />
      <Stack.Screen name={ConstantStrings.ORDER} component={Order} />
      <Stack.Screen name={ConstantStrings.SIGNUP} component={Signup} />
      <Stack.Screen name={ConstantStrings.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AccountStack;
