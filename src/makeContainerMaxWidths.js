/**
 * Adds max widths for the container class at each grid breakpoint.
 * @param {Object} containerMaxWidths The max widths for each breakpoint.
 * @param {Object} gridBreakpoints
 * @return {string} The generated CSS.
 */
export const makeContainerMaxWidths = ({
    containerMaxWidths,
    gridBreakpoints,
}) =>
    Object.keys(containerMaxWidths)
        .map(
            key => `@media screen and (min-width: ${gridBreakpoints[key]}) {
  .container {
    max-width: ${containerMaxWidths[key]};
  }
}
`,
        )
        .join('');
