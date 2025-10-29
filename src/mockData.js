export const users = [
  { id: 1, users_id: 'U001', name: 'Alice', lastname: 'Johnson', email: 'alice@example.com', phone: '020-12345678', password: '1234' },
  { id: 2, users_id: 'U002', name: 'Bob', lastname: 'Smith', email: 'bob@example.com', phone: '020-87654321', password: '5678' }
];

export const categories = [
  { id: 1, category_id: 'C001', name: 'Electronics' },
  { id: 2, category_id: 'C002', name: 'Accessories' },
  { id: 3, category_id: 'C003', name: 'Office' }
];

export const products = [
  { id: 1, product_id: 'P001', users_id: 'U001', name: 'Laptop', price: 1200, detail: 'Powerful 15-inch laptop with 16GB RAM and SSD storage.', category_id: 'C001', category: 'Electronics', bills: ['B001'] },
  { id: 2, product_id: 'P002', users_id: 'U002', name: 'Wireless Mouse', price: 25, detail: 'Ergonomic wireless mouse', category_id: 'C002', category: 'Accessories', bills: ['B001','B002'] },
  { id: 3, product_id: 'P003', users_id: 'U001', name: 'Printer', price: 200, detail: 'All-in-one inkjet printer', category_id: 'C003', category: 'Office', bills: ['B002'] }
];

export const bills = [
  { id: 1, bill_id: 'B001', user_id: 'U001', customer: 'Alice Johnson', phone: '020-12345678', products: [{ product_id: 'P001', name: 'Laptop', qty: 1, price: 1200 }, { product_id: 'P002', name: 'Wireless Mouse', qty: 2, price: 25 }], total: 1250 },
  { id: 2, bill_id: 'B002', user_id: 'U002', customer: 'Bob Smith', phone: '020-87654321', products: [{ product_id: 'P002', name: 'Wireless Mouse', qty: 1, price: 25 }, { product_id: 'P003', name: 'Printer', qty: 1, price: 200 }], total: 225 }
];