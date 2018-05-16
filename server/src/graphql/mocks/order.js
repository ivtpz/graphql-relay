import orders from '../../../__mocked-data__/orders.json';

const getOrdersByCustomer = customerId => orders.filter(order => order.customerId === customerId);

const getOrder = id => orders.find(order => order.guid === id);

export default {
  getOrdersByCustomer,
  getOrder
};
