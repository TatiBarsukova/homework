class Fraction {

    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    sum(aFraction) {
        const result = new Fraction(this.numerator + aFraction.numerator, this.denominator + aFraction.denominator);
        result.reduce();
        return result;
    }

    minus(aFraction) {
        const result = new Fraction((this.numerator * aFraction.denominator) - (this.denominator * aFraction.numerator),
            (this.denominator * aFraction.denominator));
        result.reduce();
        return result;

    }

    multiply(aFraction) {
        const result = new Fraction(this.numerator * aFraction.numerator, this.denominator * aFraction.denominator);
        result.reduce();
        return result;

    }

    divide(aFraction) {
        const result = new Fraction(this.numerator * aFraction.denominator, this.denominator * aFraction.numerator);
        result.reduce();
        return result;

    }

    toString() {
        if (this.numerator > 0 && this.denominator > 0) {
            return `${this.numerator}/${this.denominator}`;
        }
        return `-(${Math.abs(this.numerator)}/${Math.abs(this.denominator)})`;
    }

    reduce() {
        const gcd = (a, b) => {
            return b ? gcd(b, a % b) : a;
        };
        const result = gcd(this.numerator, this.denominator);
        this.numerator /= result;
        this.denominator /= result;
    }
}

const f = new Fraction(2, 6);
const f2 = new Fraction(1, 2);
console.log(f.sum(f2).toString());
console.log(f.minus(f2).toString());
console.log(f.multiply(f2).toString());
console.log(f.divide(f2).toString());
