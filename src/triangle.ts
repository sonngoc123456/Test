export class Triangle {
    check(a: number, b: number, c: number) {
        if (this.TriangleDeu(a, b, c)) {
            return "la tam giac deu"
        }

        if (this.TriangleCan(a, b, c)) {
            return "la tam giac can"
        }

        if (this.TriangleVuong(a, b, c)) {
            return "la tam giac vuong"
        }

        if (this.TriangleNoy(a, b, c)) {

            return "khong phai tam giac"
        }
    }

    private TriangleNoy(a: number, b: number, c: number) {
        return a == 0 || b == 0 || c == 0;
    }

    private TriangleCan(a: number, b: number, c: number) {
        return a == b ;
    }

    private TriangleVuong(a: number, b: number, c: number) {
        return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ||
            Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2) ||
            Math.pow(c, 2) + Math.pow(a, 2) == Math.pow(b, 2);
    }

    private TriangleDeu(a: number, b: number, c: number) {
        return a == b && b == c && c == a;
    }
}