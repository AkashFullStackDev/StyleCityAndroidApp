import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {Theme} from '../../Theme/Theme';
import Loader from '../Loader/loader';

const ConfirmOTP = ({
  setPhoneNumber,
  handleSignInWithPhoneNumber,
  setCode,
  confirmCode,
  setShowConfirmOTP,
}) => {
  const [showOTPBox, setShowOTPBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const onSubmitPhoneNumber = async () => {
        try
        {
            setIsLoading(true);
           await handleSignInWithPhoneNumber();
           setShowOTPBox(true);
           setIsLoading(false);
        }
        catch(error){
            Alert.alert("Invalid phone number");
            setShowOTPBox(false);
            setIsLoading(false);
            setShowConfirmOTP(false);
        }
    }
    const onSubmitCode = async () => {
        try
        {
            setIsLoading(true);
           await confirmCode();
        }
        catch(error){
            setIsLoading(false);
            setShowOTPBox(false);
            setShowConfirmOTP(false);
        }
    }
  return (
    <View style={Styles.screen}>
    {isLoading?<Loader size={50} color={Theme.colors.primary}/>:null}
      {showOTPBox ? (
        <View style={Styles.otpContainer}>
          <Text style={Styles.heading}>Confirm OTP</Text>
          <TextInput
            style={Styles.input}
            keyboardType="number-pad"
            onChangeText={text => setCode(text)}
          />
          <TouchableOpacity style={Styles.btn} onPress={onSubmitCode}>
            <Text style={Styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={Styles.otpContainer}>
          <Text style={Styles.heading}>Enter your Phone Number</Text>
          <Text>We will send you the 6 digit verification code</Text>
          <TextInput
            style={Styles.input}
            keyboardType="number-pad"
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
          <TouchableOpacity
            style={Styles.btn}
            onPress={onSubmitPhoneNumber}>
            <Text style={Styles.btnText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ConfirmOTP;

const Styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpContainer: {
    // backgroundColor: 'yellow',
    // padding: moderateScale(10),
  },
  heading: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: Theme.colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: Theme.colors.primary,
    color: Theme.colors.primary,
    fontSize: scale(18),
    marginTop: moderateVerticalScale(30),
    paddingHorizontal: moderateScale(10),
    textAlign: "center",
  },
  btn: {
    backgroundColor: 'white',
    borderWidth: scale(1),
    borderColor: Theme.colors.primary,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(10),
    borderRadius: moderateScale(5),
    marginTop: moderateVerticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Theme.colors.primary,
    fontSize: scale(16),
  },
});
