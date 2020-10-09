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

const IconHardDiskFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M11.843 8.96c.927 0 .927-.389.927-.554 0-.165 0-.557-.927-.557s-.927.39-.927.557c0 .168 0 .555.927.555zm0-1.935c1.577 0 1.748.964 1.748 1.378 0 .415-.17 1.378-1.748 1.378-1.577 0-1.745-.963-1.745-1.378 0-.414.168-1.378 1.745-1.378zM5.91 4.605c-.484 0-.764-.176-.764-.552 0-.378.283-.554.764-.554.482 0 .765.176.765.554 0 .376-.28.552-.765.552zm11.48-1.106c.481 0 .764.176.764.554 0 .376-.283.552-.765.552-.484 0-.764-.176-.764-.552-.003-.378.28-.554.764-.554zm.873 9.593c0-.378.283-.554.765-.554.482 0 .765.176.765.554 0 .376-.283.552-.765.552-.485.003-.765-.176-.765-.552zm-6.42-1.504c4.639 0 4.639-2.395 4.639-3.182 0-.787 0-3.185-4.639-3.185S7.204 7.62 7.204 8.406c0 .434.065.832.19 1.174.004.003 0 .008.004.011.52-.207.991-.28 1.297-.078a.756.756 0 01.347.59c.022.267-.09.589-.275.925l.023.011c.759.364 1.787.55 3.053.55zm0-7.602c5.107 0 5.868 2.767 5.868 4.417s-.761 4.415-5.868 4.415c-1.45 0-2.658-.224-3.583-.67l-.15-.075c-.018-.009-.029-.025-.046-.037a15.868 15.868 0 01-1.442 1.527c-.353.325-.765.487-1.19.487-.348 0-.707-.109-1.048-.33-.518-.34-.656-.714-.675-.97-.02-.249.044-.627.473-1.019.02-.017 1.04-.913 2.143-1.591-.03-.045-.067-.084-.087-.14a4.628 4.628 0 01-.266-1.6c.003-1.647.765-4.414 5.871-4.414zm8.591 10.359c.095 0 .188.014.275.033l-1.387-11.02c-.056-.296-.274-.52-.527-.52L4.894 2.82a.434.434 0 00-.432.434L2.98 14.375c.09-.02.182-.033.275-.033h17.18v.003zm-2.126 4.988c.678 0 1.098-.42 1.098-1.1 0-.678-.42-1.101-1.098-1.101-.678 0-1.098.42-1.098 1.1 0 .678.42 1.101 1.098 1.101zm3.375-3.773c0 .014.003.025.003.04v4.829c0 .691-.56 1.257-1.252 1.257H3.252A1.255 1.255 0 012 20.43V15.6c0-.025.006-.044.006-.07 0-.016-.003-.03-.003-.047L3.64 3.202C3.64 2.566 4.2 2 4.891 2l13.902.017c.655 0 1.204.498 1.336 1.215l1.524 12.101c.01.045.014.093.016.138l.009.078c.005.003.005.008.005.011z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHardDiskFilled;
