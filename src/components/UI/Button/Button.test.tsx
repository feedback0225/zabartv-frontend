import { Button } from './Button';
import { render, screen } from '@testing-library/react';

test('Button.test.tsx', () => {
	render(<Button>Button text</Button>);
	const element = screen.getByTestId('button');
	expect(element).toBeInTheDocument();
	expect(element.tagName).toEqual('BUTTON');
	expect(element).toMatchSnapshot();
});
