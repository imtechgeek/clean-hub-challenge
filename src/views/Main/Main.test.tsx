import * as ReactQuery from 'react-query';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to extend Jest's expect functionality
import { FilterProvider } from '../../components/FilterProvider';
import { Main } from './Main';
import { hubMocks } from '../../components/Hublist/HubsMockData';

const queryClient = new ReactQuery.QueryClient();

describe('Main', () => {
  it('renders Main component with Filters and HubList', () => {
    jest
      .spyOn(ReactQuery, 'useQuery')
      .mockImplementation(
        jest.fn().mockReturnValue({ data: hubMocks, isLoading: false, isError: false }),
      );

    render(
      <ReactQuery.QueryClientProvider client={queryClient}>
        <FilterProvider>
          <Main />
        </FilterProvider>
      </ReactQuery.QueryClientProvider>,
    );

    const headingElement = screen.getByRole('heading', { level: 2, name: /Collection Hubs/i });
    expect(headingElement).toBeInTheDocument();

    const filtersElement = screen.getByTestId('filters');
    expect(filtersElement).toBeInTheDocument();

    const hubListElement = screen.getByTestId('hub-list');
    expect(hubListElement).toBeInTheDocument();
  });
});
