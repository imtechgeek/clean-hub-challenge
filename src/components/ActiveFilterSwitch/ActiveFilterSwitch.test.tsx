import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ActiveFilterSwitch } from './ActiveFilterSwitch';
import * as FilterProviderModule from '../FilterProvider';

describe('ActiveFilterSwitch', () => {
  it('renders the component', () => {
    const setFiltersMock = jest.fn();
    jest.spyOn(FilterProviderModule, 'useFilters').mockReturnValue({
      filters: { name: '', active: false },
      setFilters: setFiltersMock,
    });
    const { getByText } = render(<ActiveFilterSwitch />);

    expect(getByText('Active')).toBeInTheDocument();
  });

  it('toggles active filter on button click', () => {
    const setFiltersMock = jest.fn();
    jest.spyOn(FilterProviderModule, 'useFilters').mockReturnValue({
      filters: { name: '', active: false },
      setFilters: setFiltersMock,
    });
    const { getByText } = render(<ActiveFilterSwitch />);

    const button = getByText('Active');

    fireEvent.click(button);

    expect(button).toHaveClass('buttonGreen');
    expect(setFiltersMock).toHaveBeenCalledWith({
      name: '',
      active: true,
    });
  });
});
