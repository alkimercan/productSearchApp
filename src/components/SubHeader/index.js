import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import './index.css';
function SubHeader() {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.keyword)
    const sort = useSelector(state => state.sort)
    const onChange = (e) => {
        dispatch(actions.setSort(parseInt(e.target.value)))
    }
    return (
        <div className="subHeader">
            <div className="pageTitle">
                <span>{keyword} cep telefonu</span>
                {keyword && <span className="pageTitleText">
                    <span>Aranan kelime : </span>
                    <span style={{ color: "#484848" }}>{keyword}</span>
                </span>}
            </div>
            <select value={sort} onChange={onChange} className="selectBox">
                <option style={{ display: 'none' }} value={0}>Sıralama</option>
                <option value={1}>En Düşük Fiyat</option>
                <option value={2}>En Yüksek Fiyat</option>
                <option value={3}>En Yeniler (A{'>'}Z)</option>
                <option value={4}>En Yeniler (Z{'>'}A)</option>
            </select>
        </div >
    );
}

export default SubHeader;
