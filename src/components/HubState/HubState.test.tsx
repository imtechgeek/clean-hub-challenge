import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HubState } from './HubState';
import { State } from '../../utils/types';

describe('HubState', () => {
  it('renders HubState component with the correct style for Active state', () => {
    render(<HubState state={State.Active} />);

    const hubStateElement = screen.getByText(State.Active);
    expect(hubStateElement).toBeInTheDocument();
    expect(hubStateElement).toHaveClass('active');
  });

  it('renders HubState component with the correct style for Demo state', () => {
    render(<HubState state={State.Demo} />);

    const hubStateElement = screen.getByText(State.Demo);
    expect(hubStateElement).toBeInTheDocument();
    expect(hubStateElement).toHaveClass('demo');
  });

});
