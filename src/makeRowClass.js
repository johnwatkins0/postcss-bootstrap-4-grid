import reduceCSSCalc from 'reduce-css-calc';

/**
 * Generates CSS for the .row class.
 * @param {string} gridGutterWidth A CSS value representing grid gutter size.
 * @return {string} The generated CSS.
 */
export function makeRowClass({ gridGutterWidth }) {
    const margin = reduceCSSCalc(`calc(${gridGutterWidth} / 2)`);

    return `.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -${margin};
  margin-left: -${margin};
}
`;
}
