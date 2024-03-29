import {View, ScrollView} from 'react-native';
import ButtonLink from '../../Components/CustomButtons/ButtonLink/ButtonLink';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import OrderIcon from 'react-native-vector-icons/Feather';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';
import {Styles} from './Styles';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../Store/Slices/User/User';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import ConstantStrings from '../../Constants/ConstantStrings';
import auth from '@react-native-firebase/auth';

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    !isLoggedIn ? navigation.navigate(ConstantStrings.LOGIN) : null;
  }, [isLoggedIn]);

  const logout = async () => {
    try {
      await auth().signOut();
      // Successfully signed out
      dispatch(logoutUser());
    } catch (error) {
      // Handle sign-out errors
      console.log('Error signing out:', error);
    }
  };

  const getUserData = async () => {
    console.log('isLoggedIn', isLoggedIn);
    // {isLoggedIn?null:navigation.navigate("Login")}
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, []),
  );

  return (
    <ScrollView>
      <View style={Styles.screen}>
        <View style={Styles.optionContainer}>
          <ButtonLink
            onPress={() => {
              navigation.navigate(ConstantStrings.PROFILE);
            }}
            title="Edit Profile"
            Icon={ProfileIcon}
            iconName="edit"
            iconColor="blue"
            iconSize={25}
          />
          <ButtonLink
            onPress={() => {
              navigation.navigate(ConstantStrings.ORDER);
            }}
            title="Orders"
            Icon={OrderIcon}
            iconName="box"
            iconColor="blue"
            iconSize={25}
          />
          <ButtonLink
            onPress={logout}
            title="Logout"
            Icon={LogoutIcon}
            iconName="logout"
            iconColor="blue"
            iconSize={25}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
