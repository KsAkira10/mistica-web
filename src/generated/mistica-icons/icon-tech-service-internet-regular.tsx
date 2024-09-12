'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTechServiceInternetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.754 13.523c3.172 0 5.754-2.585 5.754-5.761S10.926 2 7.754 2 2 4.586 2 7.762s2.582 5.761 5.754 5.761m.723-5.038h.87c-.097 1.392-.465 2.457-.87 3.052zm0-4.494c.41.6.773 1.66.87 3.052h-.87zM7.036 7.043h-.87c.097-1.392.465-2.457.87-3.052zm0 4.494c-.41-.6-.773-1.66-.87-3.052h.87zm3.153-.208c.322-.797.534-1.765.603-2.848h1.22a4.34 4.34 0 0 1-1.823 2.848m.599-4.286c-.065-1.084-.277-2.052-.603-2.849a4.33 4.33 0 0 1 1.822 2.849zM5.324 4.199C5 4.996 4.79 5.964 4.72 7.047H3.505A4.32 4.32 0 0 1 5.324 4.2m-.599 4.286c.065 1.084.276 2.052.603 2.849a4.33 4.33 0 0 1-1.823-2.849zM21.73 9.601l-.313-.738-2.2 2.204a.18.18 0 0 1-.25.004l-.524-.493a.2.2 0 0 1-.055-.129c0-.028.004-.083.05-.13l2.214-2.216-.736-.314a3.41 3.41 0 0 0-3.752.733 3.43 3.43 0 0 0-.953 2.992l-3.687 3.692a3.42 3.42 0 0 0-2.987.954 3.42 3.42 0 0 0-.732 3.757l.313.737 2.2-2.203a.18.18 0 0 1 .249-.005l.524.493a.2.2 0 0 1 .056.13.18.18 0 0 1-.05.129l-2.215 2.217.736.313a3.41 3.41 0 0 0 3.752-.733 3.42 3.42 0 0 0 .953-2.987l3.687-3.692a3.43 3.43 0 0 0 3.72-4.715m-3.752 3.595-.304-.083-4.539 4.55.083.304a2.34 2.34 0 0 1-.603 2.258c-.46.461-1.082.715-1.703.687l.957-.959a1.259 1.259 0 0 0-.028-1.807l-.524-.493a1.25 1.25 0 0 0-1.754.023l-.944.94a2.338 2.338 0 0 1 2.942-2.309l.304.083 4.543-4.549-.083-.304a2.34 2.34 0 0 1 .603-2.259c.46-.46 1.078-.71 1.704-.687l-.958.96a1.259 1.259 0 0 0 .028 1.807l.524.492c.498.47 1.271.461 1.754-.023l.944-.945a2.38 2.38 0 0 1-.69 1.71c-.59.59-1.45.82-2.256.604"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.754 13.523c3.172 0 5.754-2.585 5.754-5.761S10.926 2 7.754 2 2 4.586 2 7.762s2.582 5.761 5.754 5.761m.723-5.038h.87c-.097 1.392-.465 2.457-.87 3.052zm0-4.494c.41.6.773 1.66.87 3.052h-.87zM7.036 7.043h-.87c.097-1.392.465-2.457.87-3.052zm0 4.494c-.41-.6-.773-1.66-.87-3.052h.87zm3.153-.208c.322-.797.534-1.765.603-2.848h1.22a4.34 4.34 0 0 1-1.823 2.848m.599-4.286c-.065-1.084-.277-2.052-.603-2.849a4.33 4.33 0 0 1 1.822 2.849zM5.324 4.199C5 4.996 4.79 5.964 4.72 7.047H3.505A4.32 4.32 0 0 1 5.324 4.2m-.599 4.286c.065 1.084.276 2.052.603 2.849a4.33 4.33 0 0 1-1.823-2.849zM21.73 9.601l-.313-.738-2.2 2.204a.18.18 0 0 1-.25.004l-.524-.493a.2.2 0 0 1-.055-.129c0-.028.004-.083.05-.13l2.214-2.216-.736-.314a3.41 3.41 0 0 0-3.752.733 3.43 3.43 0 0 0-.953 2.992l-3.687 3.692a3.42 3.42 0 0 0-2.987.954 3.42 3.42 0 0 0-.732 3.757l.313.737 2.2-2.203a.18.18 0 0 1 .249-.005l.524.493a.2.2 0 0 1 .056.13.18.18 0 0 1-.05.129l-2.215 2.217.736.313a3.41 3.41 0 0 0 3.752-.733 3.42 3.42 0 0 0 .953-2.987l3.687-3.692a3.43 3.43 0 0 0 3.72-4.715m-3.752 3.595-.304-.083-4.539 4.55.083.304a2.34 2.34 0 0 1-.603 2.258c-.46.461-1.082.715-1.703.687l.957-.959a1.259 1.259 0 0 0-.028-1.807l-.524-.493a1.25 1.25 0 0 0-1.754.023l-.944.94a2.338 2.338 0 0 1 2.942-2.309l.304.083 4.543-4.549-.083-.304a2.34 2.34 0 0 1 .603-2.259c.46-.46 1.078-.71 1.704-.687l-.958.96a1.259 1.259 0 0 0 .028 1.807l.524.492c.498.47 1.271.461 1.754-.023l.944-.945a2.38 2.38 0 0 1-.69 1.71c-.59.59-1.45.82-2.256.604"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.256 7.095q-.443.001-.77.154c-.342.16-.648.468-.908.916q-.16.27-.272.563l-.008.009-3.78 1.761h-.01A3.6 3.6 0 0 0 8.39 10.3c-.291 0-.552.053-.77.154q-.515.241-.908.916-.165.279-.28.585a.67.67 0 0 0 .067.622.62.62 0 0 0 .51.26.7.7 0 0 0 .311-.072l.493-.23.314.168-.073.35-.493.23a.66.66 0 0 0-.403.619c.008.26.184.484.45.582a3.7 3.7 0 0 0 1.14.208c.292 0 .552-.053.77-.154q.511-.25.909-.922.159-.27.271-.563l.009-.008 3.781-1.762h.011c.118.042.602.199 1.118.199q.442-.002.77-.154.515-.242.908-.916.166-.28.28-.586a.67.67 0 0 0-.067-.622.62.62 0 0 0-.51-.26.7.7 0 0 0-.311.073l-.493.23-.314-.169.073-.35.493-.23c.258-.12.412-.358.4-.619-.01-.26-.181-.481-.45-.582l-.03-.01c-.128-.04-.603-.192-1.11-.192m0 .56c.476 0 .946.174.946.174.112.042.115.115.009.165l-.552.258a.5.5 0 0 0-.24.302l-.13.611c-.02.126.037.25.146.314l.549.294c.064.03.137.048.207.045a.4.4 0 0 0 .18-.037l.551-.257a.2.2 0 0 1 .073-.02c.056 0 .078.05.05.132 0 0-.33.916-.896 1.182-.16.075-.347.1-.535.1-.476 0-.947-.173-.947-.173a.5.5 0 0 0-.173-.028.6.6 0 0 0-.227.042l-3.82 1.787a.6.6 0 0 0-.27.294s-.33.916-.896 1.182c-.16.076-.348.101-.535.101-.476 0-.947-.174-.947-.174-.112-.042-.115-.114-.008-.168l.551-.257a.5.5 0 0 0 .241-.303l.13-.61a.31.31 0 0 0-.146-.314l-.55-.294a.45.45 0 0 0-.207-.045.4.4 0 0 0-.179.036l-.552.258a.2.2 0 0 1-.073.02c-.056 0-.078-.05-.05-.132 0 0 .33-.916.896-1.182.16-.076.348-.101.535-.101.476 0 .947.174.947.174q.085.029.174.028a.6.6 0 0 0 .227-.042l3.82-1.785a.6.6 0 0 0 .27-.294s.33-.916.896-1.182c.16-.073.347-.1.535-.1"
                />
                <path
                    fill={fillColor}
                    d="M5.446 16.933h13.11c1.097 0 1.94-.328 2.503-.972.521-.6.788-1.468.788-2.583V8.44c0-1.115-.264-1.984-.788-2.583-.562-.644-1.406-.972-2.504-.972H5.446c-1.1 0-1.941.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97M3.788 6.596c.344-.394.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.338.39.512 1.01.512 1.846v4.938c0 .835-.174 1.457-.512 1.846-.345.395-.888.588-1.659.588H5.446c-.77 0-1.314-.193-1.658-.588-.34-.39-.513-1.011-.513-1.846V8.44c0-.835.174-1.457.513-1.844M21.253 19.118H2.749a.56.56 0 0 1-.56-.56c0-.309.252-.561.56-.561h18.504c.308 0 .56.252.56.56s-.252.56-.56.56"
                />
            </svg>
        );
    }
};

export default IconTechServiceInternetRegular;
