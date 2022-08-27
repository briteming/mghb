import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const DateFormatter = new (class DateFormatterClass {
	distanceToNow(date: Date | string | number) {
		return formatDistanceToNow(new Date(date), {
			locale: ptBR,
			addSuffix: true,
		});
	}
})();
