import { Modal } from '@/UI/Modal/Modal';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RoutesEnum } from '@/constants/routes';
import { SubscribeIcon } from '@/icons';
import { NextLink } from '@/components/NextLink/NextLink';
import { useTranslation } from 'next-i18next';

export const SubscribeModal = () => {
	const { ModalTitle, ModalDesc, ModalButton, ModalLink } = Modal;

	const { isVisibleSubscribeModal } = useTypedSelector((state) => state.modalReducer);

	const { showSubscribeModal } = useActions();

	const { t } = useTranslation('common');

	const handleClose = () => showSubscribeModal(false);

	return (
		<Modal variant="gradient" open={isVisibleSubscribeModal} onClose={handleClose}>
			<ModalTitle>Подиска ZabarTV</ModalTitle>
			<ModalDesc>
				Покажем уникальные сериалы и фильмы. Подберем кино по интересам и настроению. Для вас и
				вашей семьи.
			</ModalDesc>
			<NextLink href={RoutesEnum.Subscribe} passHref>
				<ModalButton as="link" variant="white" icon={<SubscribeIcon />}>
					{t('subscribe_button')} за 12€
				</ModalButton>
			</NextLink>
		</Modal>
	);
};
