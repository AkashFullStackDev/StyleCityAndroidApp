import {Styles} from './Styles';
import {View, Image, ImageBackground} from 'react-native';

const Banner = () => {
  return (
    <View style={Styles.bannerContainer}>
      <ImageBackground
        style={Styles.bannerImage}
        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1JXe8oMW3CxQalGojerONTHuWEXf4x3BZA&usqp=CAU"}}
      />
    </View>
  );
};

export default Banner;
