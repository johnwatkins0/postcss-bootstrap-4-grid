import { makeContainerMaxWidths } from '../src/makeContainerMaxWidths';
import optsDefaults from '../optsDefaults';

test('Container max widths from defaults are generated correctly.', () => {
    expect(
        makeContainerMaxWidths({
            containerMaxWidths: optsDefaults.containerMaxWidths,
            gridBreakpoints: optsDefaults.gridBreakpoints,
        }),
    ).toBe(
        `@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
`,
    );
});
