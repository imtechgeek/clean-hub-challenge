import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('HeaderTextWithLogo', () => {
  it('renders text in h3 and displays the logo image', () => {
    const textToDisplay = 'Hello, World!';
    const imageSource = '/path/to/logo.png';

    render(<Image altText={textToDisplay} imageSource={imageSource} type='main' />);

    const image = screen.getByAltText(textToDisplay);

    expect(image).toBeInTheDocument();
  });
});
