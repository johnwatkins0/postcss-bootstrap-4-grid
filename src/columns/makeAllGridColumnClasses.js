import { arrayFromRange } from '../utils/arrayFromRange';
import { getInfix } from '../utils/getInfix';

/**
 * Make a list of all the column classes being generated.
 * @param {number} gridColumns The number of column units.
 * @param {object} gridBreakpoints The gridBreakpoints option.
 * @return {string} The string of classes.
 */
export const makeAllGridColumnClasses = ({ gridColumns, gridBreakpoints }) =>
    Object.keys(gridBreakpoints)
        .map(breakpoint => {
            const infix = getInfix(breakpoint);

            return (
                `.col${infix}, .col${infix}-auto, ` +
                arrayFromRange(gridColumns)
                    .map(i => `.col${infix}-${i}`)
                    .join(', ')
            );
        })
        .join(', ');
