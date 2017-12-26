import reduceCSSCalc from 'reduce-css-calc';

import { makeAllGridColumnClasses } from './makeAllGridColumnClasses';

/**
 * Applies base styles to all column classes.
 * @param {string} infix A media breakpoint infix string.
 * @param {number} gridColumns The number of columns in the grid.
 * @param {string} gridGutterWidth A CSS value with a unit.
 * @return {string} The string of CSS.
 */
export function makeSharedColumnStyles({
    gridColumns,
    gridGutterWidth,
    gridBreakpoints,
}) {
    const padding = reduceCSSCalc(`calc(${gridGutterWidth} / 2)`);

    return `${makeAllGridColumnClasses({ gridColumns, gridBreakpoints })} {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${padding};
  padding-left: ${padding};
}`;
}
