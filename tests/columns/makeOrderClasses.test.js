import { makeOrderClasses } from '../../src/columns/makeOrderClasses';

test('Order classes are generated correctly.', () => {
    expect(
        makeOrderClasses({
            infix: '-md',
            gridColumns: 12,
            doOrderClasses: true,
        }),
    ).toBe(`.order-md-first {
  order: -1;
}

.order-md-1 {
  order: 1;
}

.order-md-2 {
  order: 2;
}

.order-md-3 {
  order: 3;
}

.order-md-4 {
  order: 4;
}

.order-md-5 {
  order: 5;
}

.order-md-6 {
  order: 6;
}

.order-md-7 {
  order: 7;
}

.order-md-8 {
  order: 8;
}

.order-md-9 {
  order: 9;
}

.order-md-10 {
  order: 10;
}

.order-md-11 {
  order: 11;
}

.order-md-12 {
  order: 12;
}

`);
});

test('Not doing order classes returns an empty string.', () => {
    expect(
        makeOrderClasses({
            infix: '-md',
            gridColumns: 12,
            doOrderClasses: false,
        }),
    ).toBe('');
});
