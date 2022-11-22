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

const IconPenRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.37 5.633l-1.456 1.453-2.033-2.03 1.455-1.453a.842.842 0 011.154 0l.88.878a.815.815 0 010 1.152zM8.411 17.57l-2.033-2.03 9.535-9.518 2.033 2.03-9.535 9.518zM4.35 19.624L5.504 16.6l1.865 1.863-3.02 1.161zm16.988-16.11l-.879-.877A2.17 2.17 0 0018.914 2c-.585 0-1.134.226-1.546.637L4.443 15.542 1.976 22l6.435-2.496L21.337 6.599a2.18 2.18 0 000-3.085z"
                    fill={fillColor}
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M15.533 3.107a3.79 3.79 0 015.364 5.353L9.157 20.205a.728.728 0 01-.388.2l-5.856 1.572a.723.723 0 01-.888-.884l1.588-5.926a.71.71 0 01.228-.364L15.533 3.107zM4.681 16.751l-.936 3.505 3.5-.94-2.564-2.565zm3.964 1.916l9.992-9.994-3.312-3.313-9.992 9.994 3.312 3.313zM19.657 7.652l.212-.212c.912-.912.912-2.4 0-3.312a2.346 2.346 0 00-3.312 0l-.212.212 3.312 3.312z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    d="M20.342 3.399c.084.081.168.165.249.249 1.339 1.39 2.011 3.622-.115 5.731L9.232 20.556a.12.12 0 01-.01.008.122.122 0 00-.01.008l-.003.006a.039.039 0 01-.005.006.255.255 0 01-.06.041l-.03.017-.021.014-.015.009a.594.594 0 01-.305.095.037.037 0 01-.015-.003.055.055 0 00-.016-.003l-5.868 1.079a.622.622 0 01-.532-.16.592.592 0 01-.18-.524l.942-6.1a.324.324 0 01.016-.05l.012-.035a.606.606 0 01.02-.067.528.528 0 01.122-.179l11.309-11.19c2.154-2.132 4.386-1.463 5.759-.13zM18.944 9.19l.666-.663c1.85-1.83.687-3.44.104-4.048-.067-.07-.148-.151-.221-.224-.6-.58-2.185-1.726-4.048.12l-.683.678 4.182 4.137zM4.639 20.284l-.967-.958-.182 1.168 1.149-.21zm1.61-3.473l9.336-9.239-1.683-1.666-9.34 9.238L6.25 16.81zM3.9 17.85l2.19 2.168 1.415-.26L4.12 16.41l-.22 1.44zm4.871 1.456s9.314-9.26 9.311-9.26l-1.639-1.622-9.336 9.238 1.664 1.644z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconPenRegular;
