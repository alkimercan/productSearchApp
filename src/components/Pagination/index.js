import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import './index.css';
function Pagination() {
    const selectedPage = useSelector(state => state.selectedPage);
    const products = useSelector(state => state.products);
    const color = useSelector(state => state.color)
    const brand = useSelector(state => state.brand)
    const sort = useSelector(state => state.sort)
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
    const pages = Math.ceil(sortedProducts().length / 12);
    const dispatch = useDispatch();
    const paginationGroup = () => {
        const arr = []
        for (let i = 1; i <= pages; i++) {
            arr.push(i)
        }
        return arr
    }
    useEffect(() => {
        if (selectedPage > pages) {
            dispatch(actions.setPage(1))
        }
    }, [dispatch, selectedPage, pages]);
    return (
        <div className="pagination">
            <div onClick={() => {
                if (selectedPage !== 1) {
                    dispatch(actions.setPage(selectedPage - 1))
                }
            }} className="paginationGroup">
                {'<'}
            </div>
            {paginationGroup().map((el, i) => <div key={`paginationGroup${i}`} onClick={() => dispatch(actions.setPage(i + 1))} className="paginationGroup">
                {i + 1}
            </div>)}
            <div onClick={() => {
                if (selectedPage !== pages) {
                    dispatch(actions.setPage(selectedPage + 1))
                }
            }} className="paginationGroup">
                {'>'}
            </div>
        </div>
    );
}

export default Pagination;
