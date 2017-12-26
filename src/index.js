import postcss from 'postcss';
import cssbeautify from 'cssbeautify';

import { validateOpts } from './validateOpts';
import { makeContainerClass } from './makeContainerClass';
import { makeContainerMaxWidths } from './makeContainerMaxWidths';
import { makeRowClass } from './makeRowClass';
import { makeNoGuttersUtil } from './makeNoGuttersUtil';
import { makeGridColumns } from './columns';

const makeGrid = (pluginOpts = {}) =>
    new Promise((resolve, reject) => {
        validateOpts(pluginOpts)
            .then(opts => {
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
            })
            .catch(error => {
                reject(error);
            });
    });

const bootstrap4Grid = (opts = {}) => root =>
    new Promise((resolve, reject) => {
        root.walkAtRules('bootstrap-4-grid', rule => {
            makeGrid(opts)
                .then(css => {
                    rule.before(css);
                    rule.remove();
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    });

module.exports = postcss.plugin('bootstrap-4-grid', bootstrap4Grid);
