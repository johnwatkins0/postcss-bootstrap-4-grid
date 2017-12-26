import { makeOffsetClasses } from '../../src/columns/makeOffsetClasses';

test('Offset classes are generated correctly.', () => {
    expect(
        makeOffsetClasses({
            infix: '-md',
            gridColumns: 12,
            doOffsetClasses: true,
        }),
    ).toBe(`.offset-md-1 {
  margin-left: 8.333333333333334%;
}

.offset-md-2 {
  margin-left: 16.666666666666668%;
}

.offset-md-3 {
  margin-left: 25%;
}

.offset-md-4 {
  margin-left: 33.333333333333336%;
}

.offset-md-5 {
  margin-left: 41.66666666666667%;
}

.offset-md-6 {
  margin-left: 50%;
}

.offset-md-7 {
  margin-left: 58.333333333333336%;
}

.offset-md-8 {
  margin-left: 66.66666666666667%;
}

.offset-md-9 {
  margin-left: 75%;
}

.offset-md-10 {
  margin-left: 83.33333333333334%;
}

.offset-md-11 {
  margin-left: 91.66666666666667%;
}

`);
});

test('Not doing offset classes returns empty string', () => {
    expect(
        makeOffsetClasses({
            infix: '-md',
            gridColumns: 12,
            doOffsetClasses: false,
        }),
    ).toBe('');
});
