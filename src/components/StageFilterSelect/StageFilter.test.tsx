// StageFilterSelect.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StageFilterSelect } from './StageFilterSelect';
import * as FilterProviderModule from '../FilterProvider';

describe('StageFilterSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders select options and updates filters on change', () => {
    const setFiltersMock = jest.fn();
    jest.spyOn(FilterProviderModule, 'useFilters').mockReturnValue({
      filters: { name: '', active: false },
      setFilters: setFiltersMock,
    });
    render(<StageFilterSelect />);

    const selectElement = screen.getByLabelText('Select Stage');

    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 'Fully onboarded' } });

    expect(setFiltersMock).toHaveBeenCalledWith({
      name: '',
      active: false,
      stage: 'FULLY_ONBOARDED',
    });
  });
});
