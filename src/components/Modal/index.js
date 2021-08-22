import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import './index.css';
function Modal(props) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const onDelete = () => {
        const deletedArr = cart.filter(el => el !== props.item)
        dispatch(actions.setCart(deletedArr));
        localStorage.setItem("cart", JSON.stringify(deletedArr));
        props.noClicked();
    }
    return (
        <div className="Modal">
            <div className="modalContent">
                <div className="modalTitle">
                    Ürünü silmek istediğinize emin misiniz?
                </div>
                <div className="modalSeperator" />
                <div className="modalText" >
                    {props.item.title}
                </div>
                <div className="" >
                    <div onClick={onDelete} className="modalButton1" >EVET</div>
                    <div onClick={props.noClicked} className="modalButton2" >HAYIR</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
