import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NameFilterInput } from './NameFilterInput';
import * as FilterProviderModule from '../FilterProvider';

describe('NameFilterInput component', () => {
  it('should update the input value and sets name filter when user types input', () => {
    const setFiltersMock = jest.fn();
    jest.spyOn(FilterProviderModule, 'useFilters').mockReturnValue({
      filters: { name: '', active: false },
      setFilters: setFiltersMock,
    });

    render(<NameFilterInput />);

    const inputElement = screen.getByPlaceholderText('Filter by name') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'John' } });

    expect(inputElement.value).toBe('John');

    expect(setFiltersMock).toHaveBeenCalledWith({ name: 'john', active: false });

    jest.restoreAllMocks();
  });

  it('should process input when passing it as a filter', () => {
    const setFiltersMock = jest.fn();
    jest.spyOn(FilterProviderModule, 'useFilters').mockReturnValue({
      filters: { name: '', active: false },
      setFilters: setFiltersMock,
    });

    render(<NameFilterInput />);

    const inputElement = screen.getByPlaceholderText('Filter by name') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '      JOHN' } });

    expect(inputElement.value).toBe('      JOHN');

    expect(setFiltersMock).toHaveBeenCalledWith({ name: 'john', active: false });

    jest.restoreAllMocks();
  });
});
