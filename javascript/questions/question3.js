// FRÅGA 3 – reduce (3p)
//
// Skriv calculatePaidRevenue(orders).
// Funktionen ska med reduce() räkna ut totalintäkten från ordrar
// där status är "paid". Varje order har quantity och unitPrice.
// En tom array ska ge 0.
//
// Försök lösa det med en enda reduce()-kedja.

const orders = [
  { id: 1, status: "paid", quantity: 2, unitPrice: 150 },
  { id: 2, status: "pending", quantity: 4, unitPrice: 80 },
  { id: 3, status: "paid", quantity: 3, unitPrice: 200 },
  { id: 4, status: "paid", quantity: 1, unitPrice: 450 },
];

export const calculatePaidRevenue = (orders) => {
  // TODO: implementera med reduce()

  return orders.reduce(
    (sum, order) =>
      sum + (order.status === "paid" ? order.quantity * order.unitPrice : 0),
    0,
  );
};

export function run() {
  console.log("Q3 – reduce");
  console.log("Betalda intäkter:", calculatePaidRevenue(orders));
  console.log("Tom array:", calculatePaidRevenue([]));
}
