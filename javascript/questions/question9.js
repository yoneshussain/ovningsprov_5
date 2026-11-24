// FRÅGA 9 – Klasser, getters och validering (3p)
//
// Skapa klassen Workshop med:
// - constructor(title, capacity): spara titel och maxkapacitet.
//   Börja med booked = 0.
// - getter availableSeats: returnera antal lediga platser.
// - getter isFull: returnera true om inga platser återstår, annars false.
// - metod book(count):
//     * count måste vara ett positivt heltal.
//     * Om count är ogiltigt eller fler platser än availableSeats begärs,
//       returnera false och ändra inte booked.
//     * Annars ökar booked med count och metoden returnerar true.
//
// Testa giltig bokning, bokning som fyller alla platser, för stor bokning
// samt ogiltigt antal.

export class Workshop {
  constructor(title, capacity) {
    // TODO: initiera egenskaperna
  }

  get availableSeats() {
    // TODO
  }

  get isFull() {
    // TODO
  }

  book(count) {
    // TODO: validera före du ändrar booked
  }
}

export function run() {
  const workshop = new Workshop("Modern JavaScript", 12);
  console.log("Q9 – Workshop");
  console.log("Lediga platser:", workshop.availableSeats);
  console.log("Boka 8:", workshop.book(8));
  console.log("Lediga platser:", workshop.availableSeats);
  console.log("Boka 4:", workshop.book(4));
  console.log("Fullbokad:", workshop.isFull);
  console.log("Försök boka 1 till:", workshop.book(1));
  console.log("Försök boka -2:", workshop.book(-2));
  console.log("Slutligt antal bokade:", workshop.booked);
}
