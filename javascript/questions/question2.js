// FRÅGA 2 – map, filter och find (3p)
//
// Utgå från arrayen orders.
// 1. getCustomerNames(orders) ska returnera en array med kundernas namn.
// 2. getLargeOpenOrders(orders) ska returnera alla öppna ordrar med total > 500.
// 3. findOrderById(orders, id) ska returnera ordern med rätt id, annars undefined.
//
// Använd map(), filter() respektive find() för rätt deluppgift.

const orders = [
  { id: 101, customer: "Mira", total: 720, status: "open" },
  { id: 102, customer: "Alex", total: 240, status: "paid" },
  { id: 103, customer: "Noah", total: 910, status: "open" },
  { id: 104, customer: "Sara", total: 510, status: "cancelled" },
  { id: 105, customer: "Lina", total: 640, status: "open" },
];

export const getCustomerNames = (orders) => {
  // TODO: använd map()
  return [];
};

export const getLargeOpenOrders = (orders) => {
  // TODO: använd filter()
  return [];
};

export const findOrderById = (orders, id) => {
  // TODO: använd find()
  return undefined;
};

export function run() {
  console.log("Q2 – map/filter/find");
  console.log("Kundnamn:", getCustomerNames(orders));
  console.log("Stora öppna ordrar:", getLargeOpenOrders(orders));
  console.log("Order 103:", findOrderById(orders, 103));
  console.log("Okänt id:", findOrderById(orders, 999));
}
