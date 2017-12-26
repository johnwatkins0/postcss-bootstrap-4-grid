import { makeRowClass } from '../src/makeRowClass';

test('Row class is generated correctly.', () => {
    expect(makeRowClass({ gridGutterWidth: '2rem' })).toBe(`.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;
}
`);
});
