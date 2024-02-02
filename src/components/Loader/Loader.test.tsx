import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Loader } from './Loader';

describe('Loader', () => {
  it('renders Loader component', () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

});
