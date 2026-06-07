const ppdtImages = Array.from(
  { length: 40 },
  (_, i) =>
    `/ppdt/PPDT pictures (1)_page-${String(i + 1).padStart(4, "0")}.jpg`
);

export default ppdtImages;
