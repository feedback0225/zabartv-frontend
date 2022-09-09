import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button.test.tsx', () => {
	test('if button', () => {
		render(<Button>Button text</Button>);
		const element = screen.getByTestId('button');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('BUTTON');
		expect(element).toMatchSnapshot();
	});

	test('if link', () => {
		render(
			<Button href="https://some-url.com" as="link">
				Link text
			</Button>
		);
		const element = screen.getByTestId('button');
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('A');
		expect(element).toMatchSnapshot();
	});
});
