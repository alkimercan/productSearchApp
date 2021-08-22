import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import Product from '../Product';
import './index.css';

function ProductArea(props) {
  const products = useSelector(state => state.products);
  const sort = useSelector(state => state.sort);
  const brand = useSelector(state => state.brand);
  const color = useSelector(state => state.color);
  const selectedPage = useSelector(state => state.selectedPage);
  const dispatch = useDispatch();
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    dispatch(actions.setProductData(products))
  }, [dispatch]);
  const comparePriceDesc = (a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  }
  const comparePriceAsc = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  const compareDefault = (a, b) => {
    if (a.productId < b.productId) {
      return -1;
    }
    if (a.productId > b.productId) {
      return 1;
    }
    return 0;
  }
  const compareNameAsc = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  const compareNameDesc = (a, b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  }
  const filterColor = color ? products.filter(el => el.color === color) : products;
  const filterBrand = brand ? filterColor.filter(el => el.brand === brand) : filterColor;
  const sortedProducts = () => {
    let temp = filterBrand;
    switch (sort) {
      case 1:
        temp.sort(comparePriceAsc);
        break;
      case 2:
        temp.sort(comparePriceDesc);
        break;
      case 3:
        temp.sort(compareNameAsc);
        break;
      case 4:
        temp.sort(compareNameDesc);
        break;
      default:
        temp.sort(compareDefault);
        break;
    }
    return temp;
  }
  const productTable = sortedProducts().slice((selectedPage - 1) * 12, selectedPage * 12);
  return (
    <div className="productArea">
      {productTable.map((el, i) => el &&
        i % 4 === 0 && (<div key={`productRow${i}`} className="productRow">
          {productTable.slice(i, i + 4).map(
            (item, j) => item && <Product key={`productRow${i}-product${j}`} item={item} image={j}></Product>
          )}
        </div>))}
    </div>
  );
}

export default ProductArea;
