import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Styles} from './Styles';
import Link from '../../Components/CustomButtons/Link/Link';
import Heading from '../../Components/Heading/Heading';
import {userLogin, addUser} from '../../Store/Slices/User/User';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConstantStrings from '../../Constants/ConstantStrings';
import TextInputWithLable from '../../Components/TextInputWithLable/TextInputWithLable';
import {moderateVerticalScale} from 'react-native-size-matters';
import ButtonCommon from '../../Components/CustomButtons/ButtonCommon/ButtonCommon';
import ButtonWithLableIcon from '../../Components/ButtonWithLableIcon/ButtonWithLableIcon';
import GoogleImage from '../../Assets/Images/Google.png';
import MobileImage from '../../Assets/Images/Mobile.png';
import BackgroundImage from '../../Assets/Images/wallpaper1.jpg';
import {signInWithGoogle} from '../../Services/GoogleSignInService';
import {signInWithEmailAndPassword} from '../../Services/FirebaseAuth';
import Loader from '../../Components/Loader/loader';
import {Theme} from '../../Theme/Theme';
import ConfirmOTP from '../../Components/ConfirmOTP/ConfirmOTP';
import {signInWithPhoneNumber} from '../../Services/FirebaseAuth';

const Login = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [userGoogleData, setUserGoogleData] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [showConfirmOTP, setShowConfirmOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const onGoogleButtonPress = async () => {
    try {
      setIsLoading(true);
      const userInfo = await signInWithGoogle();
      console.log(userInfo);
      Alert.alert('Signin Successfully!');
      const {
        user: {displayName, email, phoneNumber, photoURL, uid},
      } = userInfo;
      const requiredUserData = {displayName, email, phoneNumber, photoURL, uid};
      setUserGoogleData(requiredUserData);
      dispatch(addUser(requiredUserData));
      await AsyncStorage.setItem('userInfo', JSON.stringify(requiredUserData));
      console.log(requiredUserData);
      setIsLoading(false);
      navigation.navigate(ConstantStrings.ACCOUNT);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Login failed!');
    }
  };

  const redirect = () => {
    navigation.navigate('Signup');
  };

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const user = await signInWithEmailAndPassword(
      userData.email,
      userData.password,
    );
    if (user.emailVerified) {
      dispatch(userLogin(userData));
      Alert.alert('Login successfully!');
      setUserData({
        email: '',
        password: '',
      });
      setIsLoading(false);
      navigation.navigate(ConstantStrings.ACCOUNT);
    } else {
      setIsLoading(false);
      Alert.alert('Please check your email and verify to login');
    }
  };

  const handleSignInWithPhoneNumber = async () => {
    console.log('I am handling...');
    const confirmation = await signInWithPhoneNumber(`+91${phoneNumber}`);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      const user = await confirm.confirm(code);
      console.log(user);
      Alert.alert('Phone Signin Successfully!');
      setShowConfirmOTP(false);
      dispatch(addUser(user));
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      const newUser = await AsyncStorage.getItem('userInfo');
      console.log(newUser);
      navigation.navigate(ConstantStrings.ACCOUNT);
    } catch (error) {
      console.log('Invalid Code');
      throw error;
    }
  };

  return (
    <ScrollView>
      {showConfirmOTP ? (
        <ConfirmOTP
        setPhoneNumber={setPhoneNumber}
          setCode={setCode}
          handleSignInWithPhoneNumber={handleSignInWithPhoneNumber}
          confirmCode={confirmCode}
          setShowConfirmOTP={setShowConfirmOTP}
        />
      ) : null}

      {isLoading ? <Loader size={50} color={Theme.colors.primary} /> : null}

      <ImageBackground
        source={BackgroundImage}
        style={{width: '100%', height: 300}}
      />
      <View style={Styles.mainStyle}>
        <View style={Styles.linkElement}>
          <Heading title="StyleCity" styles={Styles.formHeading} />
        </View>
        <TextInputWithLable
          lable="Email address"
          placeHolder="Enter email address"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          KeyboardType="email-address"
          onChangeText={value => handleOnChange('email', value)}
          value={userData.email}
        />
        <TextInputWithLable
          lable="Password"
          placeHolder="Enter password"
          secureTextEntry={isVisible}
          rightIcon={true}
          onPressRight={setIsVisible}
          onChangeText={value => handleOnChange('password', value)}
          value={userData.password}
        />
        <TouchableOpacity activeOpacity={0.8} style={Styles.forgotView}>
          <Text style={Styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <ButtonCommon
          title="Login"
          buttonStyle={Styles.btnStyle}
          textStyle={Styles.btnTextStyle}
          onPress={handleLogin}
        />
        <View style={Styles.linkElement}>
          <Text style={Styles.commenttext}>Don't have a account yet? </Text>
          <Link title="Signup" onPress={redirect} />
        </View>
      </View>

      <View style={Styles.btnContainer}>
        <Text style={Styles.commenttext}>OR</Text>
        <Text style={Styles.commenttext}>Signin with:</Text>
        <ButtonWithLableIcon
          text="Google"
          icon={GoogleImage}
          btnStyle={Styles.iconBtnStyle}
          textStyle={Styles.textStyle}
          iconStyle={Styles.iconStyle}
          onPress={() => onGoogleButtonPress()}
        />
        <ButtonWithLableIcon
          text="Mobile"
          icon={MobileImage}
          btnStyle={Styles.iconBtnStyle}
          textStyle={Styles.textStyle}
          iconStyle={Styles.iconStyle}
          onPress={()=>setShowConfirmOTP(true)}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
