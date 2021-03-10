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

const IconLossTheftDevicesLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.732 2.156c1.03 0 1.773.244 2.272.745.498.502.739 1.241.739 2.266v13.656c0 1.036-.244 1.781-.745 2.28-.496.493-1.238.731-2.266.731H10.63c-1.028 0-1.77-.238-2.266-.731-.502-.496-.745-1.244-.745-2.28l-.001-4.096-.011.001c-1.341-.048-2.39-.43-3.126-1.138-.817-.787-1.232-1.966-1.232-3.507 0-1.54.415-2.72 1.232-3.507.737-.71 1.791-1.091 3.134-1.138v-.27c0-1.009.245-1.746.743-2.25.51-.512 1.252-.762 2.272-.762h7.1zm0 .56H10.63c-.863 0-1.473.194-1.871.594-.392.395-.583 1.003-.583 1.857v.271h.014c1.34.048 2.392.43 3.126 1.138.818.788 1.233 1.967 1.233 3.507 0 1.541-.415 2.72-1.233 3.507-.737.711-1.792 1.093-3.138 1.139l.001 4.094c0 1.742.711 2.45 2.451 2.45h7.1c1.743 0 2.452-.708 2.452-2.45V5.167c0-.87-.188-1.484-.574-1.87-.387-.387-1.003-.58-1.877-.58zm-3.546 15.11c.504 0 .832.266.832.834 0 .275-.076.477-.21.614-.146.148-.362.221-.622.221s-.477-.073-.622-.221c-.135-.137-.21-.339-.21-.614 0-.568.327-.834.832-.834zM7.9 5.994c-1.33 0-2.35.33-3.031.986-.703.678-1.062 1.722-1.062 3.103 0 1.381.356 2.426 1.06 3.104.677.656 1.697.986 3.03.986 1.333 0 2.35-.33 3.028-.986.703-.678 1.059-1.723 1.059-3.104 0-1.38-.356-2.425-1.059-3.103-.675-.656-1.695-.986-3.025-.986zm0 6.479a.342.342 0 110 .683.342.342 0 010-.683zm.003-5.4c.655 0 1.213.229 1.565.646.306.359.43.827.348 1.317-.11.664-.58 1.078-.782 1.258-.08.072-.17.142-.257.215-.252.205-.597.488-.597.667v.546a.28.28 0 01-.28.28.28.28 0 01-.28-.28v-.546c0-.448.426-.796.804-1.104a9.47 9.47 0 00.24-.199c.171-.148.524-.462.6-.927.053-.33-.022-.627-.221-.863-.247-.29-.653-.45-1.14-.45-.415 0-.762.134-1.003.392-.23.24-.356.585-.356.966v.118a.28.28 0 01-.28.28.28.28 0 01-.28-.28V8.99c0-.524.18-1.006.507-1.35.35-.373.837-.569 1.412-.569z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLossTheftDevicesLight;
