export function getCurrentStatus(location) {
    const now = new Date();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const schedule = isWeekend ?
        location.schedule.weekends :
        location.schedule.weekdays;
    if (schedule.closed) {
        return "Closed";
    }
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const [openHour, openMinute] = schedule.open.split(":").map(Number);
    const [closeHour, closeMinute] = schedule.close.split(":").map(Number);

    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;
    if (currentMins >= openMinutes && currentMins < closeMinutes) {
        return `Open until ${formatTime(schedule.close)}`;
    }
    return `Closed (Opens at ${formatTime(schedule.open)})`;
}


function formatTime(time) {

    let [hours, minutes] =
        time.split(":").map(Number);

    const period = hours >= 12 ? "PM" : "AM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    return `${hours}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`;
}