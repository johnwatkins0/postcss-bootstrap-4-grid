import { makeCol } from '../../src/columns/makeCol';

test('Column class CSS is correctly built.', () => {
    expect(makeCol({ size: 6, gridColumns: 12 })).toBe(`flex: 0 0 50%;
  max-width: 50%;`);
});
