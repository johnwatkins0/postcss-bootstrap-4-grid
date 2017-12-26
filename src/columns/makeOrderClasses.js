import { numbersInRange } from '../utils/numbersInRange';

/**
 * Makes the order classes for a given breakpoint.
 * @param {string} infix The infix for the current breakpoint.
 * @param {number} gridColumns The number of column units.
 * @param {bool} doOrderClasses Whether to return anything.
 * @return {string} The generated CSS.
 */
export const makeOrderClasses = ({ infix, gridColumns, doOrderClasses }) =>
    doOrderClasses
        ? `.order${infix}-first {
  order: -1;
}

` +
          numbersInRange(1, gridColumns)
              .map(
                  i => `.order${infix}-${i} {
  order: ${i};
}

`,
              )
              .join('')
        : '';
