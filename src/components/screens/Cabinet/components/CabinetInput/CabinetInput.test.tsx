import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { CabinetInput } from './CabinetInput';

describe('Checkbox.test.tsx', () => {
	const Wrapper = () => {
		const [value, setValue] = useState<string>('aassmoilov@gmail.com');

		return (
			<CabinetInput
				label="Электронная почта"
				type="email"
				value={value}
				applyChanges={setValue}
			/>
		);
	};

	test('tests', () => {
		render(<Wrapper />);
		const item = screen.getByTestId('cabinet-input');
		const button = screen.getByTestId('cabinet-input-button');
		const input = screen.getByTestId('cabinet-input');

		expect(input).not.toHaveFocus();

		fireEvent.click(button);

		expect(input).toHaveFocus();

		expect(item).toMatchSnapshot();
	});
});
