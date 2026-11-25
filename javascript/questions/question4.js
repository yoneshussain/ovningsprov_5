// FRÅGA 4 – Spread, rest och immutability (3p)
//
// Implementera två funktioner:
//
// 1. updateSettings(user, newTheme):
//    Returnera ett nytt user-objekt där settings.theme har uppdaterats.
//    Originalobjektet och dess settings-objekt får inte ändras.
//    Alla övriga egenskaper ska bevaras.
//
// 2. getPublicUser(user):
//    Returnera ett nytt objekt med alla egenskaper utom password.
//    Använd object rest/destructuring.
//
// Du får inte mutera originalobjektet.

const user = {
  id: 7,
  name: "Sam",
  password: "secret-value",
  settings: {
    theme: "light",
    notifications: true,
  },
};

export const updateSettings = (user, newTheme) => {
  // TODO: returnera en immutabel uppdatering

  return {
    ...user,
    settings: { ...user.settings, theme: newTheme },
  };
};

export const getPublicUser = (user) => {
  // TODO: använd rest syntax för att exkludera password

  const { password, ...rest } = user;

  return rest;
};

export function run() {
  const updatedUser = updateSettings(user, "dark");
  const publicUser = getPublicUser(user);

  console.log("Q4 – immutability");
  console.log("Original:", user);
  console.log("Uppdaterad:", updatedUser);
  console.log("Publik användare:", publicUser);
  console.log("Samma user-referens?", user === updatedUser);
  console.log(
    "Samma settings-referens?",
    user.settings === updatedUser.settings,
  );
}
