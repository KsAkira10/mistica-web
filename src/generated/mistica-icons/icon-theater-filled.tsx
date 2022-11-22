/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTheaterFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M21.841 9.957a.425.425 0 00-.233-.381.422.422 0 00-.442.042c-1.067.815-3.011.72-4.003.338-.96-.37-2.574-1.795-2.748-2.932a.42.42 0 00-.313-.345.41.41 0 00-.437.154c-.023.028-.44.591-.964 1.426-.79-2.151-1.69-3.403-1.74-3.47a.415.415 0 00-.403-.169.416.416 0 00-.333.283c-.496 1.499-1.933 2.28-3.05 2.67-.662.23-2.603.372-4.393-.661a.412.412 0 00-.417 0 .428.428 0 00-.21.364v.008c0 .237-.004 3.751.933 6.266.997 2.67 2.549 3.986 4.72 3.986.576 0 1.201-.092 1.868-.28a11.748 11.748 0 001.445-.501c.54.865 1.41 1.535 2.678 2.022.964.373 1.83.605 2.62.605 1.576 0 2.848-.93 3.988-3.549 1.403-3.218 1.434-5.77 1.434-5.877zm-9.252.873c.863 3.785-.325 4.827-3.137 5.614-2.748.765-4.468-.216-5.58-3.19-.656-1.76-.82-4.127-.863-5.28 1.782.786 3.62.686 4.443.4 1.52-.532 2.622-1.37 3.235-2.448.507.868 1.373 2.585 1.902 4.905zm-3.412.35c-.622 0-.902-.364-.991-.52-.143-.247-.247-.656.07-1.216.593-1.05 1.397-1.207 1.82-1.207.499 0 .88.201 1.034.294.437.238.557.596.588.792.084.51-.224.863-.32.958a1.197 1.197 0 01-.089.079 4.786 4.786 0 01-1.003.566c-.294.114-.722.255-1.109.255zm0-.842c.213 0 .516-.082.796-.197.437-.173.81-.456.81-.456s.248-.25-.099-.423c0 0-.26-.182-.61-.182-.328 0-.737.16-1.09.781-.199.35-.07.476.193.476zm-2.185 1.574a5.16 5.16 0 01-1.087.257c-.176.02-.347.031-.506.031-.74 0-1.208-.24-1.387-.714-.078-.202-.19-.723.398-1.255.498-.448 1.025-.675 1.566-.675.599 0 1.09.297 1.352.571.264.247.393.572.359.902-.045.415-.336.706-.594.84l-.1.043zm-1.182-.583c.46-.05.894-.21.894-.21s.305-.162.033-.39c0 0-.285-.33-.761-.33-.278 0-.617.11-1.006.46-.415.37-.064.495.429.495.131 0 .274-.008.411-.025zm5.871.62a.427.427 0 01.306.29c.01.034.238.846-.233 1.692-.392.706-1.131 1.216-2.196 1.516a4.83 4.83 0 01-1.291.193c-1.988 0-2.641-1.553-2.66-1.599a.426.426 0 01.058-.415.415.415 0 01.386-.16c3.448.451 5.21-1.378 5.227-1.397a.42.42 0 01.403-.12zm-.66 1.573c.053-.092.089-.184.117-.274-.79.52-2.202 1.199-4.213 1.132.437.327 1.19.59 2.406.254.843-.235 1.412-.61 1.69-1.112zm8.756-.764c.16.24.176.51.047.745-.14.252-.428.423-.767.454a1.095 1.095 0 01-.081.002h-.009c-.045 0-.465-.008-.893-.092-.351-.07-1.278-.256-1.32-.925-.008-.137.017-.602.731-.817.278-.085.547-.127.799-.127.834 0 1.316.457 1.493.76zm-2.56 4.876a.418.418 0 01-.407.168.44.44 0 01-.31-.187c-.043-.062-1.088-1.591-3.889-1.801.373-.356.659-.78.84-1.294.614-.157 1.415-.132 2.373.322.799.375 1.308.851 1.513 1.414a1.64 1.64 0 01-.12 1.378zm-3.578-7.087c.087 0 .168.003.241.012 1.507.095 2 .93 2.062 1.403a.68.68 0 01-.219.667c-.204.182-.515.277-.854.255a1.58 1.58 0 01-.193-.026.983.983 0 01-.098-.025 6.481 6.481 0 01-.9-.358 11.215 11.215 0 00-.285-1.88l-.006-.025c.024-.002.047-.006.07-.009.056-.008.113-.015.182-.014z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTheaterFilled;
