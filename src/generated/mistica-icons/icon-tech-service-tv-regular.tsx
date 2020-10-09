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

const IconTechServiceTvRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M15.002 18.012c.308 0 .56.252.56.56 0 .308-.252.56-.56.56H8.993a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h6.009zM18.55 4.9c1.098 0 1.94.328 2.504.972.524.6.787 1.468.787 2.583v4.938c0 1.115-.266 1.983-.787 2.583-.563.644-1.406.972-2.504.972H5.44c-1.098 0-1.94-.328-2.504-.97-.52-.602-.787-1.47-.787-2.585V8.455c0-1.115.266-1.984.787-2.583C3.5 5.228 4.34 4.9 5.441 4.9h13.11zm0 1.12l-13.11.003c-.773 0-1.313.194-1.658.588-.339.387-.513 1.009-.513 1.844v4.938c0 .835.174 1.457.513 1.846.345.395.888.588 1.658.588h13.11c.77 0 1.313-.193 1.658-.588.339-.39.512-1.011.512-1.846V8.455c0-.835-.173-1.457-.512-1.846-.345-.395-.888-.589-1.658-.589zm-3.3 1.09c.56 0 1.081.185 1.14.202.269.098.44.322.45.582.012.26-.142.499-.4.62l-.493.23-.073.35.314.167.493-.23a.713.713 0 01.311-.072.617.617 0 01.51.26c.123.174.146.4.067.622a3.62 3.62 0 01-.28.586c-.26.448-.566.756-.908.916-.218.1-.476.154-.77.154-.515 0-1-.157-1.117-.2h-.012l-3.781 1.763-.009.008a3.723 3.723 0 01-.271.563c-.264.448-.569.756-.908.919-.218.1-.479.154-.77.154a3.65 3.65 0 01-1.14-.207c-.266-.098-.443-.325-.451-.583-.009-.258.145-.496.403-.616l.493-.23.073-.35-.314-.168-.493.23a.713.713 0 01-.31.072.617.617 0 01-.51-.26.672.672 0 01-.068-.622c.076-.204.171-.398.28-.585.26-.449.566-.757.908-.916a1.83 1.83 0 01.77-.154c.516 0 1 .156 1.118.198h.011l3.779-1.761.008-.009c.076-.196.166-.384.272-.563.26-.448.566-.756.908-.916.218-.1.476-.154.77-.154zm0 .56c-.188 0-.376.028-.535.101-.566.266-.897 1.182-.897 1.182a.598.598 0 01-.268.294l-3.82 1.785a.627.627 0 01-.227.042.525.525 0 01-.174-.028s-.47-.174-.947-.174a1.27 1.27 0 00-.535.1c-.565.267-.896 1.183-.896 1.183-.028.081-.005.132.05.132a.166.166 0 00.073-.02l.552-.258a.437.437 0 01.18-.036.447.447 0 01.207.045l.549.294a.31.31 0 01.145.313l-.128.611a.49.49 0 01-.241.303l-.552.257c-.107.054-.104.126.008.168l.012.004.084.028c.161.05.505.142.851.142.188 0 .375-.025.535-.1.566-.267.896-1.183.896-1.183a.598.598 0 01.27-.294l3.82-1.787a.627.627 0 01.227-.042c.059 0 .118.008.174.028l.043.015c.128.042.514.159.903.159.188 0 .376-.026.535-.101.566-.266.897-1.182.897-1.182.028-.082.005-.132-.05-.132a.166.166 0 00-.074.02l-.551.257a.437.437 0 01-.18.037.447.447 0 01-.207-.045l-.549-.294a.306.306 0 01-.146-.314l.13-.61a.49.49 0 01.24-.303l.552-.258c.106-.05.104-.123-.008-.165 0 0-.471-.174-.947-.174z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTechServiceTvRegular;
