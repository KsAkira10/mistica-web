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

const IconPayInvoiceRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.093 2.16c.148 0 .291.059.398.165l5.204 5.219a.559.559 0 01.16.341V7.9a.21.21 0 01.002.039V20.72c0 .712-.442 1.154-1.154 1.157h-.266l-.102-.001-.87-.001H7.972c-.367 0-.658-.107-.865-.32-.208-.213-.314-.501-.314-.868v-6.211c-1.373-.09-2.465-.517-3.246-1.271C2.627 12.317 2.16 11 2.16 9.297c0-1.703.468-3.02 1.387-3.907.781-.755 1.873-1.182 3.246-1.271v-.783c0-.722.451-1.17 1.177-1.17l.424-.002h.322l.186-.001h.414l.227-.001h1.018l.277-.001 5.255-.001zm-.561 1.12l-5.076.001h-.258l-1.51.001H8.14l-.093.001h-.074c-.022 0-.042 0-.056.003l-.002.05v.78c1.463.084 2.558.504 3.336 1.28.874.87 1.3 2.148 1.3 3.901 0 1.706-.468 3.02-1.387 3.908-.784.754-1.874 1.181-3.249 1.27v6.214c0 .023 0 .042.002.065.014 0 .034.003.06.003h12.758V8.498h-2.619c-.857 0-1.549-.324-2-.937-.384-.521-.58-1.222-.582-2.079l-.001-2.202zm3.292 13.93a.56.56 0 110 1.12H10.63a.562.562 0 01-.56-.56c0-.307.251-.56.56-.56h8.193zm0-3.277a.56.56 0 110 1.12h-7.101a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h7.1zM7.387 5.222l-.034.002-.032-.002-.213.003C4.534 5.304 3.28 6.638 3.28 9.297c0 2.743 1.334 4.076 4.073 4.076 2.74 0 4.073-1.333 4.073-4.076 0-1.44-.316-2.456-.97-3.109-.647-.648-1.65-.961-3.07-.966zm-.034.465a.42.42 0 01.42.42v.463c.354.049.68.16.947.324.205.126.236.291.236.378a.405.405 0 01-.404.403.54.54 0 01-.238-.064l-.006-.003a2.075 2.075 0 00-.534-.21l-.001 1.455.052.009c1.163.213 1.416.919 1.416 1.488 0 .48-.176.886-.507 1.174-.244.212-.572.353-.96.414v.37a.42.42 0 11-.84 0l-.001-.364a2.873 2.873 0 01-1.235-.484.427.427 0 01-.196-.364.415.415 0 01.417-.412c.095.003.188.03.266.084.248.165.499.28.748.34l-.001-1.54c-1.074-.23-1.31-.905-1.31-1.45 0-.823.502-1.395 1.31-1.54l.001-.471a.42.42 0 01.42-.42zm11.47 4.423a.56.56 0 110 1.12h-4.915a.562.562 0 01-.56-.56c0-.308.252-.56.56-.56h4.916zM7.776 9.705v1.41c.402-.102.64-.365.64-.737 0-.268-.087-.532-.64-.673zM6.45 8.082c0 .153 0 .441.483.615V7.409a.67.67 0 00-.483.673zm10.204-4.006v1.4c0 .608.126 1.099.364 1.418.238.32.597.482 1.098.482l1.826-.001-3.288-3.299z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPayInvoiceRegular;
