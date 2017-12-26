import postcss from 'postcss';
import cssbeautify from 'cssbeautify';

import { validateOpts } from './validateOpts';
import { makeContainerClass } from './makeContainerClass';
import { makeContainerMaxWidths } from './makeContainerMaxWidths';
import { makeRowClass } from './makeRowClass';
import { makeNoGuttersUtil } from './makeNoGuttersUtil';
import { makeGridColumns } from './columns';

const makeGrid = (pluginOpts = {}) =>
    new Promise(async (resolve, reject) => {
        try {
            const opts = await validateOpts(pluginOpts);
            resolve(
                cssbeautify(
                    `

${makeContainerClass(opts)}
${makeContainerMaxWidths(opts)}
${makeRowClass(opts)}
${makeNoGuttersUtil()}
${makeGridColumns(opts)}

      `,
                    {
                        indent: '  ',
                        autosemicolon: true,
                    },
                ),
            );
        } catch (error) {
            reject(error);
        }
    });

const bootstrap4Grid = (opts = {}) => (root, result) =>
    new Promise((resolve, reject) => {
        if (root.source.input.css.indexOf('@bootstrap-4-grid') === -1) {
            result.warn('@bootstrap-4-grid at rule not found');
            resolve();
            return;
        }

        root.walkAtRules('bootstrap-4-grid', async rule => {
            try {
                const css = await makeGrid(opts);
                rule.before(css);
                rule.remove();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });

module.exports = postcss.plugin('bootstrap-4-grid', bootstrap4Grid);
