/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTramTrainRegular: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M14.984 7.88c.199.009 4.216.244 6.067 4.042 2.076 4.258-.47 5.953-1.56 6.675l-.073.048a2.051 2.051 0 01-1.132.345h-.016l-.625-.003c-.093.994-.776 1.627-1.807 1.627-1.036 0-1.72-.639-1.81-1.639l-2.57-.005c-.088 1-.774 1.641-1.81 1.641-1.04 0-1.723-.644-1.81-1.647h-.456c-.084 1.006-.77 1.647-1.81 1.647s-1.725-.644-1.81-1.647H2.758a.605.605 0 01-.602-.61V8.49c0-.163.064-.317.176-.432a.596.596 0 01.426-.179h5.294l1.034-1.047a.606.606 0 01-.384-.566V4.61H2.757A.605.605 0 012.155 4c0-.336.269-.611.602-.611h18.347c.334 0 .603.272.603.61 0 .337-.27.611-.603.611H15.16v1.656c0 .336-.268.61-.602.61h-1.395l-.989 1.003h2.81zm3.773 9.745l.076-.05.004-.003c.481-.322 1.067-.713 1.435-1.325H3.362v1.502h.639c.3-.527.851-.838 1.574-.838.723 0 1.274.31 1.574.838h.927c.3-.53.852-.84 1.575-.84.722 0 1.274.31 1.574.84l3.036.005c.297-.53.852-.846 1.577-.846.731 0 1.286.32 1.583.857l.857.006c.168.028.333-.048.479-.146zm-2.919 1.765c.448 0 .622-.177.622-.63 0-.454-.174-.63-.622-.63s-.622.176-.622.63c0 .453.177.63.622.63zm-6.812-.63c0 .453.176.63.622.63.448 0 .622-.177.622-.63 0-.454-.174-.63-.622-.63s-.622.176-.622.63zm-3.454.63c.448 0 .622-.177.622-.63 0-.454-.174-.63-.622-.63s-.622.176-.622.63c0 .453.174.63.622.63zm-.053-6.216v-2.123H3.362v2.123H5.52zm1.204 0H8.66v-2.123H6.723v2.123zm5.115 0v-2.123H9.863v2.123h1.975zm1.99-4.07l-10.469.003v.726h9.082c.333 0 .602.271.602.61v3.345c0 .336-.27.61-.602.61H3.358v.62h17.247c.004 0 .007 0 .011.002a.02.02 0 00.011.003 3.471 3.471 0 00-.02-.557H14.43a.605.605 0 01-.602-.611v-4.75zM11.46 6.877h-.717L9.754 7.88h.717l.99-1.003zm-1.555-1.22h4.05V4.61h-4.05v1.045zM20.3 13.241a8.897 8.897 0 00-.33-.776c-1.423-2.92-4.41-3.308-4.936-3.356v4.132H20.3z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTramTrainRegular;
