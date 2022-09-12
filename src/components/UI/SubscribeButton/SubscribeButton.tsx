import { FC } from 'react';
import { SubscribeIcon } from '@/icons';
import { Button, ButtonProps } from '@/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { useTranslation } from 'next-i18next';

export const SubscribeButton: FC<ButtonProps> = ({ className, ...props }) => {
	const { showSubscribeModal, showMenu } = useActions();

	const { t } = useTranslation('common');

	const handleShowModal = () => {
		showSubscribeModal(true);
		showMenu(false);
	};

	return (
		<Button
			size="small"
			variant="gradient"
			className={className}
			icon={<SubscribeIcon />}
			onClick={handleShowModal}
			{...props}
		>
			{t('subscribe_button')}
		</Button>
	);
};
