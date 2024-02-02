import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';

describe('App', () => {
  it('renders App component with QueryClientProvider', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    );

    const mainElementHeading = screen.getByText('Collection Hubs');
    expect(mainElementHeading).toBeInTheDocument();
  });

});
