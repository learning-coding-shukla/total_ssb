const ppdtImages = Array.from(
  { length: 43 },
  (_, i) =>
    `/ppdt/PPDT pictures (1)_page-${String(i + 1).padStart(4, "0")}.png`
);

export default ppdtImages;
