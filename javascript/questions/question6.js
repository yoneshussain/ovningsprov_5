// FRÅGA 6 – DOM-events och formulär (3p)
//
// Skriv setupTaskForm() som kopplar en submit-event listener till
// formuläret #task-form.
//
// Krav:
// - Förhindra sidans standard-submit.
// - Läs värdet från #task-input och ta bort blanksteg i början/slutet.
// - Om fältet är tomt: visa "Skriv en uppgift först." i #form-message.
// - Annars: skapa ett li-element med texten och lägg till det i #task-list.
// - Töm input-fältet efter att uppgiften lagts till.
// - Visa "Uppgiften lades till!" i #form-message.

export const setupTaskForm = () => {
  // TODO: hämta elementen och registrera submit-event listener
  
};

export function run() {
  setupTaskForm();
  console.log("Q6 – Formulär: skriv en uppgift och testa både tomt och ifyllt fält.");
}
