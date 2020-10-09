/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant, useTheme} from '../..';

type Props = {
    color?: string;
    size?: number;
};

const IconBuyDataFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.47 18.378c-.5 0-.901.143-1.193.423-.305.294-.46.706-.46 1.23s.155.935.46 1.23c.292.28.695.422 1.194.422.498 0 .902-.142 1.193-.423.305-.294.46-.705.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423zm5.463 0c-.502 0-.902.143-1.194.423-.305.294-.459.706-.459 1.23s.154.935.46 1.23c.29.28.694.422 1.193.422.498 0 .902-.142 1.193-.423.303-.294.46-.705.46-1.23 0-.523-.155-.935-.46-1.229-.291-.28-.692-.423-1.193-.423zm5.613-11.53a.557.557 0 00-.442-.215h-3.401v-1.19c0-.477-.42-.846-1.252-1.096-.653-.196-1.515-.305-2.423-.305-.908 0-1.77.11-2.423.305-.832.25-1.252.62-1.252 1.096v1.19H7.098c-.216-1.255-.39-2.25-.44-2.521-.218-1.218-1.367-2.1-2.736-2.1h-1.35a.562.562 0 00-.56.56c0 .308.251.56.56.56h1.352c.813 0 1.513.507 1.633 1.176a1671.9 1671.9 0 011.636 9.527c.163 1.025.544 1.829 1.138 2.389.565.535 1.31.815 2.148.815h6.255c.829 0 1.532-.283 2.092-.84.53-.53.916-1.286 1.182-2.308.118-.457.507-2.017.883-3.53.31-1.243.602-2.42.756-3.028a.565.565 0 00-.1-.484zm-9.532-1.744c.555-.143 1.269-.222 2.011-.222.742 0 1.457.079 2.011.222.513.131.72.271.796.339l-.003.002-.003.003-.008.006-.003.003a.155.155 0 01-.022.016l-.003.003-.011.009-.003.002-.011.009-.006.003-.011.008-.003.003a.234.234 0 00-.034.022l-.005.003-.014.008-.009.003-.014.009-.008.005-.017.009-.005.002-.023.012-.005.002-.02.012-.008.005-.017.009-.011.005-.017-.003-.011.006-.023.008-.008.003-.034.014-.011.003-.025.008-.014.006-.023.008-.014.006-.025.008-.014.006-.03.011-.012.003-.042.014-.014.006-.03.008-.018.006-.03.008-.02.006-.034.008-.016.006-.054.014c-.554.143-1.269.221-2.01.221-.743 0-1.457-.078-2.012-.221l-.053-.014-.017-.006-.034-.008-.02-.006-.03-.008-.017-.006-.03-.008-.015-.006-.042-.014-.01-.003-.032-.01-.014-.007-.025-.008-.014-.006-.022-.008-.014-.006-.026-.008-.01-.003-.034-.014-.009-.003-.022-.008-.011-.006-.017-.008-.011-.006-.017-.008-.009-.006-.02-.008-.005-.003-.025-.011-.006-.003-.016-.008-.009-.006-.014-.008-.008-.003-.014-.008-.006-.003c-.011-.009-.025-.014-.034-.023L11.3 5.5l-.012-.009-.005-.003-.011-.008-.003-.003-.011-.008-.003-.003-.023-.017-.002-.003-.009-.005-.003-.003-.002-.003c.078-.061.285-.199.798-.33zm4.849 8.126c-.037.042-.213.21-.827.37-.554.142-1.269.22-2.01.22-.743 0-1.457-.078-2.012-.22-.613-.157-.787-.326-.826-.37v-1.628l.01.006c.023.011.048.02.07.028l.023.008.09.034.011.003c.028.01.056.02.084.028l.025.008c.034.011.065.022.098.03.653.197 1.516.306 2.423.306.908 0 1.773-.106 2.426-.302.034-.012.067-.02.098-.031l.025-.009c.028-.008.056-.02.084-.028l.012-.002c.03-.012.058-.023.09-.034l.022-.008c.025-.009.047-.02.07-.028l.01-.006.004 1.625zm0-2.605l-.006.005-.003.003v.003l-.005.005-.003.003-.006.006-.003.003-.005.005-.003.003-.006.006-.002.002-.006.006-.006.003-.008.005-.006.003-.008.006-.006.003-.008.005-.006.006-.008.005-.008.006-.009.006-.008.005-.011.006-.009.005-.011.006-.008.006-.012.005-.01.006-.012.005-.011.006-.014.006-.014.005-.014.006-.014.005-.014.006-.014.008-.014.006-.017.008-.017.006-.017.008-.016.006-.02.009-.017.005-.02.009-.02.005-.022.009-.02.008-.022.008-.02.009-.022.008-.02.006-.024.008-.028.009-.028.008-.026.008-.028.009-.033.008-.023.006-.056.014c-.554.143-1.269.221-2.01.221-.743 0-1.457-.078-2.012-.221l-.056-.014-.022-.006-.034-.008-.028-.009-.025-.008-.028-.008-.023-.006-.025-.008-.02-.006-.022-.008-.02-.009-.022-.008-.02-.009-.022-.008-.02-.006-.02-.008-.016-.006-.02-.008-.016-.006-.017-.008-.017-.006-.017-.008-.014-.006-.014-.008-.014-.006-.014-.005-.014-.006-.014-.006-.014-.005-.011-.006-.011-.005-.011-.006-.012-.006-.01-.005-.012-.006-.009-.005-.01-.006-.01-.006-.01-.005-.009-.006-.008-.005-.006-.006-.008-.006-.006-.002-.008-.006-.006-.003-.008-.005-.003-.003-.006-.006-.002-.003-.006-.005-.003-.003-.005-.006-.003-.002-.006-.006-.003-.003-.005-.005v-.003l-.003-.003-.003-.003-.003-.003v-1.63l.012.006a.6.6 0 00.07.028l.022.008.09.034.01.003c.029.01.057.02.085.028l.025.008c.034.011.065.022.098.03.653.197 1.516.306 2.426.306.91 0 1.767-.106 2.42-.302.034-.012.067-.02.098-.031l.025-.009c.028-.008.056-.02.084-.028l.012-.002c.03-.012.058-.023.09-.034l.022-.008c.025-.009.047-.02.07-.028l.01-.006.004 1.625zm0-2.605l-.006.005-.003.003v.003l-.005.005-.003.003-.006.006-.003.003-.005.005-.003.003-.006.006-.002.002-.006.006-.006.003-.008.005-.006.003-.008.006-.006.003-.008.005-.006.006-.008.005-.008.006-.009.006-.008.005-.011.006-.009.005-.011.006-.008.006-.012.005-.01.006-.012.005-.011.006-.014.006-.014.005-.014.006-.014.005-.014.006-.014.008-.014.006-.017.008-.017.006-.017.008-.016.006-.02.008-.017.006-.02.008-.02.006-.022.008-.02.009-.022.008-.02.009-.022.008-.02.006-.024.008-.023.006-.028.008-.025.009-.028.008-.034.008-.022.006-.056.014c-.555.143-1.269.221-2.011.221-.743 0-1.457-.078-2.011-.221l-.056-.014-.023-.006-.033-.008-.028-.008-.026-.009-.028-.008-.022-.006-.025-.008-.02-.006-.022-.008-.02-.009-.022-.008-.02-.009-.022-.008-.02-.006-.02-.008-.016-.006-.02-.008-.017-.006-.017-.008-.016-.006-.017-.008-.014-.006-.014-.008-.014-.006-.014-.005-.014-.006-.014-.005-.014-.006-.011-.006-.012-.005-.01-.006-.012-.005-.011-.006-.012-.006-.008-.005-.011-.006-.009-.005-.01-.006-.01-.006-.008-.005-.005-.006-.009-.005-.005-.003-.009-.006-.005-.003-.009-.005-.002-.003-.006-.006-.003-.002-.005-.006-.003-.003-.006-.005-.003-.003-.005-.006-.003-.003-.006-.005v-.003l-.002-.003-.003-.003-.003-.002V6.39l.011.005c.023.008.048.02.07.028l.023.008c.028.012.059.023.09.034l.01.003c.029.011.057.02.085.028l.025.008c.033.011.064.023.098.031.652.196 1.515.305 2.426.305.91 0 1.77-.109 2.423-.305l.098-.03.025-.01.084-.027.011-.003.09-.034.022-.008c.025-.008.048-.02.07-.028l.011-.006-.005 1.63z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBuyDataFilled;
