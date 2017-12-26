import { makeCol } from './makeCol';
import { arrayFromRange } from '../utils/arrayFromRange';

/**
 * Make the column classes for a given breakpoint.
 * @param {string} infix The breakpoint infix.
 * @param {number} gridColumns The number of column units.
 * @return {string} The generated CSS.
 */
export const makeColClasses = ({ infix, gridColumns }) =>
    arrayFromRange(gridColumns).reduce(
        (output, i) =>
            output +
            `.col${infix}-${i} {
  ${makeCol({ gridColumns, size: i })}
}

`,
        '',
    );
