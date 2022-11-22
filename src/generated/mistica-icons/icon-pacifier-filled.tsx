/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPacifierFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M18.662 10.203l.014.016c.465.563.711 1.309.706 2.244 0 .933-.25 1.675-.715 2.241l-.042.05a4.363 4.363 0 01-.336.309c-.148.123-.37.266-.594.4a7.507 7.507 0 01-.535.297v.49l-.008.712c-.023 2.355-1.387 4.87-5.14 4.882h-.023c-3.753-.011-5.117-2.527-5.14-4.882l-.01-.703v-.502a8.154 8.154 0 01-.536-.297 5.161 5.161 0 01-.594-.4 3.86 3.86 0 01-.336-.308l-.029-.034a.614.614 0 00-.013-.017c-.462-.568-.711-1.31-.711-2.24 0-.93.246-1.676.711-2.242a.223.223 0 00.021-.025 1.078 1.078 0 01.135-.14 2.51 2.51 0 00.051-.047c.05-.05.107-.107.171-.149.734-.6 1.67-.978 2.75-1.12-.402-.65-.612-1.465-.612-2.44 0-1.328.38-2.37 1.134-3.093.72-.697 1.737-1.05 3.022-1.05 1.286 0 2.303.356 3.025 1.05.751.723 1.132 1.762 1.132 3.093 0 .975-.21 1.79-.613 2.44 1.081.142 2.017.52 2.75 1.12.062.045.12.098.171.149l.052.047a1.129 1.129 0 01.142.149zm-.908 3.67c.252-.34.39-.808.392-1.415 0-.606-.137-1.076-.392-1.418-.602-.605-1.454-.963-2.479-1.084.034.224.053.46.053.709 0 1.059-.305 1.888-.91 2.468-.58.554-1.39.837-2.412.837-1.02 0-1.832-.283-2.412-.837-.605-.58-.913-1.41-.913-2.468 0-.25.023-.482.056-.709-1.025.118-1.88.48-2.479 1.084-.252.345-.39.813-.39 1.418 0 .607.135 1.075.39 1.414.26.263.577.465.925.639.173.087.347.17.54.235.44.143.936.221 1.47.244.043.001.082.005.122.01.048.004.096.01.148.01h5.087c.058 0 .112-.006.166-.011l.103-.01a5.427 5.427 0 001.47-.243c.193-.064.367-.148.54-.235.348-.174.665-.378.925-.639zm-3.479 2.842l.006-.47H9.93l-.202.002.008.468c.006.642.238 2.129 2.27 2.137 2.027-.008 2.262-1.495 2.268-2.137z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPacifierFilled;
