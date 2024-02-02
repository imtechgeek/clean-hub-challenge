import { render, screen } from '@testing-library/react';
import { HubInfo } from './HubInfo';

describe('ParagraphComponent', () => {
  it('renders text in a paragraph', () => {
    const textToDisplay = 'Hello, World!';
    render(<HubInfo text={textToDisplay} />);

    const renderedText = screen.getByText(textToDisplay);

    expect(renderedText.tagName).toBe('P');
  });
});
