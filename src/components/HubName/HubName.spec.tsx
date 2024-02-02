import React from 'react';
import { render, screen } from '@testing-library/react';
import {HubName} from './HubName';

describe('Hub name with logo image', () => {
  it('renders text in h3 and displays the logo image', () => {
    const textToDisplay = 'Hello, World!';
    const logoSrc = '/path/to/logo.png';

    render(<HubName name={textToDisplay} logoImageSource={logoSrc} />);

    const renderedText = screen.getByText(textToDisplay);

    expect(renderedText.tagName).toBe('H3');

    const logoImage = screen.getByAltText('Hub Logo');

    expect(logoImage).toBeInTheDocument();
  });
});