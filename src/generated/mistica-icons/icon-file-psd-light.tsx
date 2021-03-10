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

const IconFilePsdLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.747 2.156c.18 0 .35.07.482.194l5.409 5.235c.09.087.143.199.17.322.023.05.035.104.035.162v12.563c0 .653-.564 1.205-1.23 1.205H8.176c-.656 0-1.233-.563-1.233-1.205l.037-3.036H4.422a2.27 2.27 0 01-2.266-2.269v-4.18A2.27 2.27 0 014.422 8.88h2.521V3.36c0-.63.586-1.205 1.233-1.205h7.571zm-.689.824H8.173c-.185 0-.406.204-.406.378v5.518h6.706a2.27 2.27 0 012.266 2.269v4.18a2.27 2.27 0 01-2.266 2.268H7.806l-.036 3.042c0 .182.204.373.406.373h12.437v.003c.207 0 .406-.185.406-.379V8.75h-2.566c-.98 0-1.826-.316-2.442-.913-.622-.602-.953-1.429-.953-2.384V2.98zm-.582 6.722H4.422c-.792 0-1.44.648-1.44 1.443v4.18c0 .795.645 1.442 1.44 1.442h10.054c.792 0 1.44-.647 1.44-1.443v-4.179c0-.795-.645-1.443-1.44-1.443zm-5.213 1.662c.358 0 .748.053 1.033.15l-.129.628a3.616 3.616 0 00-.888-.129c-.453 0-.599.163-.599.395 0 .726 1.888.227 1.888 1.673 0 .33-.115.593-.308.778-.26.244-.61.353-1.143.353a3.627 3.627 0 01-1.227-.193l.129-.644c.325.115.75.185 1.022.185.499 0 .731-.13.731-.471 0-.692-1.887-.19-1.887-1.644 0-.75.59-1.081 1.378-1.081zm-3.317.07c.58 0 .947.08 1.185.302.199.185.297.47.297.866 0 .395-.092.692-.277.899-.216.243-.552.358-1.04.358h-.593v1.278h-.844v-3.703h1.272zm6.412 0c.703 0 1.168.109 1.476.417.297.291.448.75.448 1.417 0 .673-.145 1.138-.448 1.451-.277.28-.703.418-1.364.418h-1.255v-3.703h1.143zm-.036.616h-.261v2.468h.359c.378 0 .65-.115.795-.33.146-.217.196-.466.196-.92 0-.53-.081-.778-.26-.974-.168-.18-.418-.244-.83-.244zm-6.407-.003h-.397v1.18h.417v-.004c.272 0 .384-.039.493-.14.098-.098.146-.254.146-.47 0-.199-.042-.348-.14-.437-.104-.093-.26-.129-.519-.129zm9.967-8.888V5.45c0 .729.24 1.348.7 1.79.462.446 1.106.681 1.868.681h2.35l-4.918-4.762z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFilePsdLight;
