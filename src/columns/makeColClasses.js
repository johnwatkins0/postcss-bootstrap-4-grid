import { makeCol } from './makeCol';
import { numbersInRange } from '../utils/numbersInRange';

/**
 * Make the column classes for a given breakpoint.
 * @param {string} infix The breakpoint infix.
 * @param {number} gridColumns The number of column units.
 * @return {string} The generated CSS.
 */
export const makeColClasses = ({ infix, gridColumns }) =>
    numbersInRange(1, gridColumns)
        .map(
            i =>
                `.col${infix}-${i} {
  ${makeCol({ gridColumns, size: i })}
}

`,
        )
        .join('');
