'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOnlineOfferFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.535 15.78c.45 0 .73.28.73.731 0 .448-.28.731-.73.731-.451 0-.732-.28-.732-.731s.28-.731.731-.731m-.168.731c0 .14.027.17.17.17s.171-.027.171-.17-.028-.17-.17-.17-.171.03-.171.17M16.43 15.948a.28.28 0 0 1 .393-.048.275.275 0 0 1 .048.393l-2.32 2.963a.28.28 0 0 1-.392.048.28.28 0 0 1-.047-.392zM15.694 18.674c0-.451.28-.732.731-.732.448 0 .731.28.731.732 0 .45-.28.73-.73.73-.452 0-.732-.28-.732-.73m.731.168c.14 0 .171-.028.171-.171s-.028-.171-.17-.171c-.144 0-.172.028-.172.17s.031.171.171.171"
            />
            <path
                fill={fillColor}
                d="M19.73 17.6c0-.409-.376-.616-.68-.784l-.006-.002a4 4 0 0 1-.198-.115c.024-.045.054-.097.082-.145l.038-.065.003-.006c.176-.293.393-.655.193-1.003-.202-.35-.633-.342-.98-.333h-.07c-.056.001-.117.002-.168 0-.002-.052-.002-.113-.001-.168v-.07c.009-.345.017-.776-.333-.98-.345-.202-.705.013-.997.188l-.011.007a3 3 0 0 1-.21.12c-.04-.06-.084-.142-.115-.198l-.006-.01c-.071-.13-.15-.273-.25-.393v-1.821c0-1.88-.512-3.328-1.523-4.303-.874-.84-2.098-1.31-3.65-1.397V5.74c0-.69-.227-1.233-.678-1.611-.467-.395-1.145-.588-2.067-.588H7.005c-1.613 0-1.613-.426-1.613-.967a.56.56 0 0 0-.56-.56.56.56 0 0 0-.56.56c0 .751.229 1.28.705 1.625.44.32 1.067.462 2.03.462h1.105c1.624 0 1.624.7 1.624 1.079v.383c-1.532.093-2.748.56-3.613 1.395-1.014.978-1.527 2.426-1.527 4.309v4.437c0 1.879.513 3.327 1.524 4.302.972.938 2.384 1.412 4.19 1.412 1.239 0 2.295-.224 3.146-.667.322.126.653-.073.925-.238.058-.036.142-.087.21-.12.039.061.084.142.114.198.168.306.379.687.787.687.41 0 .62-.381.788-.686.03-.057.075-.138.114-.2l.145.083.066.038.005.004c.294.175.655.392 1.003.192.35-.202.342-.633.333-.98v-.07c0-.056-.002-.117 0-.168.052-.002.113-.002.168-.001h.07c.345.009.776.017.98-.333.203-.345-.013-.704-.188-.997l-.007-.011a3 3 0 0 1-.12-.21c.06-.04.142-.084.198-.115.303-.163.684-.373.684-.784M9.75 8.865c0-.308.252-.56.56-.56s.56.252.56.56v2.484c0 .309-.251.56-.56.56a.56.56 0 0 1-.56-.56zM5.117 13.15a.28.28 0 0 1 .079-.555c1.694.235 3.403.353 5.115.35 1.71.003 3.42-.115 5.114-.35a.28.28 0 0 1 .311.244.28.28 0 0 1-.232.31c-1.72.242-3.457.36-5.193.356a37 37 0 0 1-5.194-.355M18.03 18.28c-.032.122.077.302.185.482.12.196.237.391.168.507s-.297.111-.526.107c-.21-.004-.42-.008-.507.08s-.082.296-.078.504c.005.231.01.463-.11.53-.118.068-.313-.05-.508-.168-.179-.11-.359-.218-.48-.185-.117.03-.216.21-.315.392-.112.203-.226.41-.367.41s-.254-.207-.366-.41c-.1-.181-.198-.36-.314-.392-.123-.031-.304.078-.484.187-.137.082-.273.164-.382.183a.582.582 0 0 0-.23-.291 3 3 0 0 1 0-.253c.004-.21.008-.42-.08-.506-.088-.088-.297-.084-.506-.079-.23.005-.46.01-.528-.109-.067-.118.05-.313.169-.508.108-.179.217-.359.184-.48-.032-.117-.21-.215-.392-.315-.203-.112-.41-.225-.41-.366s.207-.255.41-.367c.181-.1.36-.198.392-.314.032-.122-.077-.302-.185-.481-.12-.197-.237-.392-.168-.508s.297-.111.526-.107c.21.004.42.008.507-.08s.082-.296.078-.504c-.005-.23-.01-.462.11-.53.118-.067.313.05.508.169.18.108.359.217.48.184.116-.03.213-.208.312-.389.092-.167.185-.336.294-.393l.025.002.025.001q.046 0 .093-.008c.114.049.21.224.304.397.098.18.196.358.312.39.122.032.302-.077.481-.185.197-.119.392-.237.508-.168s.111.297.107.526c-.004.21-.008.42.08.507s.296.082.504.078c.23-.005.462-.01.53.11.067.119-.051.314-.17.51-.108.18-.216.358-.183.479.03.116.21.215.391.314.204.113.41.226.41.367s-.207.254-.411.366c-.182.1-.362.198-.393.314"
            />
        </svg>
    );
};

export default IconOnlineOfferFilled;
