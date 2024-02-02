import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NoResults } from './NoResults';

describe('NoResults', () => {
  it('renders NoResults component with the provided text', () => {
    const mockText = 'Sorry, No results found.';
    render(<NoResults text={mockText} />);

    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByText(mockText)).toHaveClass('text');
  });
});
