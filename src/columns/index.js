import reduceCSSCalc from 'reduce-css-calc';
import { makeMediaBreakpointStyles } from './makeMediaBreakpointStyles';
import { makeSharedColumnStyles } from './makeSharedColumnStyles';

/**
 * Builds all the column, order, and offset classes.
 * @param {Object} [opts={}] The PostCSS plugin options.
 * @return {string} The generated CSS.
 */
export const makeGridColumns = opts =>
    makeSharedColumnStyles(opts) +
    [''] // The empty breakpoint below the smallest.
        .concat(Object.keys(opts.gridBreakpoints))
        .reduce(
            (output, breakpoint) =>
                output +
                makeMediaBreakpointStyles(
                    Object.assign({}, opts, { breakpoint }),
                ),
            '',
        );
