export const isPartOfPortfolio = (parentHub: string | null) => {
  if (parentHub === 'Portfolio') return true;
  return false;
};
