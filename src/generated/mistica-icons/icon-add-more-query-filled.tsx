/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconAddMoreQueryFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.199 3.972c.193.549.913 1.022 2.098 1.373 1.25.366 2.89.574 4.641.574s3.393-.208 4.642-.574c1.157-.342 1.868-.799 2.078-1.328 0-.009.009-.017.009-.017-.157-.574-.858-1.059-2.098-1.426C18.328 2.207 16.678 2 14.927 2c-1.75 0-3.4.207-4.65.574-1.176.35-1.896.835-2.087 1.381.005.005.007.007.008.01v.007zm3.428 9.6a.612.612 0 00-.616-.606H8.636v-2.308a.612.612 0 00-.616-.605.61.61 0 00-.617.605v2.308h-2.37a.61.61 0 00-.616.605c0 .334.278.606.617.606h2.37v2.341c0 .334.277.605.616.605a.61.61 0 00.616-.605v-2.341h2.375a.61.61 0 00.616-.606zm1.04-1.188a4.768 4.768 0 00-.49-1.384 4.242 4.242 0 00-.236-.381l-.007-.01a3.474 3.474 0 00-.31-.379l-.033-.034a3.142 3.142 0 00-.28-.263l-.101-.084a3.475 3.475 0 00-.305-.213 2.352 2.352 0 00-.14-.09 3.691 3.691 0 00-.334-.168 5.545 5.545 0 01-.05-.024c-.043-.021-.085-.042-.129-.06a4.443 4.443 0 00-.302-.105l-.073-.024a2.157 2.157 0 00-.213-.067 5.202 5.202 0 00-.454-.09 1.697 1.697 0 01-.09-.017 1.296 1.296 0 00-.126-.022 6.918 6.918 0 00-.86-.061c-.168 0-.42-.003-.42-.003-1.664.014-4.456.638-4.456 4.67 0 1.394.44 4.65 4.507 4.705h.17c.07 0 .135 0 .2-.003.044 0 .095 0 .137-.003a5.975 5.975 0 00.843-.072c.143-.02.28-.045.412-.076.04-.007.082-.017.123-.027l.061-.015c.143-.036.278-.078.41-.126l.034-.011.066-.023a3.73 3.73 0 00.533-.257 4.644 4.644 0 00.282-.177c.054-.036.107-.075.16-.115.053-.04.103-.083.152-.125l.038-.034.035-.03c.034-.03.068-.058.097-.088.255-.25.454-.527.62-.812.545-.953.65-2.026.65-2.684a6.58 6.58 0 00-.01-.322l-.002-.045c0-.015-.002-.03-.003-.044a5.381 5.381 0 00-.036-.372l-.003-.024a7.476 7.476 0 00-.067-.411zm.95-1.244c.43.028.87.045 1.321.045 1.751 0 3.4-.199 4.633-.569 1.233-.367 1.908-.924 2.135-1.344V5.328c-.457.358-1.076.647-1.869.88-1.33.394-3.072.61-4.904.61-1.832 0-3.575-.216-4.905-.61-.81-.233-1.44-.539-1.896-.9v2.384c-.05 0-.101 0-.152-.002h-.277c-1.204.007-5.678.414-5.678 5.879 0 5.473 4.516 5.902 5.72 5.918h.188l.107-.001.103-.001c.05.666.762 1.218 2.134 1.624 1.258.37 2.908.574 4.65.574 1.742 0 3.392-.207 4.642-.574 1.422-.42 2.142-.994 2.142-1.694V15.87c-.481.37-1.12.684-1.868.9-1.322.392-3.064.607-4.905.607-.678 0-1.33-.04-1.96-.098.182-.252.341-.54.484-.854.476.036.966.056 1.473.056 1.751 0 3.401-.207 4.642-.574 1.232-.367 1.907-.925 2.134-1.345v-3.98c-.481.367-1.12.672-1.868.888-1.322.395-3.064.61-4.905.61-.364 0-.722-.011-1.075-.03a6.235 6.235 0 00-.247-.91z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAddMoreQueryFilled;
