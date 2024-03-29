import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Styles} from './Styles';
import {useEffect, useState} from 'react';
import QtyIcon from 'react-native-vector-icons/Entypo';
import {Theme} from '../../Theme/Theme';
import {useSelector, useDispatch} from 'react-redux';
import {addProduct, removeProduct} from '../../Store/Slices/Cart/Cart';

// const imgURI = 'https://reactnative.dev/img/tiny_logo.png';

const SingleProduct = () => {
  const product = useSelector(state => state.singleProduct.data);
  const {name, price, image, description} = product;
  const [totalPrice, setTotalPrice] = useState(price);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const cartArray = useSelector(state => state.cart);
  const [isAvailable, setIsAvailable] = useState(false);
  const addToCart = () => {
    dispatch(addProduct({...product, qty}));
  };
  const removeFromCart = () => {
    dispatch(removeProduct(product));
  };

  useEffect(() => {
    setIsAvailable(
      cartArray.length > 0
        ? cartArray.some(item => item._id === product._id)
        : false,
    );
  }, [cartArray]);
  const increaseQty = () => {
    if (qty < 10) setQty(qty + 1);
  };
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  useEffect(() => {
    setTotalPrice(price * qty);
  }, [qty]);

  return (
    <View style={Styles.screen}>
      <ScrollView>
        <Image
          style={Styles.productImage}
          source={{uri: image}}
          resizeMode="stretch"
        />
        <View style={Styles.horizontalPadding}>
          <View style={Styles.productContainer}>
            <Text style={Styles.textBox}>{name}</Text>
            <View style={Styles.qtyPriceContainer}>
              <View style={Styles.quantityContainer}>
                <View>
                  <Text style={Styles.quantityText}>Quantity:</Text>
                </View>
                <View style={Styles.btnQuantityContainer}>
                  <TouchableOpacity
                    style={Styles.btnQuantity}
                    onPress={decreaseQty}>
                    <QtyIcon
                      name="squared-minus"
                      size={20}
                      color={Theme.colors.primary}
                    />
                  </TouchableOpacity>
                  <Text style={Styles.qty}>{qty}</Text>
                  <TouchableOpacity
                    style={Styles.btnQuantity}
                    onPress={increaseQty}>
                    <QtyIcon
                      name="squared-plus"
                      size={20}
                      color={Theme.colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.priceContainer}>
                <Text style={Styles.priceTitle}>Total Price: Rs.</Text>
                <Text style={Styles.priceText}>{totalPrice}</Text>
              </View>
            </View>
          </View>
          <View style={Styles.detailsContainer}>
            <Text style={Styles.textBox}>Product details</Text>
            <Text style={Styles.productDetails}>{description}</Text>
          </View>
        </View>
      </ScrollView>
      {isAvailable ? (
        <TouchableOpacity style={Styles.btnAddToCart} onPress={removeFromCart}>
          <Text style={Styles.btnText}>Remove from cart</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={Styles.btnAddToCart} onPress={addToCart}>
          <Text style={Styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SingleProduct;
