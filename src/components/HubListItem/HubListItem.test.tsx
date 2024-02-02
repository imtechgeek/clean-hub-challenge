import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HubListItem } from './HubListItem';
import { State } from '../../utils/types';

jest.mock('../../utils/checkPortfolio', () => ({
  isPartOfPortfolio: jest.fn(),
}));

describe('HubListItem', () => {
  const mockProps = {
    name: 'Hub1',
    description: 'description1',
    imageSource: 'image.jpg',
    logoImageSource: 'logo.jpg',
    location: 'location',
    totalRecoveredPlasticFormatted: '5,000',
    totalRecoveredPlastic: 5000,
    totalUnassignedPlastic: 7.9897,
    slug: 'green-worm',
    state: State.Active,
    parentHub: 'Portfolio',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders HubListItem component with all details', () => {
    require('../../utils/checkPortfolio').isPartOfPortfolio.mockReturnValueOnce(true);

    render(<HubListItem {...mockProps} />);

    expect(screen.getByText('Hub1')).toBeInTheDocument();
    expect(screen.getByText('description1')).toBeInTheDocument();
    expect(screen.getByAltText('Hub1')).toBeInTheDocument();
    expect(screen.getByText("Portfolio's Hub")).toBeInTheDocument();
    expect(screen.getByText('Recovered Plastic: 5,000 Kg')).toBeInTheDocument();
    expect(screen.getByText('Unassigned Plastic: 7.99 Kg')).toBeInTheDocument();
    expect(screen.getByText('location')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  it('renders HubListItem component without portfolio text when not part of portfolio', () => {
    require('../../utils/checkPortfolio').isPartOfPortfolio.mockReturnValueOnce(false);

    render(<HubListItem {...mockProps} />);

    expect(screen.getByText('Hub1')).toBeInTheDocument();
    expect(screen.getByText('description1')).toBeInTheDocument();
    expect(screen.getByAltText('Hub1')).toBeInTheDocument();
    expect(screen.getByText('Recovered Plastic: 5,000 Kg')).toBeInTheDocument();
    expect(screen.getByText('Unassigned Plastic: 7.99 Kg')).toBeInTheDocument();
    expect(screen.getByText('location')).toBeInTheDocument();
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });
});
