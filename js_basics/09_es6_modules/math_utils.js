/**
 * ES6 Math Utilities Module
 * Demonstrates named exports and default exports
 */

export const PI = 3.14159265359;
export const E = 2.71828182846;

export function getCircumference(radius) {
    if (radius <= 0) return 0;
    return 2 * PI * radius;
}

export function getArea(radius) {
    if (radius <= 0) return 0;
    return PI * radius * radius;
}

export function getSphereVolume(radius) {
    if (radius <= 0) return 0;
    return (4 / 3) * PI * Math.pow(radius, 3);
}

// Default export example:
export default class CircleGeometry {
    constructor(radius) {
        this.radius = radius;
    }

    calculateSummary() {
        return {
            radius: this.radius,
            circumference: getCircumference(this.radius).toFixed(2),
            area: getArea(this.radius).toFixed(2),
            volume: getSphereVolume(this.radius).toFixed(2)
        };
    }
}
