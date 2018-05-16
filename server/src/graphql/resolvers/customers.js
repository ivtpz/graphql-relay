// Placeholder
export const getCustomer = id => ({
  index: 2,
  guid: id,
  isActive: false,
  age: 23,
  name: {
    first: 'Helen',
    last: 'Avila'
  },
  company: 'MACRONAUT',
  email: 'helen.avila@macronaut.me',
  phone: '+1 (964) 450-2458',
  address: '416 Menahan Street, Caln, Ohio, 7473',
  registered: 'Sunday, February 12, 2017 10:23 PM'
});

export const getCustomers = () => [];

export default {
  getCustomer,
  getCustomers
};
