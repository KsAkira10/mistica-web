/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconOpticalFiberLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.5 7.82c0-.806-.62-1.458-1.38-1.458-.76 0-1.38.652-1.38 1.453 0 .27.075.521.195.735l-4.72 4.968-1.583-1.667 6.79-7.15c.207.125.441.204.698.204.76 0 1.38-.652 1.38-1.452C21.5 2.652 20.88 2 20.12 2c-.76 0-1.38.652-1.38 1.453 0 .27.075.52.195.735l-6.794 7.146-1.583-1.666L15.273 4.7c.207.126.442.205.698.205.761 0 1.38-.652 1.38-1.452 0-.801-.619-1.453-1.38-1.453-.76 0-1.38.652-1.38 1.453 0 .27.076.52.195.735l-4.715 4.967-.477-.502a1.017 1.017 0 00-1.464 0l-5.53 5.82a.375.375 0 000 .511c.133.145.35.145.487 0l5.528-5.82a.335.335 0 01.487 0l5.595 5.885a.38.38 0 010 .513l-3.8 3.999a.37.37 0 000 .512c.067.07.155.107.244.107a.337.337 0 00.243-.107l3.8-4a1.134 1.134 0 000-1.54l-.479-.503 4.715-4.963c.208.126.442.205.7.205.76 0 1.379-.652 1.379-1.453zM10.443 21.273c0 .4-.31.726-.69.726-.38 0-.69-.326-.69-.726 0-.4.31-.727.69-.727.38 0 .69.326.69.727zM20.12 4.179c-.38 0-.69-.326-.69-.726 0-.4.31-.727.69-.727.38 0 .69.326.69.727 0 .4-.31.726-.69.726zm-4.839-.726c0-.4.31-.727.69-.727.38 0 .69.326.69.727 0 .4-.31.726-.69.726-.38 0-.69-.326-.69-.726zm4.84 3.64c.38 0 .689.326.689.726 0 .4-.31.727-.69.727-.38 0-.69-.326-.69-.727 0-.4.31-.726.69-.726z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.994 21.834c-6.434 0-9.838-3.4-9.838-9.835 0-6.434 3.404-9.843 9.838-9.843 3.14 0 5.574.813 7.238 2.418 1.725 1.663 2.602 4.162 2.602 7.423 0 6.437-3.403 9.837-9.84 9.837zm0-19.118c-2.989 0-5.294.762-6.849 2.261-1.61 1.555-2.429 3.916-2.429 7.02 0 2.22.42 4.062 1.247 5.5a.273.273 0 01.04-.05l.005-.005 3.325-3.283a.279.279 0 01.395.003l.465.47c.751-1.389 1.594-3.571 1.786-6.561a1.148 1.148 0 01-.61-.338c-.227-.238-.347-.56-.347-.95 0-.389.117-.71.347-.949.23-.238.538-.367.905-.367s.67.123.905.367.347.56.347.95c0 .39-.118.711-.347.95a1.18 1.18 0 01-.642.342c-.188 2.988-1.01 5.205-1.767 6.657l6.04-5.963a1.141 1.141 0 01-.206-.692c.009-.33.155-.639.435-.913.28-.275.588-.42.921-.429a1.2 1.2 0 01.902.373c.26.257.387.557.378.896-.008.33-.157.639-.434.913-.277.275-.588.42-.922.429h-.036c-.231 0-.444-.063-.637-.187l-5.954 5.88c1.449-.738 3.616-1.517 6.508-1.703a1.17 1.17 0 01.35-.672c.243-.235.56-.347.949-.347.39 0 .711.117.95.347.238.23.366.538.366.905s-.123.67-.367.905c-.243.235-.557.347-.95.347-.391 0-.71-.118-.949-.347a1.159 1.159 0 01-.331-.584c-2.985.195-5.16 1.038-6.548 1.79l.49.497a.279.279 0 01-.003.395L6.33 19.928c1.461.894 3.36 1.346 5.665 1.346 2.989 0 5.294-.76 6.851-2.258C20.46 17.462 21.277 15.1 21.277 12s-.818-5.465-2.432-7.02c-1.557-1.5-3.862-2.263-6.851-2.263zM5.858 19.614a.298.298 0 01.03-.035l3.243-3.201-.801-.813-.272-.274-.53-.538L4.4 17.84a.639.639 0 01-.147.117 6.737 6.737 0 001.605 1.657zm10.716-5.617c.112.109.274.162.49.162.215 0 .378-.053.49-.162a.547.547 0 00.163-.423c0-.182-.05-.32-.163-.423-.112-.104-.274-.163-.49-.163-.216 0-.378.053-.49.163a.548.548 0 00-.163.425v.014a.54.54 0 00.163.407zM9.85 6.29c-.104.109-.163.274-.163.49 0 .216.054.378.163.49.104.107.232.16.406.163h.017a.553.553 0 00.423-.163c.106-.11.162-.274.162-.49 0-.216-.053-.378-.162-.49a.547.547 0 00-.423-.163.549.549 0 00-.423.163zm6.014 2.39c.16-.004.314-.082.47-.236.157-.154.236-.306.239-.46.005-.15-.054-.28-.183-.406a.545.545 0 00-.417-.18c-.16.004-.313.082-.473.236-.16.154-.236.306-.238.46 0 .15.056.28.185.406.128.126.26.185.417.18z"
                />
            </svg>
        );
    }
};

export default IconOpticalFiberLight;
