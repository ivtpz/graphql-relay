import orders from '../../../__mocked-data__/orders.json';
import customers from '../../../__mocked-data__/customers.json';

const names = [
  'Carisa',
  'Azucena',
  'Kenneth',
  'Millicent',
  'Dale',
  'Denyse',
  'Eliza',
  'Larue',
  'Janetta',
  'Cherly',
  'Chad',
  'In',
  'Belia',
  'Shawnna',
  'Peggy',
  'Chantel',
  'Jaunita',
  'Thersa',
  'Marita',
  'Leandro'
];

const resolvers = {
  RootQuery: () => ({
    customer: (_, { id }) => customers.find(customer => customer.guid === id),
    node: (_, { id }) => {
      const result = customers.find(customer => customer.id === id) || orders.find(order => order.id === id);
      return {
        id: result.id
      };
    },
    customers: (_, { first, last, after, before }) => {
      let requestedCustomers = [];
      let hasNextPage;
      let hasPreviousPage;
      if (after) {
        let foundCursor = false;
        hasPreviousPage = true;
        customers.forEach(customer => {
          if (foundCursor) {
            requestedCustomers.push(customer);
          } else if (customer.id === after) {
            foundCursor = true;
          }
        });
      } else if (before) {
        let foundCursor = false;
        hasNextPage = true;
        customers.forEach(customer => {
          if (customer.id === before) {
            foundCursor = true;
          } else if (!foundCursor) {
            requestedCustomers.push(customer);
          }
        });
      } else {
        requestedCustomers = [...customers];
      }
      if (first) {
        hasNextPage = requestedCustomers.length > first;
        requestedCustomers = requestedCustomers.slice(0, first);
      } else if (last) {
        hasPreviousPage = requestedCustomers.length > last;
        requestedCustomers = requestedCustomers.slice(requestedCustomers.length - last);
      }
      return {
        edges: requestedCustomers.map(customer => ({
          cursor: customer.id,
          node: customer
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage,
          startCursor: requestedCustomers[0].id,
          endCursor: requestedCustomers[requestedCustomers.length - 1].id
        }
      };
    }
  }),

  Mutation: () => ({
    // Just mutates in-memory array, does not write update to mock data file
    updateFirstName: (_, vars) => {
      console.log(vars);
      const {
        input: { guid, clientMutationId }
      } = vars;
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].guid === guid) {
          const j = Math.floor(Math.random() * names.length);
          const randomName = names[j];
          customers[i].name.first = randomName;
          const customer = customers[i];
          return {
            customer,
            clientMutationId
          };
        }
      }
      throw new Error(`Failed to find customer with id ${guid}`);
    }
  }),

  Customer: () => ({
    orders: customer => orders.filter(order => order.customerId === customer.guid)
  }),

  Order: () => ({
    customer: order => customers.find(customer => customer.guid === order.customerId)
  })
};

export default resolvers;
