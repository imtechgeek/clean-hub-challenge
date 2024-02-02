import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertion messages

import { Filters } from './Filters';
import { FilterProvider } from '../FilterProvider';

describe('Filters', () => {
  it('renders the component', () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <FilterProvider>
        <Filters />
      </FilterProvider>,
    );

    expect(getByPlaceholderText('Filter by name')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByLabelText('Select Stage')).toBeInTheDocument();
  });

});
