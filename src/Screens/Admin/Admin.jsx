import {Text, View, TouchableOpacity} from 'react-native';
import { Styles } from './Styles';
import AddProductIcon from 'react-native-vector-icons/Foundation';
import DeleteProductIcon from 'react-native-vector-icons/Foundation';
import ConstantStrings from '../../Constants/ConstantStrings';
const Admin = ({navigation}) => {
  return (
    <View style={Styles.screen}>
      <View style={Styles.btnContainer}>
        <TouchableOpacity style={Styles.btn} onPress={()=>navigation.navigate(ConstantStrings.ADD_PRODUCT)}>
        <AddProductIcon name="page-add" size={35} color="black" />
          <Text style={Styles.btnText}>Add a product</Text>
        </TouchableOpacity>
        <View style={Styles.horizontalLine}></View>
      </View>
      <View style={Styles.btnContainer}>
        <TouchableOpacity style={Styles.btn} onPress={()=>navigation.navigate(ConstantStrings.DELETE_PRODUCT)}>
        <DeleteProductIcon name="page-delete" size={35} color="black" />
          <Text style={Styles.btnText}>Delete a product</Text>
        </TouchableOpacity>
        <View style={Styles.horizontalLine}></View>
      </View>
    </View>
  );
};

export default Admin;
