/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCareShieldFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M12.185 14.51c.465-.22 4.546-2.223 4.939-4.495.288-1.686.277-5.55.274-5.714a.61.61 0 00-.711-.594c-.896.142-1.355-.164-1.984-.582l-.014-.01-.014-.009c-.636-.424-1.427-.951-2.742-.951h-.005c-1.328 0-2.124.532-2.762.96l-.022.015c-.624.416-1.075.715-1.936.582a.608.608 0 00-.748.591c-.003.163-.014 4.031.28 5.712.39 2.272 4.465 4.274 4.93 4.496a.589.589 0 00.515 0zm2.55-7.375l-3.28 3.311a.603.603 0 01-.427.18.605.605 0 01-.428-.18L9.126 8.96a.612.612 0 010-.86.597.597 0 01.852 0l1.048 1.059 2.854-2.883a.6.6 0 01.854 0 .612.612 0 010 .86zm6.876 8.384c.011-.14.258-3.395.227-4.53-.02-.809-.476-1.302-1.325-1.355a1.395 1.395 0 00-1.37 1.106l-.305 1.493a1.29 1.29 0 00-1.524.541l-.1.177-.002.002c-.216.384-.616 1.096-1.357 1.482-.11.05-.507.272-1.13 1.084a9.235 9.235 0 00-1.178 2.045l-.423 1.014c-.32.266-.527.658-.527 1.106v.712c0 .795.644 1.44 1.431 1.44h3.457c.79 0 1.431-.645 1.431-1.44v-.712a1.42 1.42 0 00-.227-.77l1.48-1.266a9.91 9.91 0 01.422-.33 2.65 2.65 0 00.656-.763c.204-.344.325-.686.364-1.036zm-1.194-.179l-.005.064a1.31 1.31 0 01-.202.527 1.403 1.403 0 01-.344.415c-.163.12-.325.246-.48.378l-1.792 1.532a.355.355 0 01-.047-.006.487.487 0 00-.065-.005H14.57l.087-.208a8.028 8.028 0 011.02-1.773c.45-.585.702-.736.702-.736 1.089-.563 1.624-1.517 1.882-1.977v-.001l.08-.135c.044-.075.162-.008.162-.008.056.037.092.18.059.235v.003l-.003.003-1.538 2.605a.613.613 0 00.518.922.596.596 0 00.518-.3l1.538-2.602v-.003l.003-.003a1.33 1.33 0 00.176-.675c.004-.013.01-.023.015-.034a.137.137 0 00.016-.039l.519-2.527c.016-.08.08-.131.193-.134a.42.42 0 01.077.007c.01.002.017.003.02.002a.544.544 0 01.02.156c.026.987-.182 3.853-.216 4.317zM6.51 18.247l-.038.002a.227.227 0 01-.071-.002l-1.793-1.532a9.926 9.926 0 00-.476-.375 1.4 1.4 0 01-.347-.415 1.409 1.409 0 01-.2-.507c-.002-.033-.251-3.33-.223-4.403a1.219 1.219 0 01.01-.149.726.726 0 01.141-.016.172.172 0 01.16.137l.518 2.527c.003.016.01.03.017.043.005.01.01.019.014.03 0 .235.056.467.176.674l.003.003v.003l1.538 2.605c.112.19.313.297.518.297a.606.606 0 00.515-.919l-1.537-2.605-.003-.003v-.002c-.034-.056.003-.2.059-.233.002-.003.12-.07.165.006l.078.137c.255.46.793 1.414 1.877 1.977l.003.002c.028.019.276.184.703.738a7.917 7.917 0 011.02 1.773l.086.207H6.51zm4.361.334l-.425-1.014a9.133 9.133 0 00-1.174-2.042c-.622-.813-1.02-1.037-1.104-1.076-.766-.397-1.166-1.11-1.382-1.494l-.001-.002-.101-.176a1.288 1.288 0 00-1.524-.538l-.305-1.493c-.138-.661-.712-1.098-1.443-1.104-.776.042-1.235.535-1.255 1.348-.026 1.065.188 3.986.225 4.485l.005.066c.036.328.157.67.361 1.017a2.647 2.647 0 00.76.841c.107.083.215.165.319.255l1.479 1.266a1.43 1.43 0 00-.224.767v.712c0 .795.641 1.442 1.428 1.442h3.457c.787 0 1.428-.647 1.428-1.442v-.712a1.44 1.44 0 00-.524-1.106z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareShieldFilled;
