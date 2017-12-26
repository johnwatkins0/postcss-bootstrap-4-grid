import { makeColOffset } from '../../src/columns/makeColOffset';

test('Offset rules are generated correctly.', () => {
    expect(makeColOffset({ size: 6, gridColumns: 12 })).toBe(
        `margin-left: 50%;`,
    );
});
