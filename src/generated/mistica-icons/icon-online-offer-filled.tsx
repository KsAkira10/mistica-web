/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOnlineOfferFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.534 15.78c.451 0 .732.28.732.731 0 .448-.28.731-.732.731-.45 0-.73-.28-.73-.731 0-.451.28-.731.73-.731zm-.168.731c0 .14.029.17.171.17.143 0 .171-.027.171-.17 0-.143-.028-.17-.17-.17-.143 0-.171.03-.171.17zm2.064-.563a.28.28 0 01.393-.048.275.275 0 01.048.393l-2.32 2.963a.28.28 0 01-.392.048.28.28 0 01-.047-.392l2.319-2.964zm-.736 2.726c0-.451.28-.732.731-.732.448 0 .731.28.731.732 0 .45-.28.73-.73.73-.452 0-.732-.28-.732-.73zm.731.168c.14 0 .171-.028.171-.171 0-.143-.028-.171-.17-.171-.144 0-.172.028-.172.17 0 .143.031.171.171.171z"
                fill={fillColor}
            />
            <path
                d="M19.73 17.6c0-.409-.376-.616-.68-.784l-.006-.002a3.924 3.924 0 01-.198-.115c.024-.045.054-.097.082-.145l.038-.065.003-.006c.176-.293.393-.655.193-1.003-.202-.35-.633-.342-.98-.333h-.07a3.135 3.135 0 01-.168 0 3.118 3.118 0 01-.001-.168v-.07c.009-.345.017-.776-.333-.98-.345-.202-.705.013-.997.188l-.011.007a2.943 2.943 0 01-.21.12c-.04-.06-.084-.142-.115-.198l-.006-.01a2.43 2.43 0 00-.25-.393v-1.821c0-1.88-.512-3.328-1.523-4.303-.874-.84-2.098-1.31-3.65-1.397V5.74c0-.69-.227-1.233-.678-1.611-.467-.395-1.145-.588-2.067-.588H7.005c-1.613 0-1.613-.426-1.613-.967a.562.562 0 00-.56-.56.562.562 0 00-.56.56c0 .751.229 1.28.705 1.625.44.32 1.067.462 2.03.462h1.105c1.624 0 1.624.7 1.624 1.079v.383c-1.532.093-2.748.56-3.613 1.395-1.014.978-1.527 2.426-1.527 4.309v4.437c0 1.879.513 3.327 1.524 4.302.972.938 2.384 1.412 4.19 1.412 1.239 0 2.295-.224 3.146-.667.322.126.653-.073.925-.238.058-.036.142-.087.21-.12.039.061.084.142.114.198.168.306.379.687.787.687.41 0 .62-.381.788-.686.03-.057.075-.138.114-.2l.145.083.066.038.005.004c.294.175.655.392 1.003.192.35-.202.342-.633.333-.98v-.07c0-.056-.002-.117 0-.168.052-.002.113-.002.168-.001h.07c.345.009.776.017.98-.333.203-.345-.013-.704-.188-.997l-.007-.011a2.96 2.96 0 01-.12-.21c.06-.04.142-.084.198-.115.303-.163.684-.373.684-.784zM9.75 8.865a.561.561 0 011.12 0v2.484a.56.56 0 01-.56.56.562.562 0 01-.56-.56V8.864zM5.117 13.15a.28.28 0 01.079-.555c1.694.235 3.403.353 5.114.35 1.712.003 3.42-.115 5.115-.35a.278.278 0 01.311.244.282.282 0 01-.232.31c-1.72.242-3.457.36-5.194.356a37.036 37.036 0 01-5.193-.355zm12.913 5.13c-.032.122.077.302.185.482.12.196.237.391.168.507-.068.116-.297.111-.526.107-.21-.004-.42-.008-.507.08-.087.088-.082.296-.078.504.005.231.01.463-.11.53-.118.068-.313-.05-.508-.168-.179-.11-.359-.218-.48-.185-.117.03-.216.21-.315.392-.112.203-.226.41-.367.41-.14 0-.254-.207-.366-.41-.1-.181-.198-.36-.314-.392-.123-.031-.304.078-.484.187-.137.082-.273.164-.382.183a.582.582 0 00-.23-.291 3.125 3.125 0 010-.253c.004-.21.008-.42-.08-.506-.088-.088-.297-.084-.506-.079-.23.005-.46.01-.528-.109-.067-.118.05-.313.169-.508.108-.179.217-.359.184-.48-.032-.117-.21-.215-.392-.315-.203-.112-.41-.225-.41-.366s.207-.255.41-.367c.181-.1.36-.198.392-.314.032-.122-.077-.302-.185-.481-.12-.197-.237-.392-.168-.508.068-.115.297-.111.526-.107.21.004.42.008.507-.08.087-.088.082-.296.078-.504-.005-.23-.01-.462.11-.53.118-.067.313.05.508.169.18.108.359.217.48.184.116-.03.213-.208.312-.389.092-.167.185-.336.294-.393l.025.002.025.001a.584.584 0 00.093-.008c.114.049.21.224.304.397.098.18.196.358.312.39.122.032.302-.077.481-.185.197-.119.392-.237.508-.168.115.068.111.297.107.526-.004.21-.008.42.08.507.088.087.296.082.504.078.23-.005.462-.01.53.11.067.119-.051.314-.17.51-.108.18-.216.358-.183.479.03.116.21.215.391.314.204.113.41.226.41.367 0 .14-.207.254-.411.366-.182.1-.362.198-.393.314z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnlineOfferFilled;
