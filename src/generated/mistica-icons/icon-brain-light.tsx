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

const IconBrainLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M19.51 11.308c-.575-.426-1.216-.608-1.76-.678.118-.474-.059-.936-.38-1.264-.003-.002-.068-.07-.07-.07-.18-.173-.435-.143-.62.028-.182.171-.154.488.02.667.252.26.17.47.067.605l-.123.008a7.81 7.81 0 00-.348.042 3.872 3.872 0 00-.4.073.452.452 0 00-.347.544c.056.243.31.395.554.339a5.976 5.976 0 01.636-.092c.375-.043 1.67-.096 2.507.786.782 1.02.843 2.426.843 2.835 0 .922-.252 3.908-3.46 3.96h-.005c-.243.032-.51-.078-.798-.262-.3-.191-.496-.407-.577-.64a.47.47 0 00-.588-.282.448.448 0 00-.292.566c0 .003.003.005.003.008.149.426.468.801.947 1.104.196.126.395.221.59.288-.338.698-.949 1.07-1.859 1.07-1.106 0-1.513-1.131-1.591-1.386a37.86 37.86 0 000-.978V5.428c0-.188.006-.89.008-1.129.107-.26.575-1.238 1.586-1.238.905 0 1.515.37 1.854 1.062-.74.257-1.218.874-1.434 1.476l-.064.188a.451.451 0 00.305.565.46.46 0 00.58-.3l.053-.153c.11-.303.493-.995 1.291-.992 3.205.008 3.457 3.04 3.457 3.97-.009.355-.056 1.475-.586 2.43m-9.574 9.63c-.896 0-1.504-.36-1.846-1.038.227-.068.454-.171.678-.317.48-.305.798-.678.947-1.104a.45.45 0 00-.28-.571c-.003 0-.006-.003-.011-.003a.467.467 0 00-.589.283c-.08.233-.274.448-.577.642-.285.184-.554.29-.795.263-.02 0-.037.008-.053.011-.017-.003-.034-.008-.05-.008-3.217 0-3.469-3.037-3.469-3.97 0-.37.056-1.549.636-2.523.258.12.546.21.888.238.037.003.07.003.107.003-.017.63.4 1.086.921 1.285l.093.034a.423.423 0 00.14.025c.179 0 .333-.123.406-.308.09-.233-.073-.504-.308-.594-.378-.146-.362-.4-.314-.569.832-.29 1.224-1.03 1.294-1.725l.014-.154a.457.457 0 00-.423-.487h-.006a.456.456 0 00-.495.414l-.012.143c-.053.515-.316 1.12-1.338 1.028-.348-.028-.608-.126-.79-.275-.751-1.014-.815-2.383-.815-2.784 0-.93.252-3.969 3.546-3.969h.003c.887-.017 1.193.686 1.302.994l.053.154a.465.465 0 00.58.3.449.449 0 00.305-.566l-.064-.185c-.224-.63-.734-1.274-1.53-1.504.342-.675.95-1.033 1.847-1.033 1.106 0 1.512 1.131 1.59 1.386-.002.202-.008.824 0 .978v13.14c0 .187-.005.89-.008 1.129-.098.26-.566 1.238-1.577 1.238M21.014 8.873c0-.79-.2-4.65-4.13-4.857-.442-1.201-1.436-1.86-2.837-1.86-1.042 0-1.689.605-2.064 1.135-.404-.589-1.067-1.135-2.048-1.135-1.4 0-2.395.656-2.837 1.852-3.925.168-4.13 4.07-4.13 4.868 0 .448.065 1.919.85 3.12-.782 1.205-.85 2.678-.85 3.13 0 .79.2 4.65 4.13 4.857.442 1.201 1.437 1.86 2.84 1.86 1.04 0 1.686-.606 2.062-1.135.403.588 1.07 1.135 2.047 1.135 1.398 0 2.392-.653 2.838-1.852 3.927-.165 4.129-4.07 4.129-4.866 0-.448-.065-1.918-.85-3.123.785-1.204.85-2.678.85-3.129"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBrainLight;
