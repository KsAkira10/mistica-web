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

const IconDownloadAppRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.204 2c1.11 0 1.916.269 2.471.826.555.558.82 1.362.82 2.465v13.11c0 1.114-.271 1.927-.826 2.478-.554.547-1.358.813-2.465.813H8.65c-1.107 0-1.913-.266-2.465-.813-.558-.551-.826-1.364-.826-2.479V5.291c0-1.087.268-1.885.823-2.448C6.742 2.277 7.55 2 8.65 2h6.554zm0 1.12H8.65c-1.54 0-2.171.63-2.171 2.171v13.11c0 1.582.588 2.17 2.17 2.17h6.555c1.583 0 2.171-.588 2.171-2.17V5.29c0-.792-.162-1.341-.493-1.675-.33-.333-.882-.496-1.678-.496zM11.93 17.13c.697 0 1.11.417 1.11 1.115 0 .341-.099.613-.29.81-.19.195-.481.304-.823.304-.342 0-.627-.106-.82-.305-.194-.199-.29-.47-.29-.81 0-.697.415-1.114 1.113-1.114zm-.9-11.855h1.838c.482 0 .871.387.874.869 0 .03 0 .059-.005.09V11.1h1.49a.499.499 0 01.378.829l-3.308 3.81a.492.492 0 01-.754 0l-3.3-3.81a.498.498 0 01.051-.706.506.506 0 01.328-.123h1.437V6.179a.86.86 0 01.271-.658.9.9 0 01.7-.247zm1.707 1.003h-1.675v5.325a.5.5 0 01-.502.502h-.84l2.202 2.546 2.21-2.546h-.894a.5.5 0 01-.501-.502V6.277z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDownloadAppRegular;
