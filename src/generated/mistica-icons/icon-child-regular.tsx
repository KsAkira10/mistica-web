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

const IconChildRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M13.031 16.443a.595.595 0 01.838 0 .58.58 0 010 .829c-.566.557-1.177.849-1.818.857h-.037c-.65 0-1.274-.288-1.851-.86a.58.58 0 010-.829.595.595 0 01.837 0c.353.35.703.518 1.031.518.325-.005.661-.179 1-.515zm6.69-1.132c.621-.008.938-.344.938-.997 0-.647-.309-.975-.916-.986l-.04.347c-.002.09-.014.16-.016.25-.026.414-.07.888-.152 1.38.023 0 .04.003.054.003l.131.003zm-1.163-3.383v-.85a.56.56 0 01-.011-.103c-.003-.106-.012-.199-.014-.302H5.413l-.01 2.106a.412.412 0 01.012.1c.115 4.309 1.232 6.15 3.731 6.15.157 0 .305-.01.448-.017l4.74-.003c.364.022.641.022.932.003h.101c.028-.006.056-.012.084-.014 1.264-.127 2.958-.9 3.096-6.115a.42.42 0 01.01-.104v-.851zM9.146 4.829c-2.521 0-3.504 1.197-3.7 4.673h2.627c.163-1.737.762-3.124 1.804-4.12a5.65 5.65 0 01.566-.466 8.844 8.844 0 00-1.048-.078l-.249-.009zm2.994.507c-.549.225-1.042.507-1.44.886-.809.776-1.285 1.876-1.436 3.277h5.75c-.15-1.4-.627-2.504-1.437-3.277-.395-.379-.888-.661-1.437-.886zm2.712-.5c-.37 0-.678.041-1.014.08.199.146.39.297.563.465 1.042.997 1.644 2.384 1.804 4.12h2.244c-.395-3.882-1.869-4.523-3-4.638l-.146-.014a5.678 5.678 0 00-.42-.014h-.031zM4.412 15.31l.02-.003c-.07-.459-.12-.918-.152-1.372 0-.095-.016-.154-.016-.247l-.042-.355c-.575.025-.874.35-.874.98 0 .653.313.989.938.997h.126zm15.336-3.16c.97.009 2.098.58 2.098 2.16s-1.134 2.157-2.109 2.171h-.165a2.15 2.15 0 01-.264-.02c-.005 0-.008-.002-.014-.005-.465 1.72-1.448 3.395-3.565 3.683a.568.568 0 01-.208.04h-.215c-.132.01-.306.02-.488.02s-.353-.012-.52-.02H9.635c-.131.01-.305.02-.49.02-2.7 0-3.919-1.698-4.47-3.737a2.36 2.36 0 01-.244.016h-.166c-.972-.014-2.106-.59-2.106-2.17 0-1.56 1.104-2.135 2.062-2.157l.005-1.482H2.754a.59.59 0 01-.594-.586c0-.325.266-.585.594-.585h1.501c.168-3.118 1-5.843 4.891-5.843.185 0 .359.008.53.022h1.411a1.224 1.224 0 01-.103-.498c0-.334.092-.594.274-.768.177-.168.431-.252.756-.252s.58.084.757.252c.182.177.277.434.277.768 0 .193-.04.355-.1.498h1.386c.26-.02.672-.02 1.014.003l.179.011c.076.009.14.017.213.028 3.21.446 3.846 4.076 3.983 6.21.003.09.017.157.025.255l-.003 1.75.003.217zm-9.54 2.132a.589.589 0 01-.594.586.59.59 0 01-.594-.586V12.45c0-.325.266-.585.594-.585a.59.59 0 01.594.585v1.832zm4.134-2.417a.59.59 0 01.594.585v1.832a.589.589 0 01-.594.586.59.59 0 01-.594-.586V12.45a.59.59 0 01.594-.585z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconChildRegular;
