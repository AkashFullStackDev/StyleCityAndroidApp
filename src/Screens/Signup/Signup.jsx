import {View, Text, Alert, ScrollView, ImageBackground} from 'react-native';
import {Styles} from './Styles';
import Link from '../../Components/CustomButtons/Link/Link';
import Heading from '../../Components/Heading/Heading';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import ConstantStrings from '../../Constants/ConstantStrings';
import BackgroundImage from '../../Assets/Images/wallpaper1.jpg';
import TextInputWithLable from '../../Components/TextInputWithLable/TextInputWithLable';
import {moderateVerticalScale} from 'react-native-size-matters';
import ButtonCommon from '../../Components/CustomButtons/ButtonCommon/ButtonCommon';
import { Theme } from '../../Theme/Theme';
import Loader from '../../Components/Loader/loader';

const Signup = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleOnChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const redirect = () => {
    navigation.navigate(ConstantStrings.LOGIN);
  };
  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const response = await auth().createUserWithEmailAndPassword(
        userData.email,
        userData.password,
      );
      const res = await fetch('https://sttylecityapi.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });
      if (res.status === 200) {
        await response.user.sendEmailVerification();
        Alert.alert('Verification email has been sent!');
        setIsLoading(false);
        navigation.navigate('Login');
      } else {
        Alert.alert("Email address is already used!");
        setIsLoading(false);
      }
    } catch (error) {
      Alert.alert("Email address is already used!")
      setIsLoading(false);
      console.log('my error: ', error);
    }
  };

  return (
    <ScrollView>
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
          lable="Username"
          placeHolder="Enter username"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          onChangeText={value => handleOnChange('username', value)}
        />
        <TextInputWithLable
          lable="Email address"
          placeHolder="Enter email address"
          inputStyle={{marginBottom: moderateVerticalScale(28)}}
          onChangeText={value => handleOnChange('email', value)}
          KeyboardType="email-address"
        />
        <TextInputWithLable
          lable="Password"
          placeHolder="Enter password"
          secureTextEntry={isVisible}
          rightIcon={true}
          onPressRight={setIsVisible}
          onChangeText={value => handleOnChange('password', value)}
        />
        <ButtonCommon
          title="Signup"
          onPress={handleSignup}
          buttonStyle={Styles.btnStyle}
          textStyle={Styles.btnTextStyle}
        />
        <View style={Styles.linkElement}>
          <Text style={Styles.commenttext}>Already have an account? </Text>
          <Link title="Login" onPress={redirect} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
