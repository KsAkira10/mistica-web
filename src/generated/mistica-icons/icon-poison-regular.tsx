/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconPoisonRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M16.733 6.72c1.185.583 1.83 1.768 1.83 3.398l-.01 7.924c0 2.381-1.408 3.804-3.764 3.804H9.223c-1.16 0-2.081-.325-2.745-.969-.689-.67-1.039-1.622-1.039-2.835v-7.924c0-1.213.35-2.165 1.048-2.835.21-.204.456-.367.72-.507a1.412 1.412 0 01-.029-.269V3.583c0-.784.636-1.42 1.418-1.42h6.742c.782 0 1.418.639 1.418 1.42v2.924c0 .073-.012.143-.023.213zm-8.361-.215c0 .123.098.224.221.224h6.742a.223.223 0 00.222-.224V3.58a.22.22 0 00-.222-.221H8.593c-.12 0-.221.1-.221.221v2.925zm8.756 12.829H6.868c.109.266.252.498.44.683.433.42 1.075.633 1.912.633h5.57v-.003c1.204 0 1.98-.448 2.338-1.313zm.163-9.997c-.157-.796-.575-1.334-1.25-1.603-.207.12-.448.196-.706.196H8.593c-.238 0-.462-.064-.658-.17a2.07 2.07 0 00-.625.389c-.302.291-.496.697-.597 1.188h10.578zm-10.656 8.75a.506.506 0 01.003.048h10.714c0-.016.002-.03.003-.045l.003-.045.008-7.507H6.632v7.504l.003.045zM8.809 5.575a.598.598 0 101.193 0V4.533a.6.6 0 00-.597-.6.6.6 0 00-.596.6v1.042zm2.305.6a.598.598 0 01-.597-.6V4.533a.598.598 0 111.193 0v1.042c0 .33-.265.6-.596.6zm1.11-.6a.598.598 0 101.193 0V4.533a.6.6 0 00-.597-.6.6.6 0 00-.597.6v1.042zm2.302.6a.598.598 0 01-.597-.6V4.533a.6.6 0 01.597-.6c.33 0 .596.27.596.6v1.042c.003.33-.266.6-.596.6zm-.07 7.904c0-2.188-1.647-2.462-2.353-2.48-.081-.002-.168-.002-.25-.002h-.014c-.694.003-2.313.252-2.313 2.465 0 .997.33 1.703.977 2.104l.19.117v.432c0 .148.032.249.096.305.073.067.196.098.359.098h1.694c.115 0 .266-.017.353-.095.079-.07.093-.207.093-.308v-.434l.187-.115c.65-.404.98-1.107.98-2.087zm-2.328-3.277c.515.01 3.126.224 3.126 3.277 0 1.431-.596 2.215-1.168 2.639 0 .481-.193.756-.356.899-.218.198-.518.302-.888.302h-1.694c-.373 0-.673-.104-.891-.305-.16-.14-.359-.418-.359-.894-.571-.42-1.168-1.207-1.168-2.655 0-3.093 2.588-3.263 3.107-3.266a.68.68 0 01.21-.004c.026.003.053.006.081.007zm-.835 4.15a.399.399 0 00.283-.684l-.232-.231.232-.233a.404.404 0 000-.566.396.396 0 00-.563 0l-.232.233-.233-.232a.396.396 0 00-.563 0 .404.404 0 000 .565l.233.233-.233.232a.404.404 0 000 .566.397.397 0 00.563 0l.233-.232.232.232a.39.39 0 00.28.118zm2.502-.915l.232.232a.404.404 0 010 .566.397.397 0 01-.563 0l-.232-.232-.233.232a.397.397 0 01-.563 0 .404.404 0 010-.566l.233-.232-.233-.233a.404.404 0 010-.566.396.396 0 01.563 0l.233.233.232-.232a.396.396 0 01.563 0 .404.404 0 010 .565l-.232.233zm-1.11 1.655l-.12-.283a.395.395 0 00-.518-.213.21.21 0 00-.054.035l-.016.013a.524.524 0 01-.017-.013c-.016-.013-.032-.026-.053-.034a.396.396 0 00-.521.212l-.12.283a.4.4 0 00.363.555.392.392 0 00.345-.219.392.392 0 00.501.188.4.4 0 00.21-.524z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPoisonRegular;
