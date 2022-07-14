import {Triangle} from "./triangle"

test("test 1:khong phai tam giac", () => {
    let a: number = 0;
    let b: number = 1;
    let c: number = 2;
    let expected: string = "khong phai tam giac"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
});
test("test 2:khong phai tam giac", () => {
    let a: number = 1;
    let b: number = 0;
    let c: number = 2;
    let expected: string = "khong phai tam giac"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
})
test("test 3:khong phai tam giac", () => {
    let a: number = 1;
    let b: number = 0;
    let c: number = 0;
    let expected: string = "khong phai tam giac"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
})
test("test 4:la tam giac deu", () => {
    let a: number = 2;
    let b: number = 2;
    let c: number = 2;
    let expected: string = "la tam giac deu"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
})
test("test 5:la tam vuong", () => {
    let a: number = 6;
    let b: number = 8;
    let c: number = 10;
    let expected: string = "la tam giac vuong"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
})
test("test 6:la tam giac can", () => {
    let a: number = 2;
    let b: number = 2;
    let c: number = 3;
    let expected: string = "la tam giac can"
    let triangle = new Triangle();
    expect(triangle.check(a, b, c)).toEqual(expected)
})