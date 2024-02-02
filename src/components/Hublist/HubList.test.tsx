import { render, waitFor, screen } from '@testing-library/react';
import * as ReactQuery from 'react-query';
import { HubList } from './HubList';
import { hubMocks } from './HubsMockData';
import { FilterProvider } from '../FilterProvider';

const queryClient = new ReactQuery.QueryClient();

describe('HubList', () => {
  it('renders the component with a list of hubs', async () => {
    jest
      .spyOn(ReactQuery, 'useQuery')
      .mockImplementation(
        jest.fn().mockReturnValue({ data: hubMocks, isLoading: false, isError: false }),
      );

    render(
      <ReactQuery.QueryClientProvider client={queryClient}>
        <FilterProvider>
          <HubList />
        </FilterProvider>
      </ReactQuery.QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByAltText('Green Worms')).toBeInTheDocument();
      expect(screen.getByText('Recovered Plastic: 163,024 Kg')).toBeInTheDocument();
      expect(screen.getByText('Unassigned Plastic: 9.76 Kg')).toBeInTheDocument();
      expect(screen.getByText('Kerala, India')).toBeInTheDocument();
    });
  });

  it('shows loader when fetching hubs', async () => {
    jest
      .spyOn(ReactQuery, 'useQuery')
      .mockImplementation(
        jest.fn().mockReturnValue({ data: hubMocks, isLoading: true, isError: false }),
      );

    render(
      <ReactQuery.QueryClientProvider client={queryClient}>
        <FilterProvider>
          <HubList />
        </FilterProvider>
      </ReactQuery.QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
  it('shows error when error occured while fetching hubs', async () => {
    jest
      .spyOn(ReactQuery, 'useQuery')
      .mockImplementation(
        jest.fn().mockReturnValue({ data: hubMocks, isLoading: false, isError: true }),
      );

    render(
      <ReactQuery.QueryClientProvider client={queryClient}>
        <FilterProvider>
          <HubList />
        </FilterProvider>
      </ReactQuery.QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Error fetching hub collections')).toBeInTheDocument();
    });
  });
});
