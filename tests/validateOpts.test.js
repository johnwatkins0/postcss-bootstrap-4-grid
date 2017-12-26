import { validateOpts } from '../src/validateOpts';
import optsDefaults from '../optsDefaults';

test('Default options are validated correctly.', done => {
    validateOpts(optsDefaults)
        .then(vOpts => {
            expect(vOpts).toMatchObject(optsDefaults);
            done();
        })
        .catch(() => {
            expect('Failed test').toBe('This should not run.');
            done();
        });
});

test('Options with invalid props throw error.', done => {
    validateOpts({ gridColumns: 'invalid' })
        .then(() => {
            expect('Failed test').toBe('This should not run.');
            done();
        })
        .catch(err => {
            expect(err).toBe('data.gridColumns should be number');
            done();
        });
});

test('Invalid schema file path throws an error', done => {
    validateOpts(optsDefaults, 'invalid-file-path.json')
        .then(() => {
            expect('Failed test').toBe('This should not run.');
            done();
        })
        .catch(err => {
            expect(err.code).toBe(`ENOENT`);
            done();
        });
});
