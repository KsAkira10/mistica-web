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

const IconBeachUmbrellaLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M21.072 7.009l-1.728 1.04c-3.116-3.467-6.314-4.224-8.413-4.256 1.996-.798 3.9-.991 5.677-.558 1.678.412 3.224 1.388 4.601 2.905.112.12.164.29.147.45a.584.584 0 01-.284.419zM9.343 4.784c1.374-.251 5.368-.5 9.241 3.727l-5.21 3.137-4.03-6.864zM7.975 14.902c-2.029-4.83-.216-8.335.655-9.604l3.996 6.8-4.65 2.804zm-2.874 1.733a.602.602 0 01-.514.059.593.593 0 01-.368-.327c-.778-1.877-.98-3.66-.6-5.306.442-1.956 1.69-3.702 3.695-5.207-.95 1.883-1.929 5.262-.099 9.507l-2.114 1.274zM21.867 5.567c-1.494-1.645-3.192-2.71-5.046-3.166-2.493-.605-5.189-.117-8.024 1.456l-.442-.754a.445.445 0 00-.602-.158.42.42 0 00-.17.57l.01.015.452.775C5.113 6.11 3.335 8.32 2.757 10.873c-.418 1.816-.202 3.775.643 5.812.158.38.482.678.918.825.17.05.316.073.459.073.269 0 .547-.073.786-.217l7.505-4.522 5.657 9.632a.441.441 0 00.602.158.42.42 0 00.17-.57c-.004-.006-.007-.008-.01-.014l-5.674-9.656 7.724-4.654c.377-.228.625-.603.693-1.038a1.425 1.425 0 00-.363-1.135z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconBeachUmbrellaLight;
