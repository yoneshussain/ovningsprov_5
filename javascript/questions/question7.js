// FRÅGA 7 – Fetch och async/await (4p)
//
// Skriv async-funktionen loadComments(container).
//
// Hämta data från:
// https://jsonplaceholder.typicode.com/comments?postId=1
//
// Krav:
// - Använd fetch() och await.
// - Kontrollera response.ok. Om svaret inte är OK ska ett Error kastas.
// - Konvertera svaret till JSON.
// - Filtrera fram kommentarer vars id är ett udda tal.
// - Visa de tre första kommentarerna som matchar.
// - Visa varje kommentarens name och email i ett eget article-element.
// - Hantera fel med try/catch och visa ett användbart felmeddelande i container.
//
// Tips: Array.isArray behövs inte här om API:et returnerar förväntad data.
// Testa även vad som händer om nätverksanropet misslyckas.

export const loadComments = async (container) => {
  // TODO: implementera fetch, kontroll, filtrering, rendering och felhantering
};

export function run() {
  const container = document.querySelector("#comments-output");
  loadComments(container);
  console.log("Q7 – Fetch: väntar på API-svaret.");
}
