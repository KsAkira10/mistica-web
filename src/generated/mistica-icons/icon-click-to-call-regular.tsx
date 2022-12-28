/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconClickToCallRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.634 21.841c-.868 0-1.857-.213-2.927-.641-2.185-.871-4.577-2.569-6.916-4.908l-.084-.084C5.368 13.872 3.674 11.48 2.8 9.295c-.832-2.092-.855-3.88-.056-5.034l.028-.042c.095-.134.389-.54.694-.832.871-.829 1.757-1.243 2.636-1.227.849.017 1.686.432 2.49 1.236.306.3.569.636.787 1 .432.694.589 1.414.465 2.134-.123.72-.523 1.423-1.196 2.095a5.708 5.708 0 01-.495.443c-.068.118-.026.49.495 1.252.605.88 1.614 1.922 2.32 2.628l.084.084c.706.706 1.748 1.714 2.627 2.319.762.521 1.135.56 1.252.496a4.93 4.93 0 01.443-.496c.672-.672 1.378-1.076 2.098-1.196.72-.12 1.437.034 2.134.465a4.86 4.86 0 011 .787c.804.804 1.219 1.641 1.236 2.49.016.88-.398 1.765-1.227 2.636a6.362 6.362 0 01-.813.68l-.02.015-.016.01a.154.154 0 00-.025.02c-.566.39-1.28.583-2.107.583zm-9.047-6.339c2.23 2.233 4.49 3.84 6.535 4.656 1.7.678 3.145.745 3.972.182l.033-.023a5.22 5.22 0 00.678-.56c.62-.65.93-1.269.919-1.84-.011-.555-.308-1.118-.908-1.72a3.834 3.834 0 00-.778-.613l-.017-.009c-.465-.291-.91-.392-1.361-.316-.485.08-.986.38-1.493.885-.143.14-.275.288-.395.448-.02.022-.04.045-.06.064-.237.222-.666.449-1.344.275-.383-.098-.815-.314-1.32-.659-.957-.655-2.047-1.714-2.786-2.45l-.084-.084c-.737-.737-1.793-1.83-2.451-2.785-.345-.504-.56-.935-.658-1.32-.171-.677.056-1.106.277-1.346a.422.422 0 01.064-.06c.16-.12.308-.251.448-.394.505-.504.802-1.006.886-1.493.075-.451-.028-.897-.317-1.362l-.008-.016a3.937 3.937 0 00-.614-.78c-.605-.593-1.168-.89-1.722-.901-.572-.008-1.194.297-1.84.919a4.866 4.866 0 00-.561.678l-.025.033c-.56.827-.496 2.272.182 3.972.815 2.045 2.426 4.306 4.655 6.535l.05.05.043.034z"
            />
            <path
                fill={fillColor}
                d="M12.763 12.01a.757.757 0 01-.748-.93l.97-4.536a.709.709 0 01.498-.557c.252-.07.518.02.712.232l.669.74 3.03-2.605a.886.886 0 01.696-.244.924.924 0 01.66.367l1.135 1.263c.18.202.263.468.23.734a.909.909 0 01-.367.625L17.23 9.752l.661.733c.193.216.252.49.154.737s-.328.406-.619.429l-4.6.355c-.022.003-.044.003-.064.003zm1.149-4.435l-.7 3.28 3.277-.255-.28-.308a.837.837 0 01.061-1.182c.003-.003.006-.006.009-.006l3.14-2.764-.922-1.025-3.104 2.669a.854.854 0 01-1.182-.076l-.3-.333z"
            />
        </svg>
    );
};

export default IconClickToCallRegular;
