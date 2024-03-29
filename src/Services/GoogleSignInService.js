import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '1044209799853-c8bt9buei34840mievrtb6bmi5m5vjgd.apps.googleusercontent.com',
});

export const signInWithGoogle = async () => {
    try{
        await GoogleSignin.hasPlayServices();
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        return auth().signInWithCredential(googleCredential);
    }
    catch(error){
        throw new Error(error);
    }
}

export const signOutFromGoogle = async () => {
    try{
        await GoogleSignin.signOut();
        console.log("SignOut from google");
        await auth().signOut();
        console.log("signout from firebase");
    }
    catch(error){
        console.log("Signout Error", error);
        throw new Error(error);
    }
}