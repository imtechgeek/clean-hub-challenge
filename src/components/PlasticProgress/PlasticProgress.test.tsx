import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlasticProgress } from './PlasticProgress';

describe('PlasticProgress', () => {
  it('renders PlasticProgress component with the provided props', () => {
    const displayText = 'Recovered Plastic: 2000';
    const totalPlastic = 3000;
    const recoveredOrUnassignedPlastic = 2000;

    render(
      <PlasticProgress
        displayText={displayText}
        totalPlastic={totalPlastic}
        recoveredOrUnassignedPlastic={recoveredOrUnassignedPlastic}
      />,
    );

    expect(screen.getByLabelText(/recovered plastic/i)).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('max', totalPlastic.toString());
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'value',
      recoveredOrUnassignedPlastic.toString(),
    );
  });
});
