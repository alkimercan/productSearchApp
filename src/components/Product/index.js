import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductImage from '../../images/productImage.png';
import ProductImage2 from '../../images/productImage2.png';
import ProductImage3 from '../../images/productImage3.png';
import ProductImage4 from '../../images/productImage4.png';
import * as actions from '../../store/actions';
import './index.css';

function Product(props) {
    const [addToCart, showAddToCart] = useState(false);
    const Image = [ProductImage, ProductImage2, ProductImage3, ProductImage4]
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(actions.setCart([...cart, props.item]));
        localStorage.setItem("cart", JSON.stringify([...cart, props.item]));
    }
    const showAddChart = cart.filter(el => el.productId === props.item.productId).length > 0;
    return (
        <div onMouseEnter={() => showAddToCart(true)} onMouseLeave={() => showAddToCart(false)} className={!addToCart ? "product" : "productHover"}>
            <div className={addToCart ? "productImage" : "productImageHover"}>
                <img style={{ marginLeft: '15px', marginTop: '3px' }} src={Image[props.image]} alt="ProductImage" />
            </div>
            <div className="productTitle">
                <span>{props.item.title}</span>
            </div>
            {!addToCart ?
                <>
                    <div className="productFilters">
                        <div>
                            <span className="bold">Marka: </span>
                            <span>{props.item.brand}</span>
                        </div>
                        <div>
                            <span className="bold">Renk: </span>
                            <span>{props.item.color}</span>
                        </div>
                    </div>
                    <div className="productPrice">
                        <div>
                            <span className="bold">{props.item.price} TL</span>
                        </div>
                        <div>
                            <span className="price">{props.item.oldPrice} TL</span>
                            {' '}
                            <span className="discount">{props.item.discount}%</span>
                        </div>
                    </div>
                </>
                :
                !showAddChart ? <div onClick={handleAddToCart} className="addToCart">
                    <span>Sepete Ekle</span>
                </div> : <div className="addToCartDisabled">
                    <span>Bu ürünü sepete ekleyemezsiniz.</span>
                </div>
            }
        </div>
    );
}

export default Product;
