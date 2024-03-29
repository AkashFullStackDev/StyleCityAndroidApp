import {Alert, PermissionsAndroid, Platform, Linking} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export const androidCameraPermissions = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        Alert.alert(
          'Permissions required',
          'Please enable storage permissions in app settings.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
          {cancelable: false},
        );
        return false;
      }
    }
  } catch (error) {
    console.error('Permission request error:', error);
    return false;
  }
};

export const onCamera = async () => {
  const data = await ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
    freeStyleCropEnabled: true
  });
  return data;
};
export const onGallery = async () => {
  const data = await ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
    freeStyleCropEnabled: true
  });
  return data;
};

