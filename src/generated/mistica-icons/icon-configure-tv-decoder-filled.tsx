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

const IconConfigureTvDecoderFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M14.843 5.347a.84.84 0 01.84.84v.524c.076.02.149.045.222.07l.355-.355a.84.84 0 011.188 0l.734.734a.84.84 0 010 1.187l-.356.356c.025.073.048.146.07.221h.524a.84.84 0 01.84.84v1.037a.84.84 0 01-.84.84h-.524c-.02.076-.045.149-.07.222l.356.355a.887.887 0 01.185.28h1.174a2.15 2.15 0 012.148 2.149v2.02c0 1.184-.96 2.148-2.148 2.148H4.148A2.149 2.149 0 012 16.667v-2.02a2.15 2.15 0 012.151-2.148h6.135a.841.841 0 01.185-.28l.355-.356a5.108 5.108 0 01-.07-.222h-.524a.84.84 0 01-.84-.84V9.765a.84.84 0 01.84-.84h.524c.02-.076.045-.15.07-.222l-.355-.356a.84.84 0 010-1.187l.73-.734a.84.84 0 011.188 0l.356.355c.073-.025.146-.047.221-.07v-.523a.84.84 0 01.84-.84zm3.501 10.622H15.69a.594.594 0 000 1.188h2.655a.594.594 0 000-1.188zm-13.4.135a.457.457 0 100 .913.457.457 0 000-.913zm1.695 0a.457.457 0 100 .913.457.457 0 000-.913zm1.638 0a.457.457 0 100 .913.457.457 0 000-.913zm6.566-9.92h-1.036v1.217c-.485.05-.9.179-1.244.386l-.77-.77-.731.73.77.771c-.202.336-.333.75-.387 1.244H10.23v1.036h1.215c.05.493.182.908.387 1.244l-.77.77.73.734.771-.77c.345.207.762.333 1.244.386v1.216h1.036l-.003-1.216c.485-.05.9-.179 1.244-.386l.77.77.734-.73-.77-.771c.202-.336.333-.75.386-1.244h1.216V9.765h-1.216c-.05-.493-.182-.908-.386-1.244l.773-.773-.734-.731-.77.77c-.345-.207-.762-.333-1.244-.386V6.185zm-.518 2.642c.921 0 1.454.46 1.454 1.454s-.533 1.454-1.454 1.454c-.922 0-1.454-.46-1.454-1.454s.532-1.454 1.454-1.454z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconConfigureTvDecoderFilled;
