/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconFootballBallRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 6.488 6.488 2 12 2s10 4.488 10 10-4.488 10-10 10S2 17.512 2 12zm17.67 1.147l.557 1.243c.2-.69.315-1.412.338-2.166l-.896.923zm.813-2.372l-1.61 1.66-2.262-.357-2.02-3.95.928-1.823 2.413-.48a8.568 8.568 0 012.55 4.95zm-14.25 4.721l-.275 2.574a8.549 8.549 0 004.968 2.43l1.499-1.676-.197-2.386-3.93-1.997-2.066 1.055zM3.91 14.83l1.253.608-.16 1.499A8.698 8.698 0 013.91 14.83zm10.6 5.366l-1.34-.599-.86.964a8.51 8.51 0 002.2-.365zm-1.875-4.758l-3.747-1.901.649-4.15 4.15-.663 1.91 3.739-2.962 2.975zm4.223-10.494a8.4 8.4 0 00-1.974-1.014l.68 1.275 1.294-.26zm-3.39-1.384l1.15 2.148-.982 1.937-4.378.704L7.695 6.79l.31-2.363a8.536 8.536 0 014-.992c.498-.004.987.041 1.462.123zM6.643 6.551l.178-1.376a8.834 8.834 0 00-1.696 1.71l1.518-.334zm-2.3 1.609l2.629-.58 1.53 1.526-.685 4.378-2.052 1.052-2.203-1.07A8.586 8.586 0 013.435 12a8.413 8.413 0 01.91-3.84zm9.141 10.402l2.4 1.07a8.64 8.64 0 003.802-3.844l-1.042-2.308-2.198-.348-3.149 3.159.187 2.271z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.017 2c.103 0 .204 0 .305.003 1.978.028 9.392.742 9.39 9.874 0 9.115-7.345 9.792-9.323 9.81h-.196c-.252 0-.51-.004-.736-.01-1.928-.044-9.432-.806-9.432-9.86 0-9.072 7.516-9.775 9.395-9.811.18-.003.387-.006.597-.006zm0 1.23c-.2 0-.398.002-.572.005-.549.012-1.263.07-2.036.233l1.846 1.339c.353.266.89.26 1.227.005l1.863-1.353a10.927 10.927 0 00-2.043-.227l-.285-.002zm.179 17.224h.185c.302 0 .652-.017 1.034-.056l.016-.085c.009-.049.017-.096.031-.142l.835-2.566c.081-.266.227-.515.409-.74l-.535-.873c-.291.134-.61.212-.947.212H10.49c-.353 0-.68-.095-.983-.246l-.583.88c.177.218.317.464.4.73l.833 2.564c.013.038.02.078.026.12.005.027.009.056.016.084.482.067.924.1 1.291.11.216.005.465.008.706.008zm3.272-2.476l-.712 2.184c1.51-.37 3.194-1.176 4.342-2.901h-2.633a1.133 1.133 0 00-.62.198 1.015 1.015 0 00-.377.519zM4.7 17.218h2.476c.205 0 .418.07.597.202.182.132.317.317.381.527l.683 2.106c-1.456-.412-3.03-1.227-4.137-2.835zm4.82-2.963l-.14-.423-.697-2.154a1.045 1.045 0 01.384-1.177l2.193-1.593a1.07 1.07 0 011.23.005l2.188 1.591c.372.27.526.74.383 1.177l-.834 2.566a1.055 1.055 0 01-1.003.73h-2.723a1.036 1.036 0 01-.98-.722zm9.236-3.947l1.715 1.247c-.048-2.126-.541-3.717-1.28-4.908l-.807 2.49c-.073.21-.073.437-.003.65.07.216.204.4.375.521zm-3.005-6.434c.913.35 1.823.89 2.605 1.709a2.224 2.224 0 00-.311.61l-.832 2.56c-.093.272-.123.56-.104.85l-1.154.484a2.235 2.235 0 00-.557-.58l-2.18-1.583a2.073 2.073 0 00-.733-.341V6.15c.266-.073.515-.187.725-.347l2.182-1.586c.129-.09.231-.203.332-.314l.027-.03zm-7.72.038l-.028-.032c-.919.35-1.835.89-2.617 1.703.11.168.205.347.267.54l.832 2.566c.092.272.123.566.1.86l1.194.552c.15-.227.339-.434.571-.6l2.182-1.585c.213-.16.462-.269.726-.339V6.148a2.146 2.146 0 01-.734-.352l-2.177-1.58c-.12-.087-.218-.197-.315-.304zM4.539 6.68l.778 2.403c.07.199.068.426-.002.641a1.05 1.05 0 01-.381.527l-1.656 1.205c.05-2.065.535-3.617 1.26-4.776zm-.485 9.341c.126-.022.255-.036.387-.036v.003h2.714a2.19 2.19 0 01.77.137l.664-1.003a.225.225 0 00-.024-.03l-.023-.031h-.05l-.976-3.003a2.228 2.228 0 01-.109-.773l-1.23-.569a2.262 2.262 0 01-.526.532l-2.177 1.583a.736.736 0 01-.094.054.902.902 0 00-.065.036c.098 1.22.361 2.24.74 3.1zm15.123.006h-2.73c-.247 0-.497.048-.732.129l-.596-.97a2.25 2.25 0 00.277-.56l.835-2.565c.086-.266.117-.535.109-.801l1.17-.493c.15.212.326.397.53.543l2.182 1.588c.041.03.087.054.132.078.026.013.051.026.075.04-.098 1.216-.358 2.23-.725 3.081a2.21 2.21 0 00-.527-.07z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconFootballBallRegular;
