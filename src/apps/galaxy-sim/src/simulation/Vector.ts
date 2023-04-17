export default class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static sub(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  static div(v: Vector, n: number): Vector {
    return new Vector(v.x / n, v.y / n);
  }

  static constrain(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  static constrainVector(vector: Vector, maxMagnitude: number): Vector {
    const magnitude = vector.mag();
    if (magnitude > maxMagnitude) {
      vector.setMag(maxMagnitude);
    }
    return vector;
  }

  setMag(len: number): Vector {
    const m = this.mag();
    if (m !== 0) {
      this.mult(len / m);
    }
    return this;
  }

  mag(): number {
    return Math.sqrt(this.magSq());
  }

  magSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  add(value: Vector | number[]): Vector {
    if (value instanceof Vector) {
      this.x += value.x;
      this.y += value.y;
    } else {
      this.x += value[0];
      this.y += value[1];
    }
    return this;
  }


  mult(n: number): Vector {
    this.x *= n;
    this.y *= n;
    return this;
  }
}
