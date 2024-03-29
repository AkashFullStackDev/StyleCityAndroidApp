import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Admin } from '../../Screens';
import { Theme } from '../../Theme/Theme';
import {AddProduct} from '../../Screens';
import {DeleteProduct} from '../../Screens';
import ConstantStrings from '../../Constants/ConstantStrings';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ConstantStrings.ADMIN}
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.primary,
        },
        headerTintColor: 'white', // Set the text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name={ConstantStrings.ADMIN} component={Admin} />
      <Stack.Screen name={ConstantStrings.ADD_PRODUCT} component={AddProduct} />
      <Stack.Screen name={ConstantStrings.DELETE_PRODUCT} component={DeleteProduct} />
    </Stack.Navigator>
  );
};

export default AdminStack;
