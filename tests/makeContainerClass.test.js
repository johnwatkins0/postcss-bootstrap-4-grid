import { makeContainerClass } from '../src/makeContainerClass';

test('Passing no params throws.', () =>
    expect(() => makeContainerClass()).toThrow());

test('Passing an empty object throws.', () =>
    expect(() => makeContainerClass({})).toThrow());

test('Container classes are built with rem unit.', () =>
    expect(makeContainerClass({ gridGutterWidth: '2rem' }))
        .toBe(`.container, .container-fluid {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}
`));

test('Container classes are built with px unit.', () =>
    expect(makeContainerClass({ gridGutterWidth: '32px' }))
        .toBe(`.container, .container-fluid {
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
}
`));

test('Container classes are built with vw unit.', () =>
    expect(makeContainerClass({ gridGutterWidth: '10vw' }))
        .toBe(`.container, .container-fluid {
  width: 100%;
  padding-right: 5vw;
  padding-left: 5vw;
  margin-right: auto;
  margin-left: auto;
}
`));
