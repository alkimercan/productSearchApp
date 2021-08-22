import './index.css';
import Logo from '../../images/logo.png';
import Search from '../../images/search.png';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import productImageSmall from '../../images/productImageSmall.png';
import Modal from '../../components/Modal';

function Header(props) {
  const [cartClicked, isCartClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    dispatch(actions.setCart(cartData))
  }, [dispatch]);
  const [deleteClicked, isDeleteClicked] = useState(false);
  const [value, setValue] = useState('');
  const [targetItem, setTargetItem] = useState('');
  const products = JSON.parse(localStorage.getItem("products"));
  const compareDateAsc = (a, b) => {
    if (new Date(a.createdDate) > new Date(b.createdDate)) {
      return -1;
    }
    if (new Date(a.createdDate) < new Date(b.createdDate)) {
      return 1;
    }
    return 0;
  }
  const cart = useSelector(state => state.cart);
  const cartData = cart.sort(compareDateAsc);
  return (
    <div id='header' className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logoStyle" />
      </div>
      <div className="search">
        <img onClick={() => {
          const val = value.trim();
          if (val.length > 2) {
            dispatch(actions.setKeyword(val))
            const newProductArr = products.filter(el => el.title.toLowerCase().includes(val.toLowerCase()));
            dispatch(actions.setProductData(newProductArr));
          }
        }
        } src={Search} alt="Search" className="searchStyle" />
        <input type="text" placeholder="25 milyon’dan fazla ürün içerisinde ara" onKeyDown={(event) => {
          const val = value.trim();
          if (event.code === "Enter" && val.length > 2) {
            dispatch(actions.setKeyword(val));
            const newProductArr = products.filter(el => el.title.toLowerCase().includes(val.toLowerCase()));
            dispatch(actions.setProductData(newProductArr));
          }
        }} value={value} onChange={e => setValue(e.target.value)} />
      </div>
      <div className="cart-Button" onMouseEnter={() => isCartClicked(true)}>
        {cartData.length > 0 ?
          <div className="circle">
            <div className="ellipse">
              <div className="textCart">{cartData.length}</div>
            </div>
          </div> : null
        }
        <span className="sepetim">Sepetim</span>
      </div>
      {
        cartClicked ?
          <>
            <div className="split" />
            <div className="cartBackground" onMouseLeave={() => isCartClicked(false)}>
              {cartData.map((el, j) => (<div key={`cartItem${j}`} className="cartItem" >
                <div className="cartItemImage" >
                  <img style={{ margin: '7px' }} src={productImageSmall} alt="productImageSmall" />
                </div>
                <div className="cartItemBody" >
                  <div className="cartTitle" >
                    {el.title}
                  </div>
                  <div className="cartItemDelete" onClick={() => {
                    setTargetItem(el);
                    isDeleteClicked(prev => !prev)
                  }}>
                    <span>Kaldır</span>
                  </div>
                </div>
              </div>))}
            </div>
          </> : null
      }
      {deleteClicked ? <Modal item={targetItem} noClicked={() => isDeleteClicked(prev => !prev)} /> : null}
    </div >
  );
}

export default Header;
