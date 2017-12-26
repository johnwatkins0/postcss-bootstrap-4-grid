import { makeColClasses } from '../../src/columns/makeColClasses';

test('Column classes for a given breakpoint are generated correctly', () => {
    expect(makeColClasses({ infix: '-md', gridColumns: 12 }))
        .toEqual(`.col-md-1 {
  flex: 0 0 8.333333333333334%;
  max-width: 8.333333333333334%;
}

.col-md-2 {
  flex: 0 0 16.666666666666668%;
  max-width: 16.666666666666668%;
}

.col-md-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-md-4 {
  flex: 0 0 33.333333333333336%;
  max-width: 33.333333333333336%;
}

.col-md-5 {
  flex: 0 0 41.66666666666667%;
  max-width: 41.66666666666667%;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-md-7 {
  flex: 0 0 58.333333333333336%;
  max-width: 58.333333333333336%;
}

.col-md-8 {
  flex: 0 0 66.66666666666667%;
  max-width: 66.66666666666667%;
}

.col-md-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-md-10 {
  flex: 0 0 83.33333333333334%;
  max-width: 83.33333333333334%;
}

.col-md-11 {
  flex: 0 0 91.66666666666667%;
  max-width: 91.66666666666667%;
}

.col-md-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

`);
});
