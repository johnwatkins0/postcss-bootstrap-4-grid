import { arrayFromRange } from '../utils/arrayFromRange';

/**
 * Makes the order classes for a given breakpoint.
 * @param {string} infix The infix for the current breakpoint.
 * @param {number} gridColumns The number of column units.
 * @param {bool} doOrderClasses Whether to return anything.
 * @return {string} The generated CSS.
 */
export const makeOrderClasses = ({ infix, gridColumns, doOrderClasses }) =>
    doOrderClasses
        ? arrayFromRange(gridColumns).reduce(
              (output, i) =>
                  output +
                  `.order${infix}-${i} {
  order: ${i};
}

`,
              `.order${infix}-first {
  order: -1;
}

`,
          )
        : '';
