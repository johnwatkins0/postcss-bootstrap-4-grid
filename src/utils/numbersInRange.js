/**
 * Create an array of numbers in a given range.
 * @param {number} start The first number.
 * @param {number} end The last number.
 * @return {array} An array of numbers
 */
export const numbersInRange = (start, end) =>
    Array.from(Array(end + 1).keys()).slice(start);
