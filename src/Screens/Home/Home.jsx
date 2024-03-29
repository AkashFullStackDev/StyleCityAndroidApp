import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {Styles} from './Styles';
import Banner from '../../Components/Banner/Banner';
import Heading from '../../Components/Heading/Heading';
import Card from '../../Components/Card/Card';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
  removeAllProducts,
} from '../../Store/Slices/Product/Product';
import {useState, useEffect} from 'react';
import {
  addSingleProduct,
  deleteSingleProduct,
} from '../../Store/Slices/SingleProduct/SingleProduct';
import ConstantStrings from '../../Constants/ConstantStrings';

const Home = ({navigation}) => {
  const [name, setName] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const API = `https://sttylecityapi.onrender.com/api/products?name=${name}&page=${page}&limit=${limit}`;
  const dispatch = useDispatch();

  const singleProduct = useSelector(state => state.singleProduct);
  const {data, isLoading} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts(API));
  }, [page]);

  const handleOnPress = item => {
    if (singleProduct.isAvailable) dispatch(deleteSingleProduct());
    dispatch(addSingleProduct(item));
    navigation.navigate(ConstantStrings.SINGLE_PRODUCT);
  };

  const handleOnScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const paddingToBottom = 20;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      setPage(page + 1);
    }
  };

  const handleOnChange = text => {
    setName(text);
    console.log(name);
  };
  const handleSearch = () => {
    console.log('Searching...');
    setPage(1);
    dispatch(removeAllProducts());
    console.log(API);
    console.log(name);
    dispatch(fetchProducts(API));
  };

  return (
    <View style={Styles.screen}>
      <View style={Styles.searchBarContainer}>
        <Heading title="StyleCity" styles={Styles.headingStyle} />
        <SearchBar onChangeText={handleOnChange} onSearch={handleSearch} />
      </View>

      <ScrollView onScroll={handleOnScroll}>
        <View>
          <View style={Styles.bannerContainer}>
            <Banner />
          </View>
          <View style={Styles.productsContainer}>
            {!isLoading && data.length === 0 ? (
              <Text>Product not available</Text>
            ) : null}
            {data.map(item => (
              <TouchableOpacity
                onPress={() => handleOnPress(item)}
                key={item._id}>
                <Card item={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {isLoading ? <ActivityIndicator size={50} /> : null}
      </ScrollView>
    </View>
  );
};

export default Home;
