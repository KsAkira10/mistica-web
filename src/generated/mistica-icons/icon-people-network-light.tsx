/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPeopleNetworkLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.176 14.98a.371.371 0 00-.52-.088.372.372 0 00-.087.52 3.708 3.708 0 01-.404 4.76c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.836-1.856-1.855-1.856-1.02 0-1.855.836-1.855 1.856 0 .528.227 1.004.583 1.344-.775.308-1.28.916-1.327 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.699-3.7.204 0 .372-.16.372-.372a.364.364 0 00-.372-.372c-.268 0-.536.024-.792.072a.113.113 0 01-.009-.028.114.114 0 00-.007-.028l-1.895-3.28A4.445 4.445 0 0011.98 2C9.545 2 7.554 3.992 7.554 6.444c0 1.368.624 2.592 1.595 3.408l-1.895 3.28a.092.092 0 00-.009.028l-.007.028A4.436 4.436 0 002 17.556 4.444 4.444 0 006.446 22a4.452 4.452 0 004.427-4.072h2.259A4.44 4.44 0 0017.558 22 4.446 4.446 0 0022 17.556a4.477 4.477 0 00-.824-2.576zM10.888 6.072a1.11 1.11 0 011.108-1.108c.608 0 1.108.504 1.108 1.108a1.11 1.11 0 01-1.108 1.108 1.103 1.103 0 01-1.108-1.108zm1.108 4.084c.688 0 1.335-.196 1.887-.528V9.2c0-.736-.795-1.272-1.887-1.272-1.08 0-1.863.536-1.863 1.272v.444a3.637 3.637 0 001.863.512zM8.297 6.444c0-2.04 1.66-3.7 3.699-3.7a3.703 3.703 0 012.615 6.316c-.056-.736-.568-1.336-1.352-1.644.356-.34.576-.808.576-1.336 0-1.02-.835-1.856-1.855-1.856s-1.855.836-1.855 1.856c0 .528.228 1.004.584 1.344-.76.3-1.264.908-1.312 1.652a3.707 3.707 0 01-1.1-2.632zM12 10.892c-.82 0-1.587-.228-2.243-.616l-1.791 3.108a4.42 4.42 0 012.907 3.796h2.259a4.452 4.452 0 012.906-3.796l-1.795-3.108a4.43 4.43 0 01-2.243.616zm-7.425 9.86v-.444c0-.736.784-1.272 1.863-1.272 1.092 0 1.887.536 1.887 1.272v.428a3.655 3.655 0 01-1.887.528 3.761 3.761 0 01-1.863-.512zm1.867-4.676a1.11 1.11 0 00-1.107 1.108c0 .612.503 1.108 1.107 1.108s1.108-.504 1.108-1.108c0-.604-.504-1.108-1.108-1.108zm2.627 4.096c-.056-.736-.568-1.336-1.351-1.644.356-.34.575-.808.575-1.336 0-1.02-.835-1.856-1.855-1.856a1.846 1.846 0 00-1.263 3.192c-.776.308-1.28.916-1.328 1.66a3.69 3.69 0 01-1.1-2.632c0-2.04 1.66-3.7 3.7-3.7a3.704 3.704 0 012.622 6.316zm8.48-4.096a1.11 1.11 0 00-1.107 1.108c0 .612.504 1.108 1.108 1.108.604 0 1.107-.504 1.107-1.108 0-.604-.503-1.108-1.107-1.108zm-1.858 4.676v-.444c0-.736.783-1.272 1.863-1.272 1.091 0 1.887.536 1.887 1.272v.428a3.66 3.66 0 01-1.887.528 3.693 3.693 0 01-1.863-.512zm3.714-6.16a.736.736 0 100-1.472.736.736 0 000 1.472z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.997 6.582c-.698 0-1.241-.185-1.617-.546-.392-.378-.59-.936-.59-1.664 0-.728.198-1.289.59-1.667.376-.364.92-.549 1.617-.549s1.243.185 1.621.55c.393.377.591.94.591 1.666 0 .725-.198 1.286-.59 1.664-.379.361-.925.546-1.622.546zm-1.04-3.277c-.224.215-.336.574-.336 1.067s.112.849.334 1.064c.215.208.565.314 1.042.314.476 0 .826-.106 1.044-.314.224-.213.336-.571.336-1.061 0-.493-.114-.852-.338-1.067-.219-.21-.569-.317-1.042-.317-.474 0-.824.106-1.04.314zM8.91 10.162v-.154c0-.336.067-.815.4-1.16.37-.384.933-.465 1.342-.465h2.695c.406 0 .972.079 1.341.465.334.347.404.824.404 1.16v.154H8.91zm-.583.835a.253.253 0 01-.252-.252v-.737c0-.703.219-1.306.633-1.737.451-.47 1.123-.72 1.941-.72h2.695c.818 0 1.49.25 1.944.72.415.434.636 1.034.636 1.737v.737a.254.254 0 01-.25.252H8.328zm-3.622 4.22c0-.492.112-.85.334-1.066.215-.208.565-.314 1.042-.311.473 0 .823.106 1.042.316.224.216.336.574.336 1.065 0 .49-.112.846-.336 1.061-.216.21-.566.314-1.042.314-.477 0-.827-.106-1.042-.314-.222-.215-.334-.571-.334-1.064zm1.373 2.211c-.698 0-1.241-.185-1.62-.546-.391-.378-.587-.936-.587-1.664 0-.726.198-1.286.588-1.664.375-.364.921-.549 1.619-.549.697 0 1.244.185 1.619.549.392.378.59.941.59 1.667 0 .725-.198 1.285-.59 1.663-.375.36-.919.544-1.62.544zm3.095 3.426v.154s-6.182 0-6.18.003v-.154c0-.34.068-.813.401-1.16.364-.384.93-.465 1.34-.465h2.691c.41 0 .975.081 1.345.465.333.344.403.82.403 1.157zm-1.748-2.457c.82 0 1.493.25 1.944.72.418.434.636 1.036.636 1.737v.736c0 .14-.112.253-.252.253H2.408a.251.251 0 01-.252-.253v-.736c0-.703.219-1.303.633-1.737.451-.47 1.124-.723 1.941-.723l2.695.003zm9.118-3.185c0-.493.112-.851.333-1.067.216-.207.566-.314 1.04-.314.476 0 .826.107 1.044.314.224.219.336.574.336 1.067 0 .49-.112.846-.336 1.062-.218.207-.569.314-1.045.314-.473 0-.823-.107-1.039-.314-.221-.213-.333-.569-.333-1.062zm-.247 1.664c-.392-.378-.588-.935-.588-1.664 0-.728.196-1.288.588-1.666.376-.364.922-.55 1.617-.55.697 0 1.243.185 1.621.55.395.378.591.938.591 1.666 0 .726-.198 1.286-.59 1.664-.379.361-.922.546-1.622.546-.695 0-1.241-.184-1.617-.546zm4.715 3.972v.157h-6.18v-.154c0-.339.068-.812.4-1.16.368-.383.93-.465 1.34-.465h2.692c.409 0 .974.082 1.344.465.334.345.404.821.404 1.157zm.193-1.737c.417.435.639 1.034.639 1.737v.737c0 .14-.113.252-.253.252h-7.344a.251.251 0 01-.252-.252v-.737c0-.703.218-1.305.633-1.737.45-.47 1.123-.72 1.941-.72h2.695c.818 0 1.49.25 1.94.72zm-7.297-2.585a.418.418 0 00.437-.711l-1.941-1.188v-2.258a.418.418 0 00-.835 0v2.258l-1.944 1.19a.414.414 0 00-.137.572.414.414 0 00.571.137l1.925-1.176 1.924 1.176z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPeopleNetworkLight;
