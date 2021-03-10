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

const IconMoneyRiseFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M2.887 7.455c0-.344.277-.624.616-.624h.375c-.008-.146-.03-.28-.03-.435 0-.042.008-.078.008-.12H3.5a.62.62 0 01-.616-.625c0-.344.277-.624.616-.624h.516C4.453 3.223 5.8 2.234 7.948 2.234c.804 0 1.505.137 2.084.412a.632.632 0 01.3.832.614.614 0 01-.818.305c-.417-.196-.944-.297-1.566-.297-1.428 0-2.294.499-2.66 1.54h2.036a.62.62 0 01.616.625.622.622 0 01-.616.625H5.088c0 .042-.008.078-.008.12 0 .155.017.292.025.435h2.219a.62.62 0 01.616.624.622.622 0 01-.616.625h-1.9c.423.823 1.247 1.227 2.524 1.227.63 0 1.16-.101 1.58-.303a.614.614 0 01.82.3.631.631 0 01-.293.835c-.586.28-1.294.423-2.107.423-2.022 0-3.344-.871-3.857-2.476h-.59a.628.628 0 01-.614-.63zm11.921-.56a.757.757 0 01-.686-.445.807.807 0 01.1-.843l3.144-3.216c.08-.11.263-.213.465-.235a.736.736 0 01.56.165c.033.028.087.081.115.115l3.05 3.131c.227.278.266.608.137.883a.758.758 0 01-.689.445l-1.145.008.002 1.978c0 .613-.49 1.11-1.092 1.11h-1.717a1.1 1.1 0 01-1.093-1.107l-.002-1.978-1.149-.011zm5.188 13.457c.53-.16.608-.325.608-.325v-.852c-.081.034-.16.07-.25.098-.605.185-1.386.286-2.204.286-.818 0-1.6-.101-2.205-.286-.092-.028-.17-.064-.254-.098v.854c.01.023.103.171.605.325.977.297 2.714.297 3.7-.002zm-6.149.002c.32-.098.513-.226.603-.313v-.9c-.082.031-.157.068-.247.096-.602.185-1.386.285-2.204.285-.818 0-1.6-.1-2.205-.285-.095-.028-.173-.067-.26-.101v.913c.078.073.26.199.613.308.983.294 2.726.294 3.7-.003zm-6.15 0c.34-.103.52-.238.604-.319v-.885c-.084.03-.157.067-.25.095-.601.185-1.386.286-2.204.286-.817 0-1.602-.101-2.204-.286-.095-.028-.174-.067-.26-.1v.898c.075.076.257.2.616.309.98.302 2.722.3 3.697.002zm-3.704-2.7c-.23.07-.364.137-.456.196.092.059.238.129.462.196.98.297 2.717.3 3.697 0 .216-.067.362-.134.457-.193a1.943 1.943 0 00-.46-.199c-.98-.3-2.72-.3-3.7 0zm6.151-2.32a2.013 2.013 0 00-.453.194c.09.059.224.129.459.199.98.297 2.723.297 3.697 0 .219-.067.362-.135.457-.193a1.69 1.69 0 00-.46-.2c-.977-.296-2.72-.296-3.7 0zm6.149-2.274a1.84 1.84 0 00-.454.194c.09.058.227.128.462.198.978.297 2.717.3 3.698 0a1.96 1.96 0 00.456-.193 1.832 1.832 0 00-.46-.199c-.982-.3-2.719-.302-3.702 0zm-.605 3.799v.913c.078.075.263.199.61.302.984.3 2.718.3 3.7 0 .326-.1.519-.232.606-.319v-.896c-.084.033-.16.07-.25.098-.599.182-1.383.285-2.204.285-.82 0-1.602-.1-2.205-.285-.095-.028-.173-.068-.257-.098zm.255-2.208c-.096-.028-.174-.067-.26-.1v.899c.078.075.257.199.615.308.98.3 2.72.3 3.698 0 .342-.104.524-.238.605-.32v-.885c-.084.034-.157.068-.25.096-.604.184-1.386.285-2.204.285-.818 0-1.6-.1-2.204-.283zm-6.41 3.076c.08.076.261.199.617.308.983.297 2.717.3 3.697 0 .34-.104.519-.232.6-.316v-.888c-.081.03-.157.067-.247.095-.599.185-1.383.286-2.204.286-.82 0-1.602-.101-2.205-.286-.095-.031-.173-.067-.26-.101v.902h.003zM20.35 11.86c1.23.376 1.487 1.04 1.487 1.53v6.63c0 .49-.257 1.154-1.487 1.53-.605.184-1.39.285-2.207.285-.818 0-1.6-.1-2.205-.286a2.87 2.87 0 01-.871-.417 3 3 0 01-.863.417c-.6.185-1.384.286-2.204.286-.821 0-1.603-.1-2.205-.286a3.004 3.004 0 01-.882-.417 2.98 2.98 0 01-.86.417c-.6.185-1.384.286-2.205.286-.82 0-1.605-.1-2.204-.286-.577-.176-1-.442-1.255-.773a.613.613 0 01-.238-.481v-2.311c0-.118.017-.238.048-.35v-.003c.154-.535.638-.93 1.44-1.174 1.204-.367 3.207-.367 4.411 0 .093.028.171.062.252.092v-.882c0-.123.017-.24.05-.353.152-.535.637-.93 1.438-1.173 1.204-.37 3.21-.37 4.411 0 .093.028.168.058.25.092v-.84c0-.12.017-.241.05-.353.154-.535.636-.93 1.437-1.174 1.207-.375 3.207-.375 4.412-.006z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconMoneyRiseFilled;
