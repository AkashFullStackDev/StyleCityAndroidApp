import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Styles } from './Styles';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../Store/Slices/Cart/Cart';

const Card = props => {
  const cartArray = useSelector(state => state.cart);
  const {name, price, image, _id} = props.item;
  const [isAvailable, setIsAvailable] = useState(false); 
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct({...props.item, qty:1}));
  };
  const removeFromCart = () => {
    dispatch(removeProduct(props.item)); 
  };
  useEffect(() => {
    setIsAvailable(
      cartArray.length > 0
        ? cartArray.some(item => item._id === _id)
        : false,
    );
  }, [cartArray]);

  return (
    <View style={Styles.cardContainer}>
      <View>
        <View style={Styles.imgContainer}>
          <Image
            style={Styles.img}
            source={{uri: image}}
            resizeMode="stretch"
          />
        </View>
          <Text style={Styles.title}>{name}</Text>
          <Text style={Styles.price}>Rs.{price}</Text>
          {isAvailable ? (
            <TouchableOpacity
              style={Styles.btnAddToCart}
              onPress={removeFromCart}>
              <Text style={Styles.btnText}>Remove from cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Styles.btnAddToCart} onPress={addToCart}>
              <Text style={Styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
          )}
      </View>
    </View>
  );
};

export default Card;
