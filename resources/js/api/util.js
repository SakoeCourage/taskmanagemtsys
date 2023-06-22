import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';

export function dateReformat(date) {
    if (date) {
        return (dayjs(date).format('DD/MM/YYYY'))
    }
}


export function diffForHumans(date) {
    if (date) {
        return dayjs(date).fromNow();
    }
}
