/**
 * Adds CSS for the no-gutters utility class.
 * @return {string} The generated CSS.
 */
export const makeNoGuttersUtil = () =>
    `.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
`;
