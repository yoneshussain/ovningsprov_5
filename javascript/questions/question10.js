// FRÅGA 10 – ES-moduler och funktioner (3p)
//
// Importera calculateAverage och formatDuration från ../utils.js.
// Använd funktionerna för att:
// 1. Räkna ut genomsnittlig längd för alla lektioner.
// 2. Formatera genomsnittet med formatDuration().
// 3. Skriv ut resultatet.
//
// All beräkningslogik ska ligga i utils.js.
// question10.js ska importera och använda funktionerna.

import { calculateAverage, formatDuration } from "../utils.js";

const lessonDurations = [35, 50, 40, 55, 30];

export function run() {
  // TODO: använd de importerade funktionerna
  console.log("Q10 – ES-moduler");
  console.log("Lektionernas längder:", lessonDurations);
}
