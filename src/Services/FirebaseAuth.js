import auth from '@react-native-firebase/auth';

export const signInWithEmailAndPassword = async (email, password) => {
    try{
        const response = await auth().signInWithEmailAndPassword(email, password);
        return response.user;
    }
    catch(error){
        console.log("Error: Signin with email and password:", error);
        throw error;
    }
};


export const signInWithPhoneNumber = async (phoneNumber) => {
    try{
        console.log("I am auth")
        return await auth().signInWithPhoneNumber(phoneNumber);
    }
    catch(error){
        console.log("Phone authentication error occured: ", error);
        throw error;
    }
}