import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {Styles} from "./Styles"
import UserIcon from 'react-native-vector-icons/FontAwesome';
import { androidCameraPermissions,onCamera, onGallery } from '../../Permissions/Permissions';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import { Theme } from '../../Theme/Theme';

const Profile = () => {
  const [imagePath, setImagePath] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const user = auth().currentUser;

  useEffect(() => {
    user.photoURL ? setPhotoURL(user.photoURL) : null;
  }, []);

  useEffect(() => {
    console.log(imagePath);
    // handleSavePhoto();
  }, [imagePath]);


  const handleSavePhoto = async () => {
    try {
      console.log(imagePath);
      //Upload the photo to Firebse Storage
      const reference = storage().ref(`profilePhotos/${user.uid}`);
      await reference.putFile(imagePath);
      //Get the download URL of the uploaded photo
      const url = await reference.getDownloadURL();
      // Update the user's profile in Firebase Authentication with the download URL
      await user.updateProfile({
        photoURL: url,
      });
      // Update the local state to reflect the change
      setPhotoURL(url);
    } catch (error) {
      console.error('Error uploading photo: ', error);
    }
  };

  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermissions();
    if (permissionStatus) {
      Alert.alert('Profile Picture', 'Choose an option', [
        {text: 'Camera', onPress: handleOnCamera},
        {text: 'Gallery', onPress: handleOnGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  const handleOnCamera = async () => {
    try {
      const data = await onCamera();
      setImagePath(data.path);
    } catch (error) {
      Alert.alert("Don't have required permissions");
    }
  };
  const handleOnGallery = async () => {
    try {
      const data = await onGallery();
      setImagePath(data.path);
    } catch (error) {
      Alert.alert("Don't have required permissions");
    }
  };

  return (
    <ScrollView>
      <View style={Styles.screenContainer}>
        {/* *******Top User Section******** */}
        <View style={Styles.userBackgroud}>
          <View style={Styles.userContainer}>
            <View style={Styles.userIconContainer}>
              {photoURL ? (
                <Image style={Styles.profilePhoto} source={{uri: photoURL}} />
              ) : (
                <UserIcon name="user-circle" size={150} color="#fff" />
              )}
            </View>
            <View>
              <TouchableOpacity
                style={Styles.btnChangePhotoStyle}
                onPress={onSelectImage}>
                <Text style={Styles.btnText}>Edit Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* *******Middle User Details Section********** */}
        <View style={Styles.userDetails}>
          <View style={Styles.elementContainer}>
            <Text style={Styles.textBox}>Name</Text>
            <TextInput
              style={Styles.textInput}
              placeholder="Name"
              placeholderTextColor={Theme.colors.placeHolder}
            />
          </View>
          <View style={Styles.elementContainer}>
            <Text style={Styles.textBox}>Email ID</Text>
            <TextInput
              style={Styles.textInput}
              placeholder="Email ID"
              placeholderTextColor={Theme.colors.placeHolder}
            />
          </View>
          <View style={Styles.elementContainer}>
            <Text style={Styles.textBox}>Address</Text>
            <TextInput
              style={Styles.textInput}
              placeholder="Address"
              placeholderTextColor={Theme.colors.placeHolder}
            />
          </View>
          <View style={Styles.elementContainer}>
            <Text style={Styles.textBox}>Mobile Number</Text>
            <TextInput
              style={Styles.textInput}
              placeholder="Mobile number"
              placeholderTextColor={Theme.colors.placeHolder}
            />
          </View>
          <View style={Styles.btnUpdateContainer}>
            <TouchableOpacity style={Styles.btnUpdate} onPress={handleSavePhoto}>
              <Text style={Styles.btnUpdateText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
