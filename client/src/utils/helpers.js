export const mergeRanks = (data) => [
  ...(data.commissioned || []),
  ...(data.jco || []),
  ...(data.other || []),
];

export const searchRanks = (ranks, query) => {
  if (!query.trim()) return ranks;

  const q = query.toLowerCase();

  return ranks.filter((rank) =>
    [
      rank.rank,
      rank.abbreviation,
      rank.command,
      rank.description,
      rank.responsibility,
      rank.promotion,
      ...Object.values(rank.equivalent || {}),
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
};