export const getType = (id: number | undefined) => {
	switch (id) {
		case 1:
			return 'Фильм';
		case 2:
			return 'Сериал';
		case 3:
			return 'Мультик';
		case 4:
			return 'Мультсериал';
		case 5:
			return 'Видео';
		case 6:
			return 'ТВ';
		default:
			return '21412';
	}
};
