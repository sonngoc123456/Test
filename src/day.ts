export class NextDayCalculator {
    constructor() {
    }

    addDays(date: Date): Date {
        date.setDate(date.getDate() + 1);
        return date;
    }
}