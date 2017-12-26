/**
 * Generate the offset rule for a given size.
 * @param {number} size
 * @param {number} gridColumns The number of column units.
 * @return {string} The generated rule.
 */
export const makeColOffset = ({ size, gridColumns }) =>
    `margin-left: ${100 / gridColumns * size}%;`;
