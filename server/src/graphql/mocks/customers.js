import customers from '../../../__mocked-data__/customers.json';

export const getCustomer = id => customers.find(customer => customer.guid === id);

export const getCustomers = () => customers;

export default {
  getCustomer,
  getCustomers
};
