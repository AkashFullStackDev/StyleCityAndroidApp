import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../Screens';
import {SingleProduct} from '../../Screens';
import ConstantStrings from '../../Constants/ConstantStrings';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name={ConstantStrings.HOME}
        component={Home}
      />
      <Stack.Screen
        options={{title: 'Product Details'}}
        name={ConstantStrings.SINGLE_PRODUCT}
        component={SingleProduct}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
