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

const IconFirewallLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.636 20.742H17.15v-5.378l3.863.02v4.78c.003.317-.227.578-.378.578zm-9.717-.255a3.863 3.863 0 001.266-2.717c.033-.883-.252-1.726-.776-2.434l4.916.022v5.38H10.61c.1-.078.204-.156.308-.251zm-3.731.51a1.849 1.849 0 01-.493-.045c-.003 0-.4-.07-.757-.423a1.308 1.308 0 01-.058-1.787h.002c.096-.112.205-.21.32-.3.624-.47.983-1.219.955-2.003.213.118.423.263.616.432.787.691 1.487 2.417.742 3.437-.3.408-.767.655-1.277.689-.02-.003-.034 0-.05 0zm-3.39-1.647c-1.846-2.356-.204-6.174 1.737-7.768a8.044 8.044 0 012.342-1.339c-.21 1.084-.23 3.081 1.854 4.605.289.205.552.434.784.686.563.594.866 1.387.838 2.205a3.033 3.033 0 01-.994 2.132 4.22 4.22 0 01-1.06.708c.824-1.428.032-3.442-.982-4.336-.477-.417-1.048-.728-1.603-.868a.42.42 0 00-.504.308.419.419 0 00.02.255c.002.011.431 1.09-.535 1.846-.16.123-.306.26-.437.409a2.14 2.14 0 00-.412 2.09c-.4-.25-.754-.567-1.048-.933zM5.314 2.99h3.232v5.33l-3.61-.008V3.568c0-.317.252-.577.378-.577zm15.7.577v4.784l-3.863-.008v-5.35h3.482c.129-.003.381.26.381.574zM9.375 8.324V2.991l6.947.003V8.34l-6.947-.017zm1.404 6.174a.4.4 0 00-.12.022 5.969 5.969 0 00-.446-.35c-2.44-1.781-1.4-4.266-1.356-4.37a.415.415 0 00-.062-.434.41.41 0 00-.414-.14c-1.165.278-2.361.885-3.373 1.712l-.075.07V9.15l7.456.016v5.34l-1.61-.009zm2.442.011V9.167l7.793.02v5.361l-7.793-.039zm7.415-12.35l-15.32-.003c-.633 0-1.21.673-1.21 1.412v8.277c-1.77 2.11-2.843 5.62-.958 8.02.916 1.168 2.362 1.865 3.855 1.958.039.003.078.014.117.014.014 0 .028-.003.045-.003.056 0 .11.009.166.009.389 0 .778-.042 1.162-.132.238-.042.47-.107.695-.188a.36.36 0 00.185.05h11.26c.644 0 1.207-.658 1.207-1.411V3.568c.003-.74-.574-1.409-1.204-1.409z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFirewallLight;
