/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCallDetailsFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.293 7.491L15.83 2.31a.56.56 0 00-.383-.154H8.066c-.569 0-1.107.538-1.107 1.106v1.507c-.417-.26-.846-.395-1.277-.403-.712-.014-1.423.317-2.115.978-.234.223-.456.527-.54.642l-.009.013-.008.011-.01.011-.008.01c-.636.922-.625 2.337.03 3.984.676 1.695 1.99 3.543 3.796 5.35l.006.006.053.056.006.005.068.067.069.068a.568.568 0 00-.062.252v4.921c0 .589.518 1.107 1.107 1.107h12.297c.588 0 1.106-.518 1.106-1.107V7.897a.56.56 0 00-.176-.406zm-1.213.392h-2.182c-.653 0-1.2-.204-1.583-.588-.384-.384-.588-.933-.588-1.583V3.754l4.353 4.13zM3.912 6.68l.016-.025c.202-.28.337-.429.415-.502.93-.888 1.67-.89 2.549-.008.174.17.325.361.451.568l.008.017c.267.426.513 1.101-.417 2.028a2.729 2.729 0 01-.333.292l-.065.058c-.19.208-.389.577-.24 1.154.078.311.249.656.523 1.054.392.574.978 1.238 1.897 2.157l.064.064c.919.919 1.583 1.501 2.157 1.896.398.275.742.446 1.053.524.577.146.947-.05 1.154-.24a.428.428 0 00.059-.065c.09-.118.188-.23.294-.334.927-.927 1.602-.683 2.028-.417l.017.008c.207.127.4.278.568.452.883.882.88 1.619-.008 2.549-.073.075-.218.21-.501.414l-.026.017c-.602.406-1.666.35-2.927-.154-1.96-.782-3.784-2.359-4.969-3.544l-.04-.039-.03-.028c-1.185-1.188-2.762-3.011-3.543-4.972-.504-1.26-.56-2.325-.154-2.924z"
            />
        </svg>
    );
};

export default IconCallDetailsFilled;
