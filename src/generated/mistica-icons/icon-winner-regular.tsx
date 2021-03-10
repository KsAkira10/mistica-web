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

const IconWinnerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.55 18.02l1.6.588-2.326-5.039c-.899.798-2.112 1.258-3.596 1.395l2.425 5.26.597-1.607a1.024 1.024 0 011.3-.597zm-9.213 2.202l2.445-5.306c-1.462-.207-2.63-.762-3.47-1.666l-2.474 5.367 1.602-.594a1.023 1.023 0 011.297.59l.6 1.609zM12.23 3.395c-3.54 0-5.19 1.65-5.19 5.19 0 3.541 1.65 5.188 5.19 5.188 3.544 0 5.194-1.647 5.194-5.187 0-3.544-1.65-5.19-5.194-5.19zM20.513 18.6c.163.353.112.759-.134 1.061-.244.3-.63.435-1.009.35l-2.036-.742-.731 1.961c-.207.403-.55.61-.927.61h-.028a1.002 1.002 0 01-.891-.585l-2.765-5.994-2.762 5.994a1.006 1.006 0 01-.89.588h-.031c-.376 0-.717-.204-.894-.537l-.764-2.034-1.958.72c-.457.106-.84-.028-1.087-.328a1.005 1.005 0 01-.132-1.059l2.986-6.479c.009-.02.025-.033.037-.05-.46-.93-.704-2.09-.704-3.485 0-4.38 2.37-6.431 6.435-6.431 4.064 0 6.437 2.05 6.437 6.431 0 1.633-.33 2.942-.953 3.939l2.801 6.07zm-9.24-10.68l-1.163.176.854.837c.143.143.21.373.177.572l-.196 1.187.983-.568a.631.631 0 01.608 0l.986.54-.2-1.17a.675.675 0 01.18-.564l.832-.846L13.2 7.92a.654.654 0 01-.49-.378l-.508-1.07-.459 1.09a.658.658 0 01-.47.358zM9.865 9.588l-.622-.633a1.24 1.24 0 01-.29-1.27 1.21 1.21 0 01.971-.823l.835-.126.378-.798a1.204 1.204 0 011.095-.698c.47 0 .891.266 1.095.698l.381.8.832.127c.451.067.824.384.972.823.149.451.037.936-.291 1.27l-.622.632.149.902a1.218 1.218 0 01-1.773 1.289l-.743-.406-.736.403a1.191 1.191 0 01-1.275-.076 1.226 1.226 0 01-.501-1.212l.145-.902z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconWinnerRegular;
