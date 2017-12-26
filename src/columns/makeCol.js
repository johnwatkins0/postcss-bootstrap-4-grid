/**
 * Generates CSS for a column of a given size.
 * @param {number} size The size of the column.
 * @param {number} gridColumns The number of column units in the grid.
 * @return {string} The CSS.
 */
export function makeCol({ size, gridColumns }) {
    const percentage = `${100 / gridColumns * size}%`;

    return `flex: 0 0 ${percentage};
  max-width: ${percentage};`;
}
