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

const IconTramTrainRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.1 3.4c.333 0 .602.272.602.61 0 .337-.27.611-.602.611h-5.944v1.656c0 .336-.27.61-.603.61h-1.395L12.17 7.89h2.81c.198.009 4.215.244 6.066 4.042 2.076 4.258-.47 5.953-1.56 6.675l-.073.048a2.051 2.051 0 01-1.131.344h-.017l-.625-.002c-.092.994-.776 1.627-1.807 1.627-1.036 0-1.72-.639-1.81-1.639l-2.57-.005c-.087 1-.774 1.641-1.81 1.641-1.04 0-1.723-.644-1.81-1.647h-.456c-.084 1.006-.77 1.647-1.81 1.647-1.039 0-1.725-.644-1.81-1.647H2.753a.605.605 0 01-.602-.61V8.5c0-.163.064-.317.176-.432a.596.596 0 01.426-.179h5.294L9.08 6.843a.606.606 0 01-.384-.566V4.62H2.752a.605.605 0 01-.602-.61c0-.336.269-.611.602-.611zm-5.267 14.74c-.448 0-.621.176-.621.63s.176.63.621.63c.449 0 .622-.176.622-.63s-.173-.63-.622-.63zm-6.19 0c-.448 0-.622.176-.622.63s.177.63.622.63c.448 0 .622-.176.622-.63s-.174-.63-.622-.63zm-4.076 0c-.448 0-.621.176-.621.63s.173.63.621.63c.449 0 .622-.176.622-.63s-.173-.63-.622-.63zm14.7-1.883H3.358v1.502h.639c.3-.527.851-.838 1.574-.838.723 0 1.275.31 1.574.838h.928c.3-.53.851-.84 1.574-.84.722 0 1.274.31 1.574.84l3.036.005c.297-.53.852-.846 1.577-.846.732 0 1.286.32 1.583.857l.857.006c.168.028.334-.048.48-.146l.075-.05c.482-.322 1.07-.714 1.44-1.328zm-6.445-7.143l-10.468.003v.726h9.082c.333 0 .602.271.602.61v3.345c0 .336-.269.61-.602.61H3.354v.62h17.247c.008 0 .014.005.022.005a3.469 3.469 0 00-.02-.557h-6.178a.605.605 0 01-.603-.611v-4.75zm1.208.006v4.132h5.266a8.911 8.911 0 00-.33-.776c-1.424-2.92-4.41-3.308-4.936-3.356zm-9.516 1.94H3.357v2.123h2.157V11.06zm3.14 0H6.72v2.123h1.935V11.06zm3.18 0H9.858v2.123h1.974V11.06zm-.379-4.174h-.717L9.75 7.89h.718l.988-1.003zm2.496-2.266h-4.05v1.045h4.05V4.621z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTramTrainRegular;
