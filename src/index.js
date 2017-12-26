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

const bootstrap4Grid = (opts = {}) => root =>
    new Promise((resolve, reject) => {
        root.walkAtRules('bootstrap-4-grid', async rule => {
            try {
                const css = await makeGrid(opts);
                rule.before(css);
                rule.remove();
            } catch (error) {
                reject(error);
                return;
            }
        });
        resolve();
    });

module.exports = postcss.plugin('bootstrap-4-grid', bootstrap4Grid);
