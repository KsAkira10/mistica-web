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

const IconAddMoreQueryRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.538 16.521a.607.607 0 01-.608.605.607.607 0 01-.608-.605v-2.336H4.978a.607.607 0 01-.608-.605c0-.334.271-.605.608-.605h2.344v-2.303a.607.607 0 011.216 0v2.303h2.35c.336 0 .608.271.608.605a.607.607 0 01-.608.605h-2.35v2.336zM18.703 20c.804-.24 1.765-.667 1.765-1.328v-2.806a5.888 5.888 0 01-1.406.619c-1.202.358-2.776.554-4.429.554-.501 0-1.008-.02-1.501-.056-.034-.003-.062-.02-.093-.025-.994 1.655-2.678 2.23-3.837 2.42.257.202.67.42 1.341.62 1.098.324 2.547.503 4.079.503 1.532.006 2.983-.173 4.081-.501zM3.218 13.577c0 1.392.435 4.639 4.457 4.695h.168c.115 0 .233 0 .333-.003 4.031-.073 4.465-3.283 4.465-4.661 0-1.378-.437-4.591-4.493-4.686a19.401 19.401 0 00-.414-.006h-.11c-1.644.017-4.406.641-4.406 4.661zm7.325-9.838c-.93.278-1.51.648-1.689 1.045.168.404.762.779 1.7 1.06 1.09.324 2.538.503 4.076.503 1.54 0 2.989-.179 4.079-.504.927-.277 1.52-.647 1.697-1.045-.216-.512-1.014-.857-1.706-1.061-1.09-.325-2.54-.505-4.081-.505-1.538.003-2.986.183-4.076.507zm3.2 8.516c.07.417.12.86.12 1.358a7.3 7.3 0 01-.314 2.19c1.882.11 3.815-.066 5.165-.47 1-.297 1.555-.748 1.757-1.072v-3.143a5.843 5.843 0 01-1.407.619c-1.201.358-2.773.554-4.428.554a12.856 12.856 0 01-.894-.036zM8.778 7.61c0 .05-.017.095-.028.145 1.285.14 3.694.745 4.675 3.283a.587.587 0 01.221-.003c.272.045.72.045.986.045 1.538 0 2.986-.179 4.078-.504 1.003-.3 1.558-.748 1.757-1.073V6.406a6.13 6.13 0 01-1.406.597c-1.2.358-2.773.557-4.429.557-1.655 0-3.227-.196-4.429-.557a5.891 5.891 0 01-1.425-.614v1.222zm10.274-5.028c1.748.52 2.633 1.358 2.633 2.484v13.605c0 1.126-.885 1.964-2.633 2.485-1.21.358-2.784.554-4.431.554-1.647 0-3.219-.196-4.429-.554-1.277-.381-2.073-.913-2.431-1.63-.008-.014-.006-.034-.011-.048h-.093C6.468 19.462 2 19.034 2 13.574 2 8.171 6.347 7.725 7.583 7.71c-.006-.034-.023-.065-.023-.101v-2.54c0-.183.025-.36.073-.53v-.003c.252-.866 1.112-1.521 2.557-1.955 1.202-.359 2.776-.555 4.429-.555 1.658.003 3.233.2 4.434.558z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreQueryRegular;
