import {View, TextInput} from 'react-native';
import { Styles } from './Styles';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../Theme/Theme';

const SearchBar = ({onChangeText, onSearch}) => {
    return (
        <View style={Styles.searchBox}>
            <TextInput placeholder='search here...' 
                style={Styles.textInput}
                placeholderTextColor={Theme.colors.placeHolder}
                onChangeText={onChangeText}
            />
            <SearchIcon name="search1" size={20} color="black" onPress={onSearch}/>
        </View>
    )
} 

export default SearchBar;