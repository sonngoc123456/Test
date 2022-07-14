import {NextDayCalculator} from "./day";


describe("NextDayCalculator", () => {
   let day: NextDayCalculator = new NextDayCalculator();

   test('NextDay', () => {
      expect(day.addDays(new Date(2018, 1, 1))).toStrictEqual(new Date(2018, 1, 2));
   });
})