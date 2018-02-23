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
                        autosemicolon: true
                    }
                )
            );
        } catch (error) {
            reject(error);
        }
    });

const bootstrap4Grid = (opts = {}) => (root, result) =>
    new Promise((resolve, reject) => {
        const atRuleCount =
            root.toString().split('@bootstrap-4-grid').length - 1;

        if (atRuleCount === 0) {
            resolve();
            return;
        }

        let steps = 0;
        root.walkAtRules('bootstrap-4-grid', async rule => {
            try {
                const css = await makeGrid(opts);
                rule.before(css);
                rule.remove();
                steps += 1;
            } catch (error) {
                steps += 1;
                result.warn(err);
            }
        });

        const completionInterval = setInterval(() => {
            if (steps === atRuleCount) {
                clearInterval(completionInterval);
                resolve();
            }
        }, 1000);
    });

module.exports = postcss.plugin('bootstrap-4-grid', bootstrap4Grid);
