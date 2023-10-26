/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTechServiceTvRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.256 7.095c-.294 0-.552.053-.77.154-.342.16-.648.468-.908.916-.106.18-.196.367-.272.563l-.008.009-3.779 1.761h-.011A3.644 3.644 0 0 0 8.39 10.3c-.291 0-.552.053-.77.154-.342.16-.647.467-.908.916-.109.187-.204.38-.28.585a.672.672 0 0 0 .068.622.617.617 0 0 0 .51.26.713.713 0 0 0 .31-.072l.493-.23.314.168-.073.35-.493.23c-.258.12-.412.358-.403.616.008.258.185.485.45.583a3.65 3.65 0 0 0 1.14.207c.292 0 .553-.053.771-.154.34-.163.644-.47.908-.919a3.72 3.72 0 0 0 .271-.563l.009-.008 3.781-1.762h.011c.118.042.603.199 1.118.199.294 0 .552-.054.77-.154.342-.16.648-.468.908-.916.11-.188.204-.381.28-.586a.672.672 0 0 0-.067-.622.617.617 0 0 0-.51-.26.713.713 0 0 0-.31.073l-.494.23-.313-.169.072-.35.493-.23c.258-.12.412-.358.4-.619-.01-.26-.181-.484-.45-.582l-.029-.01c-.129-.04-.604-.192-1.111-.192Zm0 .56c.476 0 .947.174.947.174.112.042.114.115.008.165l-.552.258a.49.49 0 0 0-.24.302l-.13.611c-.02.126.037.25.146.314l.55.294c.064.03.136.048.206.045a.437.437 0 0 0 .18-.037l.552-.257a.166.166 0 0 1 .072-.02c.056 0 .079.05.05.132 0 0-.33.916-.896 1.182-.16.075-.347.1-.535.1-.476 0-.946-.173-.946-.173a.525.525 0 0 0-.174-.028.624.624 0 0 0-.227.042l-3.82 1.787a.597.597 0 0 0-.27.294s-.33.916-.896 1.182c-.16.076-.347.101-.535.101-.476 0-.947-.174-.947-.174-.112-.042-.115-.114-.008-.168l.552-.257a.49.49 0 0 0 .24-.303l.13-.61a.31.31 0 0 0-.146-.314l-.55-.294a.447.447 0 0 0-.207-.045.437.437 0 0 0-.179.036l-.552.258a.165.165 0 0 1-.072.02c-.056 0-.079-.05-.05-.132 0 0 .33-.916.896-1.182.16-.076.347-.101.535-.101.476 0 .946.174.946.174.056.02.115.028.174.028a.627.627 0 0 0 .227-.042l3.82-1.785a.598.598 0 0 0 .27-.294s.33-.916.896-1.182c.16-.073.347-.1.535-.1Z"
            />
            <path
                fill={fillColor}
                d="M5.446 16.933h13.11c1.098 0 1.94-.328 2.504-.972.52-.6.787-1.468.787-2.583V8.44c0-1.115-.263-1.984-.787-2.583-.563-.644-1.406-.972-2.504-.972H5.446c-1.1 0-1.94.328-2.504.972-.52.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.983.787 2.585.563.642 1.406.97 2.504.97ZM3.788 6.596c.345-.394.885-.588 1.658-.588l13.11-.003c.77 0 1.313.194 1.658.589.339.39.512 1.01.512 1.846v4.938c0 .835-.173 1.457-.512 1.846-.345.395-.888.588-1.658.588H5.446c-.77 0-1.313-.193-1.658-.588-.339-.39-.513-1.011-.513-1.846V8.44c0-.835.174-1.457.513-1.844ZM15.007 19.117H8.998a.562.562 0 0 1-.56-.56c0-.308.252-.56.56-.56h6.009c.308 0 .56.252.56.56 0 .308-.252.56-.56.56Z"
            />
        </svg>
    );
};

export default IconTechServiceTvRegular;
