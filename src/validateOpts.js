import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

import optsDefaults from '../optsDefaults';

/**
 * Builds an options object from defaults and values passed in.
 * @param {object} opts
 */
const addDefaultOpts = opts => Object.assign({}, optsDefaults, opts);

/**
 * Validate options passed to the plugin.
 * @param {Object} pluginOpts The passed-in options.
 * @param {string} schemaFile A path to the file containing the schema.
 * @return {Promise} A promise resolving with validated options or an error on rejection.
 */
export const validateOpts = (
    pluginOpts,
    schemaFile = path.resolve(__dirname, '../optsSchema.json'),
) =>
    new Promise((resolve, reject) => {
        fs.readFile(schemaFile, 'utf-8', (err, schema) => {
            if (err) {
                reject(err);
                return;
            }

            const opts = addDefaultOpts(pluginOpts);
            const ajv = new Ajv();
            const valid = ajv.validate(JSON.parse(schema), opts);

            if (!valid) {
                reject(ajv.errorsText());
                return;
            }

            resolve(opts);
        });
    });
