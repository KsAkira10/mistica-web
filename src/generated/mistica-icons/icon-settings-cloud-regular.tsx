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

const IconSettingsCloudRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.409 18.022c.955 0 4.056-.283 4.056-3.924 0-3.423-2.734-3.868-3.91-3.902a.606.606 0 01-.566-.44c-.835-3.067-4.364-3.221-5.062-3.221-1.235 0-5.258.353-5.258 4.888l.006.095a.593.593 0 01-.44.583c-1.336.375-2.014 1.353-2.014 2.907 0 2.768 2.188 3.068 3.13 3.068l10.058-.054zm.613-8.988c2.323.212 4.647 1.63 4.647 5.064 0 3.773-2.831 5.112-5.257 5.112l-10.06.056c-2.097 0-4.338-1.118-4.338-4.255 0-2.465 1.381-3.484 2.451-3.905.193-5.479 5.398-5.761 6.457-5.761.823 0 4.857.182 6.1 3.689zm-5.179 4.781c.72 0 1.056-.33 1.056-1.04 0-.708-.333-1.038-1.056-1.038-.72 0-1.056.33-1.056 1.039 0 .709.336 1.04 1.056 1.04zm0-2.95c1.216 0 1.941.715 1.941 1.91 0 1.197-.725 1.911-1.94 1.911-1.217 0-1.94-.714-1.94-1.91s.723-1.91 1.94-1.91zm3.342 2.099v-.379h-.62a.482.482 0 01-.475-.397 2.418 2.418 0 00-.21-.675.468.468 0 01.09-.547l.464-.459-.291-.286-.465.457a.48.48 0 01-.577.078c-.132-.073-.404-.151-.661-.193a.478.478 0 01-.406-.47v-.611h-.384v.61a.48.48 0 01-.406.471c-.258.04-.533.12-.661.193a.48.48 0 01-.577-.078l-.465-.457-.292.286.465.46a.47.47 0 01.09.546c-.098.196-.168.42-.207.672-.04.23-.241.4-.477.4h-.619v.379h.62a.48.48 0 01.476.4c.042.255.109.47.21.675a.47.47 0 01-.093.544l-.465.459.292.286.465-.46a.495.495 0 01.557-.09c.196.096.423.166.68.208a.476.476 0 01.407.47v.611h.384v-.61a.48.48 0 01.406-.471c.255-.04.484-.11.683-.207a.49.49 0 01.558.09l.465.459.291-.286-.465-.46a.47.47 0 01-.092-.543c.1-.207.168-.423.21-.675.039-.23.24-.4.476-.4h.619zm.1-1.328c.477 0 .863.38.863.851v.577a.857.857 0 01-.862.852h-.33a3.262 3.262 0 01-.074.224l.306.3a.847.847 0 010 1.21l-.426.42a.903.903 0 01-1.23 0l-.305-.3c-.073.026-.149.05-.227.07v.328c0 .47-.387.852-.863.852h-.585a.857.857 0 01-.863-.852v-.328a4.342 4.342 0 01-.227-.07l-.302.3a.903.903 0 01-1.23 0l-.429-.42a.847.847 0 010-1.21l.303-.3a4.21 4.21 0 01-.073-.224h-.333a.857.857 0 01-.863-.852v-.577c0-.47.387-.851.863-.851h.333c.023-.076.045-.149.073-.224l-.305-.3a.843.843 0 01-.253-.605c0-.23.09-.445.255-.605l.429-.42a.903.903 0 011.23 0l.302.297a4.16 4.16 0 01.23-.068v-.327c0-.47.386-.852.863-.852h.585c.476 0 .863.381.863.852v.327c.073.02.151.043.23.068l.302-.297a.903.903 0 011.23 0l.425.42a.839.839 0 01.255.605c0 .23-.09.443-.255.605l-.302.297c.025.073.05.146.073.224h.325v.003z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSettingsCloudRegular;
