// @ts-check
const fs = require('fs');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const {join, basename} = require('path');
const {execSync} = require('child_process');
const svgr = require('@svgr/core').default;
const prettier = require('prettier');
const {camelCase, kebabCase, upperFirst} = require('lodash');
const {yellow, green} = require('colors/safe');

const pascalCase = (s) => upperFirst(camelCase(s));

const PATH_REPO_ROOT = join(__dirname, '..', '..');
const PATH_CACHE = join(__dirname, 'node_modules', '.cache');
const PATH_MISTICA_ICONS_REPO = join(PATH_CACHE, 'mistica-icons');
const PATH_OUTPUT = join(PATH_REPO_ROOT, 'src', 'generated/mistica-icons');
const PATH_OUTPUT_INDEX_FILENAME = join(PATH_OUTPUT, 'index.tsx.txt');

const GIT_MISTICA_ICONS_MAIN_BRANCH = 'production';
const GIT_MISTICA_ICONS = 'git@github.com:Telefonica/mistica-icons.git';

const checkoutMisticaIconsRepo = () => {
    mkdirp.sync(PATH_CACHE);

    if (!fs.existsSync(PATH_MISTICA_ICONS_REPO)) {
        execSync(`git clone ${GIT_MISTICA_ICONS} ${PATH_MISTICA_ICONS_REPO}`, {
            cwd: PATH_CACHE,
            stdio: 'inherit',
        });
    }

    execSync(`git checkout ${GIT_MISTICA_ICONS_MAIN_BRANCH}`, {
        cwd: PATH_MISTICA_ICONS_REPO,
        stdio: 'inherit',
    });

    execSync(`git pull`, {
        cwd: PATH_MISTICA_ICONS_REPO,
        stdio: 'inherit',
    });
};

const getSvgIconFilenames = () => {
    const basePath = join(PATH_MISTICA_ICONS_REPO, 'icons');
    const paths = fs.readdirSync(basePath);
    const result = [];
    for (const path of paths) {
        const filenames = fs
            .readdirSync(join(basePath, path))
            .filter((f) => f.endsWith('.svg'))
            .map((f) => join(basePath, path, f));

        result.push(...filenames);
    }
    return result;
};

const createIconComponentSource = async (svgSource, componentName) => {
    const generated = svgr.sync(
        svgSource,
        {
            ref: false,
            titleProp: false,
            typescript: true,
            template: require('./template'),
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
        {componentName}
    );

    // get icon size, needed to set the viewBox
    const svgSize = generated.match(/(width|height)={(\d+)}/)[2];

    return (
        generated
            // set svg props
            .replace(
                /<svg .*?>/,
                `<svg width={size} height={size} viewBox="0 0 ${svgSize} ${svgSize}" role="presentation">`
            )
            // set fill color
            .replace(/fill="#?\w+"/g, 'fill={fillColor}')
            // add component type, for some reason it gets stripped from the template
            .replace(/\s*=\s*\({\s*color,/m, ': React.FC<Props> = ({color,')
    );
};

const format = async (src) =>
    prettier.format(src, {...(await prettier.resolveConfig('.')), parser: 'babel-ts'});

const main = async () => {
    checkoutMisticaIconsRepo();
    const svgFilenames = getSvgIconFilenames();
    rimraf.sync(PATH_OUTPUT);
    mkdirp.sync(PATH_OUTPUT);

    const doNotEditComment = `/*
        * This file was autogenerated. Don't edit this file!
        *
        * To update, execute "yarn start" inside "import-mistica-icons"
        */
    `;

    const componentHead = `
        ${doNotEditComment}

        import * as React from 'react';
        import {useIsInverseVariant, useTheme} from '../..';

        type Props = {
            color?: string;
            size?: number;
        };

    `;

    const components = [];

    for (const svgFilename of svgFilenames) {
        const svgCode = fs.readFileSync(svgFilename, 'utf-8');
        const componentName = 'Icon' + pascalCase(basename(svgFilename, '.svg'));

        console.log(yellow(basename(svgFilename)), '=>', green(componentName));
        const src = componentHead + (await createIconComponentSource(svgCode, componentName));
        const formatted = await format(src);
        const importName = kebabCase(componentName);
        const filename = `${importName}.tsx`;
        components.push([componentName, importName]);

        fs.writeFileSync(join(PATH_OUTPUT, filename), formatted);
    }

    const index = components
        .sort((a, b) => (a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1))
        .map(
            ([componentName, importName]) =>
                `export {default as ${componentName}} from './generated/mistica-icons/${importName}';`
        )
        .join('\n');

    fs.writeFileSync(PATH_OUTPUT_INDEX_FILENAME, index, 'utf8');

    console.log();
    console.log('Done! Copy exports in ', yellow(PATH_OUTPUT_INDEX_FILENAME), ' to src/index.tsx');
    console.log();
};

main();
