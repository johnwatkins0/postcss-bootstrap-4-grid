import { makeColClasses } from './makeColClasses';
import { makeOrderClasses } from './makeOrderClasses';
import { makeOffsetClasses } from './makeOffsetClasses';
import { getInfix } from '../utils/getInfix';

/**
 * Generate all the column CSS for a given breakpoint.
 * @param {string} breakpoint The current breakpoint.
 * @param {number} gridColumns The number of grid column units.
 * @param {Object} gridBreakpoints The gridBreakpoint option data.
 * @param {bool} doOrderClasses Whether to generate order classes.
 * @param {bool} doOffsetClasses Whether to generate offset classes.
 * @return {string} The generated CSS.
 */
export function makeMediaBreakpointStyles({
    breakpoint,
    gridColumns,
    gridBreakpoints,
    doOrderClasses,
    doOffsetClasses,
}) {
    const infix = getInfix(breakpoint);
    const output = `.col${infix} {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col${infix}-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

${makeColClasses({ infix, gridColumns })}${makeOrderClasses({
        infix,
        gridColumns,
        doOrderClasses,
    })}${makeOffsetClasses({ infix, gridColumns, doOffsetClasses })}`;

    return breakpoint === ''
        ? output
        : `@media screen and (min-width: ${gridBreakpoints[breakpoint]}) {
${output}
}
`;
}
