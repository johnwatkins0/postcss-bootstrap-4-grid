/**
 * Generates an infix string for a given breakpoint.
 * @param {string} breakpoint The breakpoint.
 * @return {string}
 */
export const getInfix = breakpoint =>
    breakpoint.length ? `-${breakpoint}` : '';
