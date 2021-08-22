import { mount } from 'enzyme';
import React from 'react';
import App from './App';
import Header from './components/Header';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Pagination from './components/Pagination';
import ProductArea from './components/ProductArea';
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';
import Product from './components/Product';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  cart: [],
  products: [],
  keyword: '',
  sort: 0,
  selectedPage: 1,
  brand: '',
  color: '',
}
const store = mockStore(initialState);
store.dispatch = jest.fn();

Enzyme.configure({ adapter: new Adapter() });
describe('Test renders', () => {
  let component;
  const testItem = {
    productId: 1,
    title: 'Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)',
    brand: 'Samsung',
    price: 2699.90,
    oldPrice: 2699.90,
    discount: 0,
    color: 'Beyaz',
    createdDate: '2021-01-12T15:17:46+03:00'
  };
  it('should render <App> container', () => {
    component = mount(
      <Provider store={store}>
        <App />
      </Provider>)
    expect(component.find('.App').exists()).toBe(true);
  });
  it('should render <Header> component', () => {
    component = mount(
      <Provider store={store}>
        <Header />
      </Provider>)
    expect(component.find('.header').exists()).toBe(true);
  });
  it('should render <Pagination> component', () => {
    component = mount(
      <Provider store={store}>
        <Pagination />
      </Provider>)
    expect(component.find('.pagination').exists()).toBe(true);
  });
  it('should render <ProductArea> component', () => {
    component = mount(
      <Provider store={store}>
        <ProductArea />
      </Provider>)
    expect(component.find('.productArea').exists()).toBe(true);
  });
  it('should render <Sidebar> component', () => {
    component = mount(
      <Provider store={store}>
        <Sidebar />
      </Provider>)
    expect(component.find('.sideBar').exists()).toBe(true);
  });
  it('should render <SubHeader> component', () => {
    component = mount(
      <Provider store={store}>
        <SubHeader />
      </Provider>)
    expect(component.find('.subHeader').exists()).toBe(true);
  });
  it('should render <Product> component', () => {
    component = mount(
      <Provider store={store}>
        <Product item={testItem} image={1} />
      </Provider>)
    expect(component.find('.product').exists()).toBe(true);
  });
})