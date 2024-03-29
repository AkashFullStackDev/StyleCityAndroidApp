import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { Styles } from './Styles';
import Heading from '../../Components/Heading/Heading';
import {useDispatch, useSelector} from 'react-redux';
import { removeProduct, replaceProducts } from '../../Store/Slices/Cart/Cart';
import QtyIcon from 'react-native-vector-icons/Entypo';
import {useEffect, useState} from 'react';
import {Theme} from '../../Theme/Theme';

const Cart = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector(state => state.cart);
  const [isEmpty, setIsEmpty] = useState(cartArray.length > 0 ? false : true);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const totalPrice = cartArray
      .map(item => Number(item.price * Number(item.qty)))
      .reduce((acc, cur) => Number(acc + cur), [0]);
    setGrandTotal(totalPrice);
    setIsEmpty(cartArray.length > 0 ? false : true);
  }, [cartArray]);
  const updateCart = product => {
    const newCartArray = cartArray.map(item =>
      item._id === product._id ? product : item,
    );
    dispatch(replaceProducts(newCartArray));
  };
  return (
    <View style={Styles.screen}>
      <Heading title="Cart" styles={Styles.headingStyle} />
      {isEmpty ? <Text style={Styles.emptyHeading}>Cart is empty</Text> : null}
      <FlatList
        data={cartArray}
        renderItem={item => <CartItem item={item} updateCart={updateCart} />}
        keyExtractor={item => item._id}
        style={Styles.flatList}
      />
      {!isEmpty ? (
        <View style={Styles.btnCheckoutContainer}>
          <View style={Styles.totalContainer}>
            <Text style={Styles.totalTitleText}>Total:</Text>
            <Text style={Styles.totalPriceText}>Rs.{grandTotal}</Text>
          </View>
          <TouchableOpacity style={Styles.btnCheckout}>
            <Text style={Styles.btnTextCheckout}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const CartItem = ({item, updateCart}) => {
  const [totalPrice, setTotalPrice] = useState(Number(price));
  const product = item.item;
  const {
    name,
    price,
    image,
    description,
    rating,
    category,
    subcategory,
    _id,
    __v,
  } = product;
  const [qty, setQty] = useState(product.qty);

  const increaseQty = () => {
    if (qty < 10) setQty(qty + 1);
  };
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };
  useEffect(() => {
    setTotalPrice(Number(price * qty));
    updateCart({
      qty,
      name,
      price,
      image,
      description,
      rating,
      category,
      subcategory,
      _id,
      __v,
    });
  }, [qty]);
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(product));
  };
  return (
    <View style={Styles.productContainer}>
      <View>
        <Image
          style={Styles.productImg}
          source={{uri: image}}
          resizeMode="stretch"
        />
      </View>
      <View style={Styles.detailsContainer}>
        <View style={Styles.details}>
          <View>
            <Text style={Styles.textBox}>Product:</Text>
            <Text style={Styles.textBox}>Price:</Text>
            <Text style={Styles.textBox}>Quantity:</Text>
          </View>
          <View>
            <View>
              <Text style={Styles.textBox}>{name}</Text>
              <Text style={Styles.textBox}>Rs.{totalPrice}</Text>
            </View>
            <View style={Styles.btnQuantityContainer}>
              <TouchableOpacity
                style={Styles.btnQuantity}
                onPress={decreaseQty}>
                <QtyIcon
                  name="squared-minus"
                  size={30}
                  color={Theme.colors.primary}
                />
              </TouchableOpacity>
              <Text style={Styles.qty}>{qty}</Text>
              <TouchableOpacity
                style={Styles.btnQuantity}
                onPress={increaseQty}>
                <QtyIcon
                  name="squared-plus"
                  size={30}
                  color={Theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={Styles.btnRemoveContainer}>
          <TouchableOpacity style={Styles.btnRemove} onPress={removeFromCart}>
            <Text style={Styles.btnText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
