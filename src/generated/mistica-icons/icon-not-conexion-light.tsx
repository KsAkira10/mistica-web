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

const IconNotConexionLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.95 19.89c.718-.751 1.076-1.504 1.065-2.236-.014-.703-.372-1.411-1.064-2.103a4.327 4.327 0 00-.874-.69c-.591-.363-1.18-.495-1.77-.397-.606.104-1.205.45-1.788 1.03-.14.14-.271.286-.395.443a.38.38 0 01-.12.101c-.336.188-.871.028-1.633-.496-.877-.602-1.89-1.585-2.577-2.271l-.081-.079c-.687-.686-1.67-1.697-2.272-2.577-.521-.759-.683-1.291-.496-1.63a.4.4 0 01.104-.123 5.12 5.12 0 00.442-.392c.583-.583.93-1.185 1.034-1.788.1-.588-.03-1.179-.392-1.759a4.263 4.263 0 00-.698-.885c-.692-.695-1.4-1.053-2.103-1.064-.712-.017-1.482.344-2.236 1.064a5.567 5.567 0 00-.616.74c-.708 1.022-.672 2.6.073 4.473.815 2.045 2.412 4.289 4.613 6.49l.003.003.07.07c2.208 2.207 4.451 3.801 6.496 4.616 1.86.743 3.46.776 4.44.098.356-.255.605-.462.776-.638zm.58-4.922c.85.846 1.29 1.745 1.306 2.67.017.955-.417 1.902-1.291 2.818a6.31 6.31 0 01-.855.714c-.652.454-1.409.664-2.297.664-.893 0-1.888-.216-2.96-.645-2.146-.851-4.488-2.512-6.765-4.79l-.07-.07c-.011-.01-.023-.025-.034-.036-2.257-2.255-3.916-4.594-4.773-6.742-.851-2.137-.854-3.986-.011-5.208l.059-.078a6.35 6.35 0 01.689-.823c.919-.874 1.857-1.303 2.82-1.292.922.017 1.821.457 2.67 1.306.336.338.613.689.82 1.044.46.745.631 1.53.497 2.32-.132.773-.558 1.526-1.261 2.23a5.527 5.527 0 01-.361.333c.033.117.129.358.409.767.563.82 1.512 1.796 2.173 2.46l.082.078c.663.664 1.641 1.61 2.459 2.176.412.28.653.379.767.41.11-.13.205-.23.337-.362.703-.706 1.453-1.129 2.23-1.26.792-.132 1.573.033 2.33.504a5.17 5.17 0 011.03.812zM16.873 3.027c-2.767 0-4.112 1.345-4.112 4.115 0 2.804 1.306 4.112 4.112 4.112 2.768 0 4.115-1.345 4.115-4.112 0-2.77-1.347-4.115-4.115-4.115zm0 9.048c-3.117 0-4.932-1.572-4.932-4.933 0-3.362 1.815-4.936 4.932-4.936 3.118 0 4.936 1.574 4.936 4.936 0 3.358-1.818 4.93-4.936 4.933zm-1.969-2.97a.41.41 0 010-.58L16.29 7.14l-1.387-1.387a.41.41 0 01.58-.58L16.87 6.56l1.392-1.392a.41.41 0 01.58.58L17.449 7.14l1.39 1.392a.41.41 0 01-.58.58L16.867 7.72l-1.384 1.386a.407.407 0 01-.577.003s-.003 0-.003-.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNotConexionLight;
