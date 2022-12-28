/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBuyDataFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.269 6.788a.557.557 0 01.543.7l-.404 1.616-.004.015-.348 1.397a687.207 687.207 0 01-.883 3.53c-.266 1.022-.652 1.778-1.182 2.308-.56.557-1.263.84-2.092.84h-6.255c-.838 0-1.583-.28-2.148-.815-.594-.56-.975-1.364-1.138-2.39-.14-.89-1.484-8.68-1.636-9.526-.12-.67-.82-1.176-1.633-1.176H2.736a.562.562 0 01-.56-.56c0-.309.252-.56.56-.56h1.35c1.37 0 2.519.882 2.737 2.1.05.272.224 1.266.44 2.521h3.255v-1.19c0-.477.42-.846 1.252-1.096.653-.196 1.516-.305 2.423-.305.908 0 1.77.11 2.423.305.832.25 1.252.62 1.252 1.096v1.19h3.4zM10.636 18.533c-.502 0-.902.143-1.194.423-.305.294-.459.706-.459 1.23 0 .523.154.935.46 1.23.29.28.694.422 1.193.422.498 0 .902-.143 1.193-.423.305-.294.46-.706.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423zm5.462 0c-.502 0-.902.143-1.193.423-.306.294-.46.706-.46 1.23 0 .523.154.935.46 1.23.29.28.694.422 1.193.422.498 0 .902-.143 1.193-.423.303-.294.46-.706.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423zM12.179 5.26c-.513.131-.72.269-.798.33l.005.006.009.005.003.003a.153.153 0 01.01.009l.012.008.003.003.01.008.004.003.01.008.007.003.01.009.003.002a.093.093 0 00.02.013l.014.01.006.003.014.008.008.003.014.008.009.006.022.011.025.011.006.003.02.008.008.006.056.028.022.008.009.003.033.014.011.003.026.008.014.006.022.008.014.006.025.008.014.006.031.011.011.003.042.014.014.006.031.008.017.006.03.008.02.006.034.008.017.006.053.014c.555.143 1.269.221 2.011.221.742 0 1.457-.078 2.011-.221l.054-.014.016-.006.034-.008.02-.006.03-.008.017-.006.031-.008.014-.006.042-.014.011-.003.031-.011.014-.006.025-.008.014-.006.023-.008.014-.006.025-.008.011-.003.034-.014.008-.003.023-.008.01-.006.018.003.028-.014.008-.005.02-.012.05-.025.008-.005.015-.009.008-.003.014-.008.006-.003a.234.234 0 01.033-.022l.003-.003.011-.008.006-.003.01-.009.004-.002.01-.009.004-.003a.155.155 0 00.022-.016l.003-.003.008-.006.006-.005c-.076-.068-.283-.208-.796-.34-.554-.142-1.269-.22-2.01-.22-.743 0-1.457.078-2.012.22zm4.022 8.495c.614-.16.79-.327.827-.37l-.003-1.624-.011.006-.028.011a.505.505 0 01-.042.017l-.023.008-.044.017-.045.017-.012.002-.042.014a.984.984 0 01-.042.014l-.025.009-.054.017a1.14 1.14 0 00-.044.014c-.652.196-1.518.302-2.426.302-.907 0-1.77-.11-2.422-.305a.991.991 0 01-.079-.024l-.02-.007-.025-.008c-.028-.009-.056-.017-.084-.028l-.011-.003-.09-.034-.022-.008-.015-.005c-.018-.007-.037-.014-.055-.023l-.011-.006v1.628c.039.045.213.213.826.37.555.142 1.269.22 2.011.22.742 0 1.457-.078 2.011-.22zm.827-2.974l-.003-1.625-.011.006-.028.011a.543.543 0 01-.042.017l-.023.008-.044.017-.045.017-.012.002-.042.014-.042.014-.025.009-.054.017-.044.014c-.652.196-1.51.302-2.42.302-.91 0-1.773-.11-2.426-.305a1.007 1.007 0 01-.078-.024l-.02-.007-.025-.008c-.028-.009-.056-.017-.084-.028l-.011-.003a3.227 3.227 0 01-.09-.034l-.022-.008-.015-.006a.54.54 0 01-.055-.022l-.012-.006v1.63l.009.009v.003l.042.042.008.005.006.003.008.006.006.002.008.006.006.006.017.01.011.006.008.006.012.006.008.005.067.034.07.028.014.008.014.006.017.008.017.006.017.008.016.006.02.008.017.006.02.008.02.006.021.008.02.009.023.008.02.008.021.009.02.005.025.009.023.005.028.009.025.008.028.009.112.028c.555.143 1.269.221 2.011.221.742 0 1.457-.078 2.011-.221l.113-.028.027-.009.026-.008.056-.017.025-.008.02-.006.022-.008.02-.009.022-.008.02-.008.022-.009.02-.005.02-.009.016-.005.02-.009.016-.005.017-.009.017-.005.017-.009.014-.006.014-.008.07-.028.045-.022.008-.006.011-.005.009-.006.01-.006.035-.022.005-.006.009-.005.005-.003.008-.006.006-.003.008-.005.006-.003.04-.04v-.002l.008-.008zm0-2.605l.005-1.63-.01.005-.029.011a.543.543 0 01-.042.017l-.022.008-.045.017-.045.017-.011.003-.042.014-.042.014-.025.008-.055.017-.043.014c-.653.196-1.513.305-2.423.305-.91 0-1.774-.109-2.426-.305a1.007 1.007 0 01-.078-.024 3.346 3.346 0 00-.02-.007l-.025-.008c-.028-.009-.056-.017-.084-.028l-.012-.003a3.227 3.227 0 01-.09-.034l-.022-.008-.035-.014-.035-.014-.01-.006v1.63l.008.009v.003l.042.042.008.005.005.003.009.006.006.003.008.005.005.006.017.011.012.006.008.005.011.006.009.005.067.034.07.028.014.008.014.006.017.008.016.006.017.008.017.006.02.008.016.006.02.008.02.006.022.008.02.009.022.008.02.009.022.008.02.006.025.008.022.006.028.008.026.009.028.008.112.028c.554.143 1.268.221 2.01.221.743 0 1.457-.078 2.012-.221l.112-.028.028-.008.025-.009.028-.008.023-.006.025-.008.02-.006.022-.008.02-.009.022-.008.02-.009.022-.008.02-.006.02-.008.016-.006.02-.008.016-.006.017-.008.017-.006.017-.008.014-.006.014-.008.07-.028.045-.022.008-.006.011-.006.009-.005.01-.006.035-.022.005-.006.009-.005.005-.003.008-.006.006-.003.008-.005.006-.003.04-.04v-.002l.008-.008z"
            />
        </svg>
    );
};

export default IconBuyDataFilled;
