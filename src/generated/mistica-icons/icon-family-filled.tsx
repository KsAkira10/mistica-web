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

const IconFamilyFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.21 5.395c.289.454.521.748.919 1.16.04.039.17.176.286.257a.787.787 0 00.319.146c.03.008.064.014.098.017h.081a.378.378 0 00.098-.017.822.822 0 00.32-.146c.114-.084.249-.218.285-.257.003-.003.006-.009.011-.012.39-.406.62-.7.908-1.148.364-.571.613-1.134.742-1.68.14-.595.026-1.088-.325-1.39a1.296 1.296 0 00-.776-.297 1.756 1.756 0 00-.94.235c-.104.06-.21.118-.326.188a.091.091 0 01-.036.011.064.064 0 01-.04-.011 5.919 5.919 0 00-.324-.188 1.756 1.756 0 00-.941-.235c-.297.017-.575.12-.78.297-.346.3-.464.793-.324 1.39.132.546.38 1.109.745 1.68M6.947 12.21c-.874 0-1.558-.232-2.031-.689-.49-.473-.737-1.18-.737-2.092 0-.914.25-1.62.737-2.096.473-.462 1.157-.692 2.03-.692.875 0 1.558.233 2.034.692.49.48.743 1.185.743 2.098 0 .914-.252 1.62-.743 2.096-.476.45-1.16.683-2.033.683zm9.843 0c-.874 0-1.558-.232-2.03-.689-.491-.473-.738-1.18-.738-2.092 0-.914.25-1.62.737-2.096.473-.462 1.157-.692 2.03-.692.875 0 1.558.233 2.035.692.49.48.742 1.185.742 2.098 0 .914-.252 1.62-.742 2.096-.477.45-1.16.683-2.034.683zM11.888 10c.571 0 1.02.151 1.328.454.322.314.487.773.487 1.372 0 .597-.162 1.06-.487 1.37-.308.297-.76.448-1.328.448-.571 0-1.02-.151-1.328-.45-.322-.309-.482-.771-.482-1.37 0-.6.16-1.06.482-1.37.311-.303.757-.454 1.328-.454zm-3.252 4.395c.535 0 1.02.09 1.445.258-.59.115-1.098.375-1.482.778-.49.51-.747 1.205-.747 2v4.283H2.104a.08.08 0 01-.079-.078V17.49c0-.885.275-1.641.793-2.185.569-.594 1.409-.907 2.437-.907h3.38v-.003zm4.356 1.011c.672 0 1.224.205 1.593.594.342.356.524.852.524 1.431v4.283H8.672v-4.283c0-.58.18-1.075.518-1.428.37-.39.922-.594 1.594-.594h2.208v-.003zm7.924-.103c.521.546.798 1.3.798 2.187v4.146a.076.076 0 01-.078.075H15.93v-4.28c0-.798-.26-1.49-.75-2.002-.393-.407-.908-.67-1.508-.782.42-.162.9-.25 1.426-.25h3.378c1.028-.002 1.871.312 2.44.906z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconFamilyFilled;
