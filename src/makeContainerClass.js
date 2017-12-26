import reduceCSSCalc from 'reduce-css-calc';

/**
 * Creates styles for the container and container-fluid classes.
 * @param {string} gridGutterWidth A CSS length with its unit.
 * @return {string} The generated CSS.
 */
export function makeContainerClass({ gridGutterWidth }) {
    const padding = reduceCSSCalc(`calc(${gridGutterWidth} / 2)`);

    return `.container, .container-fluid {
  width: 100%;
  padding-right: ${padding};
  padding-left: ${padding};
  margin-right: auto;
  margin-left: auto;
}
`;
}
