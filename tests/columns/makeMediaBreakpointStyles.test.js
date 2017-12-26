import { makeMediaBreakpointStyles } from '../../src/columns/makeMediaBreakpointStyles';
import optsDefaults from '../../optsDefaults';

test('Styles for a given media breakpoint are correctly generated.', () => {
    expect(
        makeMediaBreakpointStyles({
            breakpoint: 'md',
            gridColumns: 12,
            gridBreakpoints: optsDefaults.gridBreakpoints,
            doOrderClasses: true,
            doOffsetClasses: true,
        }),
    ).toBe(`@media screen and (min-width: 768px) {
.col-md {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-md-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-md-1 {
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

.order-md-first {
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

.offset-md-1 {
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


}
`);
});

test('Styles for empty breakpoint return the right thing.', () => {
    expect(
        makeMediaBreakpointStyles({
            breakpoint: '',
            gridColumns: 12,
            gridBreakpoints: optsDefaults.gridBreakpoints,
            doOrderClasses: true,
            doOffsetClasses: true,
        }),
    ).toBe(`.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  flex: 0 0 8.333333333333334%;
  max-width: 8.333333333333334%;
}

.col-2 {
  flex: 0 0 16.666666666666668%;
  max-width: 16.666666666666668%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333333333336%;
  max-width: 33.333333333333336%;
}

.col-5 {
  flex: 0 0 41.66666666666667%;
  max-width: 41.66666666666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333333333336%;
  max-width: 58.333333333333336%;
}

.col-8 {
  flex: 0 0 66.66666666666667%;
  max-width: 66.66666666666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.33333333333334%;
  max-width: 83.33333333333334%;
}

.col-11 {
  flex: 0 0 91.66666666666667%;
  max-width: 91.66666666666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333333333334%;
}

.offset-2 {
  margin-left: 16.666666666666668%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333333333336%;
}

.offset-5 {
  margin-left: 41.66666666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333333333336%;
}

.offset-8 {
  margin-left: 66.66666666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333333334%;
}

.offset-11 {
  margin-left: 91.66666666666667%;
}

`);
});
