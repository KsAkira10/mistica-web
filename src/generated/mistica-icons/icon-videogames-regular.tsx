'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideogamesRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.824 10.039H8.47v-.353c0-.235-.157-.392-.393-.392-.235 0-.392.157-.392.392v.353h-.392c-.235 0-.392.157-.392.392s.157.392.392.392h.392v.353c0 .235.157.392.392.392s.393-.157.393-.392v-.353h.353c.235 0 .392-.157.392-.392s-.157-.392-.392-.392"
                />
                <path
                    fill={fillColor}
                    d="M5.412 10.431a2.67 2.67 0 0 1 2.666-2.667c1.451 0 2.628 1.216 2.667 2.667a2.645 2.645 0 0 1-2.667 2.667 2.67 2.67 0 0 1-2.666-2.667m1.176 0c0 .824.667 1.49 1.49 1.49.785 0 1.49-.666 1.49-1.49a1.49 1.49 0 1 0-2.98 0M15.137 10.039c-.235 0-.392.157-.392.392s.157.392.392.392h1.569c.235 0 .392-.157.392-.392s-.157-.392-.392-.392z"
                />
                <path
                    fill={fillColor}
                    d="M13.255 10.431a2.67 2.67 0 0 1 2.666-2.667c1.451 0 2.628 1.216 2.667 2.667a2.645 2.645 0 0 1-2.667 2.667 2.67 2.67 0 0 1-2.666-2.667m1.176 0c0 .824.667 1.49 1.49 1.49.785 0 1.49-.666 1.49-1.49a1.49 1.49 0 1 0-2.98 0M11.608 9.02h.784c.314 0 .588.274.588.587a.603.603 0 0 1-.588.589h-.784a.603.603 0 0 1-.588-.589c0-.313.274-.588.588-.588"
                />
                <path
                    fill={fillColor}
                    d="m18.118 5.96 3.53 3.883q.352.411.352.941v5.53c0 1.176-.98 2.156-2.157 2.156h-.902a2.17 2.17 0 0 1-1.53-.627l-3.607-3.608a.3.3 0 0 1-.079-.02c-.029-.01-.058-.02-.078-.02h-3.294c-.079 0-.118 0-.157.04l-3.608 3.608a2.17 2.17 0 0 1-1.53.627h-.901A2.176 2.176 0 0 1 2 16.313v-5.529c0-.353.118-.706.353-.941l3.53-3.883a1.42 1.42 0 0 1 1.019-.431h2.353c.392 0 .706.118.98.392l1.098 1.098c.02 0 .05.01.079.02.03.01.059.02.078.02h.941c.079 0 .118 0 .157-.04l1.098-1.098c.275-.235.628-.392.98-.392h2.432c.392 0 .745.157 1.02.431m1.725 11.334a.97.97 0 0 0 .98-.98v-5.53c0-.04 0-.079-.039-.118l-3.53-3.882a.3.3 0 0 0-.156-.078h-2.353c-.078 0-.117 0-.157.039L13.49 7.843c-.274.235-.627.392-.98.392h-.941c-.393 0-.706-.118-.98-.392L9.49 6.745a.3.3 0 0 1-.078-.02c-.03-.01-.06-.02-.079-.02H6.902c-.078 0-.118.04-.157.079l-3.53 3.882c-.039.04-.039.079-.039.118v5.53c0 .548.432.98.98.98h.903c.274 0 .51-.079.706-.275l3.608-3.608c.274-.235.627-.392.98-.392h3.294c.392 0 .706.118.98.392l3.608 3.608c.196.157.432.275.706.275z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.824 10.039H8.47v-.353c0-.235-.157-.392-.393-.392-.235 0-.392.157-.392.392v.353h-.392c-.235 0-.392.157-.392.392s.157.392.392.392h.392v.353c0 .236.157.392.392.392s.393-.156.393-.392v-.353h.353c.235 0 .392-.157.392-.392s-.157-.392-.392-.392"
                />
                <path
                    fill={fillColor}
                    d="M5.412 10.431a2.67 2.67 0 0 1 2.666-2.667c1.451 0 2.628 1.216 2.667 2.667a2.645 2.645 0 0 1-2.667 2.667 2.67 2.67 0 0 1-2.666-2.667m1.176 0c0 .824.667 1.49 1.49 1.49.785 0 1.49-.666 1.49-1.49a1.49 1.49 0 1 0-2.98 0M15.137 10.039c-.235 0-.392.157-.392.392s.157.392.392.392h1.569c.235 0 .392-.157.392-.392s-.157-.392-.392-.392z"
                />
                <path
                    fill={fillColor}
                    d="M13.255 10.431a2.67 2.67 0 0 1 2.666-2.667c1.451 0 2.628 1.216 2.667 2.667a2.645 2.645 0 0 1-2.667 2.667 2.67 2.67 0 0 1-2.666-2.667m1.176 0c0 .824.667 1.49 1.49 1.49.785 0 1.49-.666 1.49-1.49a1.49 1.49 0 1 0-2.98 0M11.608 9.02h.784c.314 0 .588.274.588.588a.603.603 0 0 1-.588.588h-.784a.603.603 0 0 1-.588-.588c0-.314.274-.589.588-.589"
                />
                <path
                    fill={fillColor}
                    d="m18.118 5.96 3.53 3.883q.352.411.352.941v5.53c0 1.176-.98 2.156-2.157 2.156h-.902a2.17 2.17 0 0 1-1.53-.627l-3.607-3.608c-.02 0-.05-.01-.079-.02s-.058-.02-.078-.02h-3.294c-.079 0-.118 0-.157.04l-3.608 3.608a2.17 2.17 0 0 1-1.53.627h-.901A2.176 2.176 0 0 1 2 16.313v-5.529c0-.353.118-.706.353-.941l3.53-3.883a1.42 1.42 0 0 1 1.019-.43h2.353c.392 0 .706.117.98.391l1.098 1.098c.02 0 .05.01.079.02.03.01.059.02.078.02h.941c.079 0 .118 0 .157-.04l1.098-1.098c.275-.235.628-.392.98-.392h2.432c.392 0 .745.157 1.02.431m1.725 11.334a.97.97 0 0 0 .98-.98v-5.53c0-.04 0-.078-.039-.118l-3.53-3.882a.3.3 0 0 0-.156-.078h-2.353c-.078 0-.117 0-.157.039L13.49 7.843c-.274.235-.627.392-.98.392h-.941c-.393 0-.706-.118-.98-.392L9.49 6.745a.3.3 0 0 1-.078-.02c-.03-.01-.06-.02-.079-.02H6.902c-.078 0-.118.04-.157.079l-3.53 3.882c-.039.04-.039.079-.039.118v5.53c0 .549.432.98.98.98h.903c.274 0 .51-.079.706-.275l3.608-3.607c.274-.236.627-.393.98-.393h3.294c.392 0 .706.118.98.393l3.608 3.607c.196.157.432.275.706.275z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.953 8.313a43 43 0 0 1-.303-.71q-.049-.119-.088-.209c-.025-.055-.04-.086-.052-.109l-.015-.03-.059-.11a3 3 0 0 0-.546-.731c-.68-.647-1.645-.975-2.866-.975-.501 0-.947.067-1.361.18-.244.064-.784.302-.796.307 0 0-.414.233-.546.32a2.377 2.377 0 0 1-2.653 0c-.131-.087-.546-.32-.546-.32-.008-.005-.549-.243-.792-.308a5.2 5.2 0 0 0-1.362-.179c-1.218 0-2.185.328-2.863.975-.224.21-.395.462-.549.73l-.056.11-.015.032c-.011.022-.027.053-.052.108q-.05.107-.109.253a27 27 0 0 1-.293.686c-.68 1.567-1.912 4.404-1.878 6.921.008.415.163 1.238.286 1.636.246.793.812 1.302 1.437 1.507.255.081.6.14.848.16q.035.002.079.002c.353 0 .95-.145 1.26-.285.19-.084.457-.23.77-.496.161-.137.244-.239.46-.504l.12-.149q.096-.12.188-.241c.149-.196.298-.392.476-.563.583-.554 1.32-.95 2.197-1.193.56-.16 1.14-.235 1.722-.235s1.165.078 1.723.235c.877.244 1.616.642 2.196 1.193.17.164.315.351.459.54q.101.133.208.264l.084.105c.241.299.326.404.495.548.314.266.594.412.785.496.336.151.991.283 1.325.283.249 0 .593-.079.848-.16.625-.204 1.194-.714 1.437-1.507.124-.398.278-1.221.283-1.636.035-2.528-1.205-5.378-1.886-6.94m.424 8.224c-.154.499-.504.661-.652.706a2 2 0 0 1-.46.098c-.162 0-.647-.098-.818-.174a1.8 1.8 0 0 1-.484-.305c-.073-.067-.104-.098-.331-.378l-.092-.115-.174-.224a5.5 5.5 0 0 0-.594-.692c-.72-.686-1.633-1.188-2.717-1.49a7.7 7.7 0 0 0-4.118 0c-1.08.302-1.997.804-2.717 1.49a5.4 5.4 0 0 0-.56.652l-.03.04-.088.113-.086.114-.096.117c-.227.28-.255.311-.33.376q-.238.2-.47.305c-.186.084-.611.176-.735.18a3 3 0 0 1-.554-.104c-.146-.048-.496-.21-.65-.709-.104-.328-.227-1.034-.23-1.297-.03-2.26 1.144-4.968 1.778-6.429l.004-.008.011-.027c.091-.208.174-.397.24-.558l.023-.056.034-.08q.046-.113.084-.198l.028-.058.056-.113c.106-.19.213-.33.316-.43.44-.418 1.115-.634 2.006-.634.353 0 .692.048 1.04.137.094.028.391.152.557.222l.04.023c.108.061.287.163.369.217a3.6 3.6 0 0 0 2.022.617c.726 0 1.423-.213 2.022-.617.087-.058.306-.182.407-.238a7 7 0 0 1 .557-.22 4 4 0 0 1 1.04-.138c.89 0 1.565.213 2.008.633.103.1.204.238.316.431l.04.073.019.04.025.055.06.14.044.104.036.09a26 26 0 0 0 .252.585l.004.008c.634 1.461 1.809 4.17 1.778 6.43-.003.262-.129.965-.23 1.296M16.052 8.45q.379 0 .586.193.214.203.215.594-.001.389-.215.591-.208.195-.586.194-.379 0-.585-.194-.214-.2-.213-.59.001-.392.213-.595.202-.193.585-.193m-1.619 1.569q.379-.001.586.196.215.202.215.594 0 .387-.215.59-.208.195-.586.194-.379 0-.585-.193c-.14-.135-.216-.33-.216-.591q0-.392.216-.594.206-.197.585-.196m2.205 1.762q-.208-.195-.586-.194-.382 0-.585.194-.211.202-.213.593 0 .39.213.592.206.192.585.193.379 0 .586-.193.214-.204.215-.591-.001-.392-.215-.594m1.03-1.762q.38-.001.586.196.215.202.216.594 0 .387-.216.59-.206.195-.585.194-.381 0-.586-.193-.212-.201-.213-.591.002-.392.213-.594.206-.197.586-.196m-7.56-.087q-.28-.264-.818-.263h-.089a1 1 0 0 0 .008-.107c0-.364-.1-.644-.291-.826q-.28-.266-.818-.266c-.359 0-.633.092-.815.266q-.293.275-.292.826.002.087.012.16h-.02a1 1 0 0 0-.146-.011c-.358 0-.633.092-.815.266q-.287.271-.288.823c0 .367.098.647.285.824q.28.265.818.266c.086 0 .12-.002.157-.005h.011a2 2 0 0 0-.016.156c0 .367.095.644.285.82.182.18.46.267.818.267q.535 0 .818-.263.29-.274.291-.821a1 1 0 0 0-.022-.177l-.003-.022h.112c.356 0 .633-.09.818-.266q.291-.274.291-.82 0-.547-.29-.827"
                />
            </svg>
        );
    }
};

export default IconVideogamesRegular;
