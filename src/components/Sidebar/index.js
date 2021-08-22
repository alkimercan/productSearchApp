import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import './index.css';


function Sidebar(props) {
    const sort = useSelector(state => state.sort);
    const color = useSelector(state => state.color);
    const brand = useSelector(state => state.brand);
    const products = useSelector(state => state.products);
    const filterColor = color ? products.filter(el => el.color === color) : products;
    const filterBrand = brand ? products.filter(el => el.brand === brand) : products;
    let colors = [];
    let brands = [];
    if (brand && !color) {
        colors = [];
        products.forEach(element => {
            if (!brands.includes(element.brand)) {
                brands.push(element.brand);
            }
        });
        filterBrand.forEach(element => {
            if (!colors.includes(element.color)) {
                colors.push(element.color);
            }
        });
    }
    else if (!brand && color) {
        brands = []
        products.forEach(element => {
            if (!colors.includes(element.color)) {
                colors.push(element.color);
            }
        });
        filterColor.forEach(element => {
            if (!brands.includes(element.brand)) {
                brands.push(element.brand);
            }
        });
    }
    else {
        brands = []
        colors = [];
        products.forEach(element => {
            if (!colors.includes(element.color)) {
                colors.push(element.color);
            }
            if (!brands.includes(element.brand)) {
                brands.push(element.brand);
            }
        });
    }
    const colorNumber = e => products.filter(el => el.color === e).length
    const brandNumber = e => products.filter(el => el.brand === e).length
    const sortClick = data => {
        if (data === sort) {
            dispatch(actions.setSort(0));
        }
        else {
            dispatch(actions.setSort(data));
        }
    }
    const colorClick = data => {
        if (data === color) {
            dispatch(actions.setColor(''));
        }
        else {
            dispatch(actions.setColor(data));
        }
    }
    const brandClick = data => {
        if (data === brand) {
            dispatch(actions.setBrand(''));
        }
        else {
            dispatch(actions.setBrand(data));
        }
    }
    const dispatch = useDispatch();
    return (
        <div className="sideBar">
            <div className="sideBarTitle">
                <span>Renk</span>
            </div>
            <div className="sideBarItems">
                {colors.map((el, j) =>
                    <span key={`colors${j}`} onClick={() => colorClick(el)} style={color === el ? { color: '#FF6000' } : null}>
                        {el}({colorNumber(el)})
                    </span>
                )}
            </div>
            <div className="sideBarTitle">
                <span>Sıralama</span>
            </div>
            <div className="sideBarItems">
                <span onClick={() => sortClick(1)} style={sort === 1 ? { color: '#FF6000' } : null}>En Düşük Fiyat</span>
                <span onClick={() => sortClick(2)} style={sort === 2 ? { color: '#FF6000' } : null}>En Yüksek Fiyat</span>
                <span onClick={() => sortClick(3)} style={sort === 3 ? { color: '#FF6000' } : null}>En Yeniler (A{'>'}Z)</span>
                <span onClick={() => sortClick(4)} style={sort === 4 ? { color: '#FF6000' } : null}>En Yeniler (Z{'<'}A)</span>
            </div>
            <div className="sideBarTitle">
                <span>Marka</span>
            </div>
            <div className="sideBarItems">
                {brands.map((el, j) =>
                    <span key={`brands${j}`} onClick={() => brandClick(el)} style={brand === el ? { color: '#FF6000' } : null}>
                        {el}({brandNumber(el)})
                    </span>
                )}
            </div>
        </div >
    );
}

export default Sidebar;