import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CabinetInput } from './CabinetInput';

export default {
	title: 'CabinetInput',
	component: CabinetInput,
} as ComponentMeta<typeof CabinetInput>;

const Template: ComponentStory<typeof CabinetInput> = () => {
	const [value, setValue] = useState<string>('aassmoilov@gmail.com');

	return (
		<div style={{ width: '350px' }}>
			<CabinetInput label="Email" type="email" value={value} applyChanges={setValue} />
		</div>
	);
};

export const Default = Template.bind({});
