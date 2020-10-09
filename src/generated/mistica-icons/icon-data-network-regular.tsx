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

const IconDataNetworkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.095 13.89h-2.571c.18-.93.283-1.924.283-2.974 0-.866-.065-1.684-.188-2.462h2.597c.162.753.252 1.571.252 2.479.003 1.106-.13 2.092-.373 2.958zm-4.501 4.413c.689-.818 1.25-1.908 1.63-3.208h2.426c-.787 1.628-2.14 2.692-4.056 3.208zm-2.336.254v-3.456h2.7c-.591 1.815-1.563 3.106-2.7 3.456zm0-10.103h3.123c.137.776.21 1.605.21 2.462 0 1.05-.106 2.059-.3 2.975l-3.033.008V8.454zm0-5.146c1.24.378 2.288 1.868 2.862 3.944h-2.862V3.308zm6.596 3.944H17.39c-.372-1.498-.972-2.767-1.736-3.68 2.058.568 3.47 1.803 4.201 3.68zm-7.812 0H8.966C9.608 5.2 10.751 3.675 12.042 3.3v3.952zm0 6.647h-1.711v-1.627c0-.521-.283-1.219-1.648-1.628a2.034 2.034 0 00-.252-.056c.017-.736.098-1.45.236-2.134h3.375v5.445zm0 4.731a11.085 11.085 0 01-1.605-.16c-.034 0-.073.009-.106.009v-3.375h1.711v3.526zm-2.927-4.017c-.107.12-.35.297-.77.426-1.16.336-3.188.336-4.34 0-.453-.137-.697-.305-.787-.409v-1.2c.138.056.275.112.437.16.681.207 1.583.321 2.516.321.941 0 1.832-.112 2.524-.322.154-.042.283-.095.423-.151v1.176h-.003zm0 2.614c-.107.12-.35.297-.77.426-1.16.336-3.188.336-4.34 0-.484-.143-.705-.311-.787-.41v-1.218c.138.056.275.12.437.16.681.21 1.583.322 2.516.322.941 0 1.832-.112 2.524-.322a2.67 2.67 0 00.423-.16v1.202h-.003zm0 2.518c0 .12-.244.311-.779.473-1.168.337-3.18.337-4.339 0-.535-.162-.779-.352-.779-.473V18.64c.138.056.275.112.437.16.681.207 1.583.321 2.516.321.941 0 1.832-.112 2.524-.322.145-.042.283-.103.423-.16v1.107h-.003zm-5.12-7.947c1.15-.344 3.187-.344 4.338 0 .35.104.569.224.681.32-.098.086-.291.201-.68.319-1.152.336-3.18.336-4.331 0-.373-.112-.577-.233-.68-.328.106-.087.307-.199.671-.31zM5.09 8.454h2.327c-.106.624-.17 1.266-.193 1.933a12.388 12.388 0 00-2.37.022c.026-.695.098-1.353.236-1.955zm4.453-4.849c-.804.922-1.442 2.182-1.848 3.65H5.448c.72-1.846 2.093-3.067 4.095-3.65zm11.762 4.199a.556.556 0 00-.073-.224C20.171 3.955 17.218 2 12.65 2c-5.807 0-8.922 2.992-9.02 8.653-.885.263-1.42.689-1.582 1.252v.008a1.252 1.252 0 00-.048.362v7.473c0 .513.283 1.218 1.647 1.619.69.21 1.583.322 2.515.322.933 0 1.832-.112 2.524-.322 1.364-.4 1.647-1.106 1.647-1.62v-.072c.723.12 1.493.185 2.32.185 5.913 0 9.036-3.087 9.036-8.924-.003-1.149-.132-2.19-.384-3.132z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataNetworkRegular;
