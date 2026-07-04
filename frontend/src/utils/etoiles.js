export const renderEtoiles = (note) => {
  const etoiles = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= note) {
      etoiles.push("★");
    } else {
      etoiles.push("☆");
    }
  }
  return etoiles.join("");
};
