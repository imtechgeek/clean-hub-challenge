import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from '../Main/Main';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Main />
      </div>
    </QueryClientProvider>
  );
};
