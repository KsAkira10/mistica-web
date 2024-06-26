'use client';
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

const IconUserSupportLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.893 14.69c-.38 0-.693-.327-.693-.727a4.3 4.3 0 0 1 1.177-2.983l.933-.98c.347-.363.278-1.163 0-1.563s-.762-.655-1.211-.655h-.175c-.484 0-.934.292-1.178.727-.205.364-.624.472-.933.256a.71.71 0 0 1-.244-.98 2.73 2.73 0 0 1 2.389-1.455h.175c.903 0 1.768.436 2.32 1.2.66.907.762 2.543-.103 3.454l-.933.98a2.82 2.82 0 0 0-.762 1.963c-.069.436-.381.764-.762.764M12.552 16.074c0 .402-.31.728-.693.728s-.694-.326-.694-.728.31-.727.694-.727.693.325.693.727"
                />
                <path
                    fill={fillColor}
                    d="M3.165 22a.66.66 0 0 1-.484-.216.72.72 0 0 1-.175-.692l1.455-5.565a9.95 9.95 0 0 1-.796-3.89C3.165 6.326 7.287 2 12.346 2c5.06 0 9.182 4.326 9.182 9.636s-4.122 9.636-9.182 9.636c-1.283 0-2.53-.292-3.706-.8l-5.303 1.492C3.302 22 3.234 22 3.165 22m9.178-18.545c-4.298 0-7.795 3.675-7.795 8.181 0 1.236.244 2.4.762 3.49.069.145.069.329.034.508l-1.211 4.623 4.362-1.24c.175-.036.347-.036.484.036 1.04.508 2.183.8 3.326.8 4.331-.036 7.828-3.707 7.828-8.217s-3.497-8.18-7.79-8.18"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.125 21.888a.33.33 0 0 0 .26.112c.04 0 .076 0 .116-.004l5.883-1.629a9.8 9.8 0 0 0 3.995.852c1.775 0 3.515-.444 4.994-1.368.148-.108.224-.332.112-.517-.108-.148-.332-.224-.516-.112a8.7 8.7 0 0 1-4.59 1.297c-1.332 0-2.592-.3-3.775-.816-.076-.036-.184-.036-.26-.036h-.036L2.905 21.11l1.448-5.443c.04-.112 0-.22-.036-.296-.52-1.189-.816-2.445-.816-3.742 0-4.891 3.995-8.89 8.882-8.89s8.881 4.003 8.881 8.89a8.7 8.7 0 0 1-1.295 4.594c-.112.18-.072.405.111.517.18.112.404.072.516-.112a9.55 9.55 0 0 0 1.404-5C22 6.336 17.67 2 12.379 2c-5.29 0-9.622 4.335-9.622 9.63 0 1.409.292 2.741.848 3.962l-1.592 5.924c-.036.148 0 .26.112.372"
                />
                <path
                    fill={fillColor}
                    d="M12.007 14.596c-.224 0-.372-.149-.372-.373 0-1.076.48-2.185 1.296-3.001l1.075-1.077c.556-.556.48-1.705.036-2.293a2.21 2.21 0 0 0-1.775-.889h-.184c-.704 0-1.368.372-1.74 1-.112.185-.336.225-.516.149-.184-.112-.224-.337-.148-.517.48-.852 1.404-1.368 2.404-1.368h.184c.923 0 1.775.444 2.331 1.148.628.853.776 2.406-.112 3.258L13.41 11.71c-.627.704-1.035 1.629-1.035 2.517.004.216-.144.369-.368.369M12.007 17.185a.556.556 0 1 0 0-1.112.556.556 0 0 0 0 1.112M18.889 18.89a.74.74 0 1 0 0-1.48.74.74 0 0 0 0 1.48"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.899 6.68a.32.32 0 0 1-.323-.322v-.521c0-.347.3-.583.519-.754l.045-.035q.043-.034.075-.063l.023-.02c.198-.176.294-.268.294-.49 0-.364-.337-.618-.636-.618-.364 0-.636.266-.636.619a.32.32 0 0 1-.336.308.32.32 0 0 1-.308-.308c0-.71.563-1.264 1.28-1.264.694 0 1.28.58 1.28 1.264 0 .523-.297.784-.515.974l-.023.02a3 3 0 0 1-.148.123c-.082.062-.244.194-.272.255v.51a.315.315 0 0 1-.32.322M17.24 7.277a.32.32 0 0 0-.095-.23.32.32 0 0 0-.238-.095h-.009a.33.33 0 0 0-.324.327c0 .087.036.169.098.227a.32.32 0 0 0 .235.096.32.32 0 0 0 .238-.098.3.3 0 0 0 .095-.227"
                />
                <path
                    fill={fillColor}
                    d="M14.568 10.638q.046.008.093.008c.306 0 .497-.292.576-.413v-.001c.037-.059.676-1.017 1.006-1.51h4.219a1.4 1.4 0 0 0 1.372-1.372V3.526a1.37 1.37 0 0 0-.409-.96 1.39 1.39 0 0 0-.963-.41h-7.017c-.762 0-1.457.656-1.457 1.373v3.823a1.4 1.4 0 0 0 1.373 1.373h.812v1.358c0 .12 0 .485.395.555m-1.123-7.922h7.017c.425 0 .812.387.812.813v3.826a.844.844 0 0 1-.812.812h-4.37a.27.27 0 0 0-.233.124 417 417 0 0 0-1.095 1.641l-.014.02-.017.025V8.445a.28.28 0 0 0-.28-.28h-1.092a.844.844 0 0 1-.813-.813V3.53c0-.41.443-.813.897-.813M8.621 15.65c-1.134 0-2.014-.323-2.613-.959-.569-.6-.855-1.442-.855-2.51s.289-1.91.855-2.512c.6-.636 1.479-.958 2.613-.958 1.135 0 2.014.322 2.614.958.566.6.854 1.445.854 2.512 0 1.068-.289 1.91-.854 2.513-.6.633-1.48.955-2.614.955m0-6.379c-1.328 0-2.907.504-2.907 2.91 0 1.328.504 2.908 2.907 2.908s2.908-1.583 2.908-2.908-.504-2.91-2.908-2.91M2.156 21.554c0 .154.126.28.28.28h12.37a.28.28 0 0 0 .28-.277v-1.042c0-1.27-.33-2.238-.977-2.894-.647-.655-1.617-.986-2.877-.986H6.01c-1.26 0-2.227.33-2.877.983s-.978 1.628-.978 2.894zm12.37-.28H2.716v-.762c0-1.112.272-1.955.813-2.499.54-.543 1.375-.818 2.482-.818h5.22c1.107 0 1.945.275 2.483.818.537.544.812 1.384.812 2.499z"
                />
            </svg>
        );
    }
};

export default IconUserSupportLight;
