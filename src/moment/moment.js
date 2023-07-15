import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');


export function formatDateAndTime() {
    const now = moment();
    const date = now.format('dddd DD.MM.YYYY');
    const time = now.format('HH:mm:ss');

    return {
        date,
        time
    }
}