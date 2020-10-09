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

const IconExchangeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.371 6.55l-.025.387c-.036.535-.339 3.3-2.818 5.025l-.6.417.667.3c3.869 1.728 3.953 5.765 3.955 5.804a.77.77 0 01-.767.77.773.773 0 01-.768-.77c-.008-.457-.224-4.062-4.711-4.888a3.45 3.45 0 00.137-.986c0-.47-.078-.877-.218-1.224 3.17-1.104 3.546-3.77 3.588-4.39l-.017-.437-1.11-.01 1.892-1.928 1.904 1.927-1.109.003zm-7.53 7.832c-.33 0-.613-.045-.848-.132a1.3 1.3 0 01-.482-.283 1.284 1.284 0 01-.305-.501 2.514 2.514 0 01-.135-.863c0-.403.07-.734.194-.997.067-.143.145-.272.249-.373.14-.134.317-.235.532-.305a2.6 2.6 0 01.796-.11c.305 0 .568.037.792.11.219.07.401.174.541.308.104.101.182.227.25.37.125.263.195.594.195.997 0 .34-.05.628-.137.869a1.316 1.316 0 01-.305.495 1.318 1.318 0 01-.49.286 2.534 2.534 0 01-.846.129zm-7.29 4.1a.777.777 0 01-.774.765.768.768 0 01-.759-.764c0-.042.087-4.107 4.025-5.824l.67-.291-.597-.423c-2.44-1.726-2.74-4.473-2.773-5.006l-.084-.38-1.053-.012L5.108 4.62l1.896 1.927-1.154.006.031.44c.045.619.42 3.285 3.585 4.389a3.26 3.26 0 00-.215 1.224c0 .361.05.684.134.975-4.61.798-4.826 4.442-4.835 4.902zm17.016-12.01l-2.574-2.603c-.182-.227-.515-.266-.801-.033L15.6 6.474a.557.557 0 00-.067.583c.09.19.274.305.476.305l.916.009c-.174.874-.813 2.557-3.16 3.3l-.025-.029c-.443-.43-1.084-.647-1.905-.647-.818 0-1.46.216-1.902.647-.011.012-.017.026-.028.037-2.336-.726-2.98-2.37-3.154-3.308l.919-.009c.207 0 .39-.117.482-.308.09-.187.061-.42-.098-.613l-2.53-2.569-.087-.09a.524.524 0 00-.392-.112.483.483 0 00-.322.163l-2.6 2.633a.553.553 0 00-.072.583c.09.19.274.308.479.308l1.03.008c.127.967.625 3.177 2.544 4.826-3.863 2.087-3.907 6.244-3.907 6.289 0 .871.705 1.583 1.588 1.591.862 0 1.574-.709 1.588-1.574.006-.39.202-3.521 4.398-4.14.056.07.103.145.168.21.442.426 1.081.641 1.902.641.82 0 1.46-.215 1.905-.641.061-.059.109-.132.162-.2 4.081.642 4.277 3.74 4.283 4.124a1.595 1.595 0 001.588 1.586c.877 0 1.588-.717 1.588-1.594 0-.045-.044-4.165-3.834-6.255 1.95-1.639 2.459-3.804 2.59-4.852l1.026-.01a.529.529 0 00.482-.309.555.555 0 00-.065-.585z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconExchangeLight;
