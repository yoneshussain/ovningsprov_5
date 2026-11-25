// FRÅGA 1 – Funktioner, villkor och beräkningar (3p)
//
// Skriv funktionen calculateFare(distanceKm, isStudent, isPeak).
//
// Regler:
// - Grundavgift: 20 kr.
// - Varje kilometer kostar 3 kr.
// - Studenter får 25 % rabatt på kilometerkostnaden (inte grundavgiften).
// - Under rusningstid tillkommer 15 kr efter rabatten.
// - Om distanceKm är negativt eller inte ett tal ska funktionen returnera null.
// - Returnera slutpriset som ett tal.
//
// Testa själv med flera kombinationer, inklusive 0 km, student, rusningstid
// och ogiltig indata.

export const calculateFare = (distanceKm, isStudent, isPeak) => {
  // TODO: implementera funktionen

  if (Number.isNaN(distanceKm) || typeof distanceKm !== "number" || distanceKm < 0) {
    return null;
  }

  const baseFee = 20;
  const kmFee = isStudent
    ? distanceKm * 3 * 0.75 + baseFee + (isPeak ? 15 : 0)
    : distanceKm * 3 + baseFee + (isPeak ? 15 : 0);

  return kmFee;
};

export function run() {
  console.log("Q1 – calculateFare");
  console.log("Testa: calculateFare(10, false, false)");
  console.log("Testa: calculateFare(10, true, true)");
  console.log("Testa: calculateFare(0, false, true)");
  console.log("Testa: calculateFare(-1, false, false)");
  console.log("Dina resultat:", [
    calculateFare(10, false, false),
    calculateFare(10, true, true),
    calculateFare(0, false, true),
    calculateFare(-1, false, false),
  ]);
}
