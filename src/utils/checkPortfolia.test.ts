import { isPartOfPortfolio } from './checkPortfolio';

describe('isPartOfPortfolio', () => {
  it('returns true when parentHub is "Portfolio"', () => {
    const result = isPartOfPortfolio('Portfolio');
    expect(result).toBe(true);
  });

  it('returns false when parentHub is not "Portfolio"', () => {
    const result = isPartOfPortfolio('AnotherHub');
    expect(result).toBe(false);
  });

  it('returns false when parentHub is null', () => {
    const result = isPartOfPortfolio(null);
    expect(result).toBe(false);
  });
});
