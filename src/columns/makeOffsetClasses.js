import { makeColOffset } from './makeColOffset';
import { arrayFromRange } from '../utils/arrayFromRange';

/**
 * Makes the offset classes for a given breakpoint.
 * @param {string} infix The breakpoint infix.
 * @param {number} gridColumns The number of column units.
 * @param {bool} doOffsetClasses Whether to perform this functino.
 * @return {string} The generated CSS.
 */
export const makeOffsetClasses = ({ infix, gridColumns, doOffsetClasses }) =>
    doOffsetClasses
        ? arrayFromRange(gridColumns - 1)
              .map(
                  i => `.offset${infix}-${i} {
  ${makeColOffset({ gridColumns, size: i })}
}

`,
              )
              .join('')
        : '';
