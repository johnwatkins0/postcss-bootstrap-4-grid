import { makeNoGuttersUtil } from '../src/makeNoGuttersUtil';

test('.no-gutters utility class is generated correctly.', () => {
    expect(makeNoGuttersUtil()).toBe(`.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
`);
});
