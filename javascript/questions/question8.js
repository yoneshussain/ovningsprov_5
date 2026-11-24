// FRÅGA 8 – Promise, setTimeout och Promise.all (2p)
//
// 1. delayedValue(value, ms) ska returnera en Promise som löser med value
//    efter ms millisekunder. Använd new Promise() och setTimeout().
// 2. showResults() ska starta tre väntningar PARALLELLT:
//      delayedValue("A", 300)
//      delayedValue("B", 100)
//      delayedValue("C", 200)
//    Använd Promise.all() och vänta på samtliga.
// 3. När alla har lösts ska du skriva ut arrayen med resultaten,
//    och därefter skriva "Alla klara".
//
// Fundera på skillnaden mellan ordningen som Promises blir klara i
// och ordningen på värdena i resultat-arrayen från Promise.all().

export const delayedValue = (value, ms) => {
  // TODO: returnera en Promise som löser med value efter ms
  return Promise.resolve(value);
};

export const showResults = async () => {
  // TODO: starta tre väntningar parallellt och invänta dem med Promise.all()
};

export function run() {
  console.log("Q8 – Promise.all");
  showResults();
}
