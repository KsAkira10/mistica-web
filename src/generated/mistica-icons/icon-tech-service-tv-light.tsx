/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTechServiceTvLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.252 7.114c-.294 0-.551.053-.77.154-.339.157-.644.465-.907.913-.107.18-.196.367-.272.563l-.009.008-3.778 1.762h-.011a3.643 3.643 0 00-1.118-.199 1.83 1.83 0 00-.77.154c-.342.16-.647.468-.908.916-.11.188-.204.381-.28.586a.672.672 0 00.067.622.617.617 0 00.51.26.713.713 0 00.31-.073l.494-.23.314.169-.073.35-.493.23c-.258.12-.412.358-.404.616.009.257.185.484.451.582.06.023.583.208 1.14.208.292 0 .552-.054.77-.154.343-.16.648-.468.908-.916.107-.18.196-.367.272-.563l.008-.009 3.782-1.762h.011c.118.042.602.2 1.118.2.294 0 .552-.054.77-.155.342-.16.647-.468.908-.916.109-.188.204-.38.28-.585a.672.672 0 00-.067-.622.617.617 0 00-.51-.26.713.713 0 00-.311.072l-.496.23-.314-.168.073-.35.493-.23c.258-.12.412-.359.4-.62-.01-.26-.184-.484-.45-.582l-.017-.005a3.69 3.69 0 00-1.12-.196zm0 .557c.477 0 .947.174.947.174.112.042.115.115.009.165l-.552.258a.49.49 0 00-.241.305l-.129.61c-.02.127.04.25.149.314l.549.294a.44.44 0 00.207.045.437.437 0 00.18-.036l.55-.258a.167.167 0 01.074-.02c.056 0 .078.051.05.132 0 0-.33.916-.896 1.182-.16.076-.348.101-.535.101-.476 0-.947-.173-.947-.173a.524.524 0 00-.174-.028.627.627 0 00-.226.041l-3.821 1.785a.598.598 0 00-.27.294s-.33.916-.896 1.182c-.16.076-.347.1-.535.1-.476 0-.946-.173-.946-.173-.112-.042-.115-.115-.009-.168l.552-.258a.49.49 0 00.241-.302l.129-.608a.306.306 0 00-.146-.314l-.549-.294a.447.447 0 00-.207-.045.437.437 0 00-.18.037l-.551.258a.166.166 0 01-.073.02c-.056 0-.078-.051-.05-.133 0 0 .33-.915.896-1.182.16-.075.347-.1.535-.1.476 0 .947.173.947.173.056.02.115.028.173.028a.627.627 0 00.227-.042l3.821-1.781a.592.592 0 00.269-.297s.33-.916.896-1.182c.157-.073.345-.101.532-.104z"
            />
            <path
                fill={fillColor}
                d="M5.171 16.635h13.656c1.014 0 1.787-.295 2.291-.877.479-.546.72-1.353.72-2.398V8.422c0-1.045-.244-1.852-.72-2.398-.507-.58-1.277-.874-2.291-.874H5.17c-1.014 0-1.784.294-2.291.874-.48.546-.72 1.353-.72 2.398v4.938c0 1.045.244 1.852.72 2.4.507.58 1.277.875 2.291.875zm-2.45-8.21c0-1.852.778-2.715 2.45-2.715h13.656c1.672 0 2.45.86 2.45 2.712v4.94c0 1.852-.778 2.715-2.45 2.715H5.17c-1.672 0-2.45-.863-2.45-2.714V8.425zm12.282 10.428H8.995a.28.28 0 01-.28-.28.28.28 0 01.28-.28h6.008a.28.28 0 01.28.28.28.28 0 01-.28.28z"
            />
        </svg>
    );
};

export default IconTechServiceTvLight;
