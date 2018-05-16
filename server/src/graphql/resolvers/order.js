// Placeholder
const getOrdersByCustomer = customerId => [
  {
    id: '5aec8656261b36614eb945ca',
    index: 1,
    guid: 'f38f9265-e69d-4476-938b-9cb13283f501',
    customerId,
    total: '$181.38',
    date: 'Tuesday, May 5, 2015 8:24 PM'
  }
];

const getOrder = id => ({
  index: 1,
  guid: 'f38f9265-e69d-4476-938b-9cb13283f501',
  customerId: 'e73b35c2-140e-46aa-be97-0d6b629711b7',
  total: '$181.38',
  date: 'Tuesday, May 5, 2015 8:24 PM'
});

export default {
  getOrdersByCustomer,
  getOrder
};
