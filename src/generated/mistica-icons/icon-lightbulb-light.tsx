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

const IconLightbulbLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.309 3.402V2.7c0-.387.31-.701.691-.701s.691.314.691.7v.702c0 .386-.31.7-.691.7a.697.697 0 0 1-.691-.7m9 7.017h-.519a.697.697 0 0 0-.691.7c0 .387.31.701.691.701h.519a.697.697 0 0 0 .691-.7c0-.387-.31-.701-.691-.701m-16.618 0h.519c.38 0 .691.314.691.7 0 .387-.31.701-.691.701H3.69a.697.697 0 0 1-.691-.7c0-.387.31-.701.691-.701M5.77 6.663l-.616-.36a.684.684 0 0 0-.944.257.704.704 0 0 0 .252.957l.616.359a.683.683 0 0 0 .944-.256.71.71 0 0 0-.252-.957m2.42-1.527a.69.69 0 0 1-.6-.35l-.345-.607a.705.705 0 0 1 .253-.957.685.685 0 0 1 .944.256l.345.606c.19.333.08.764-.252.957a.7.7 0 0 1-.346.095m7.262-.072a.683.683 0 0 0 .944-.256l.354-.625a.71.71 0 0 0-.252-.957.684.684 0 0 0-.944.256l-.355.625c-.19.332-.08.76.253.957m3.399 1.24a.685.685 0 0 1 .944.256c.19.337.08.763-.253.957l-.616.359a.688.688 0 0 1-.944-.256.705.705 0 0 1 .253-.957zm-.793 4.995c0 2.13-1.055 4.061-2.828 5.193-.066.04-.16.122-.221.176a1.75 1.75 0 0 1 .443 2.524c.217.292.354.656.354 1.052 0 .97-.775 1.756-1.732 1.756H9.917a1.744 1.744 0 0 1-1.732-1.756c0-.396.133-.76.354-1.052a1.746 1.746 0 0 1 .448-2.525 3 3 0 0 0-.222-.175C6.993 15.36 5.938 13.43 5.938 11.3c0-3.387 2.716-6.14 6.058-6.14 3.345 0 6.062 2.753 6.062 6.14m-3.98 8.599H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35a.35.35 0 0 0-.346-.35m.346-1.757a.35.35 0 0 0-.346-.35H9.922a.35.35 0 0 0-.346.35c0 .193.155.35.346.35h4.156c.19 0 .346-.157.346-.35M12 6.56c-2.579 0-4.675 2.125-4.675 4.74a4.72 4.72 0 0 0 2.179 4.007c.08.052.76.501 1.003 1.082h2.982c.242-.58.923-1.03 1.003-1.082l.007-.005a4.73 4.73 0 0 0 2.176-4.003c0-2.614-2.096-4.74-4.675-4.74"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.66 3.783V2.357c0-.197.153-.357.34-.357s.34.16.34.357v1.426a.35.35 0 0 1-.34.357.35.35 0 0 1-.34-.357m8.5 6.79h-1.357c-.187 0-.34.16-.34.357s.152.357.34.357h1.357c.188 0 .34-.16.34-.357a.35.35 0 0 0-.34-.357m-16.32 0h1.362c.187 0 .335.16.335.357a.35.35 0 0 1-.34.357H3.84a.35.35 0 0 1-.339-.357c0-.197.152-.357.34-.357m2.567-3.04a.366.366 0 0 0-.126-.49l-1.18-.713a.33.33 0 0 0-.465.133.366.366 0 0 0 .126.489l1.18.713a.333.333 0 0 0 .466-.133M8.601 5.1a.34.34 0 0 1-.296-.178l-.683-1.24a.373.373 0 0 1 .126-.489.336.336 0 0 1 .466.133l.683 1.24a.373.373 0 0 1-.126.488.33.33 0 0 1-.17.046m6.628-.05a.33.33 0 0 0 .17.046c.118 0 .23-.064.296-.179l.679-1.239a.366.366 0 0 0-.126-.49.33.33 0 0 0-.466.133l-.679 1.24a.37.37 0 0 0 .126.489m3.665 1.28a.337.337 0 0 1 .466.133c.096.169.039.388-.127.489l-1.179.713a.337.337 0 0 1-.466-.133.373.373 0 0 1 .127-.489zm-1.114 4.6c0 1.427-.462 2.766-1.288 3.827h-.005a.33.33 0 0 1-.257.133.35.35 0 0 1-.34-.357c0-.087.036-.165.084-.228l-.005-.005a5.5 5.5 0 0 0 1.127-3.365c0-2.954-2.289-5.36-5.1-5.36-2.812 0-5.101 2.406-5.101 5.36 0 1.888.918 3.603 2.454 4.581q.008.009.014.01c.718.484 1.144 1.298 1.153 2.194h3.351c.657 0 1.188.558 1.188 1.249 0 .351-.139.667-.357.891.222.229.357.544.357.892 0 .69-.53 1.248-1.188 1.248H10.13c-.658 0-1.189-.558-1.189-1.248 0-.352.14-.668.357-.892a1.27 1.27 0 0 1-.357-.892c0-.585.383-1.074.901-1.207v-.018c0-.663-.322-1.271-.857-1.623-1.732-1.116-2.764-3.05-2.764-5.18 0-3.348 2.594-6.073 5.78-6.073s5.78 2.711 5.78 6.063m-3.909 9.287H10.13a.52.52 0 0 0-.51.535.52.52 0 0 0 .51.535h3.742c.279 0 .51-.238.51-.535a.52.52 0 0 0-.51-.535m-3.742-1.788a.52.52 0 0 0-.51.535.52.52 0 0 0 .51.535h3.742a.52.52 0 0 0 .51-.535.52.52 0 0 0-.51-.535zm4.252-2.145c0-.393.304-.713.679-.713.374 0 .679.32.679.713 0 .394-.305.714-.68.714-.374 0-.678-.32-.678-.714"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.5 4.03c0 .23.187.415.42.415.23 0 .42-.185.42-.414V2.566a.417.417 0 0 0-.42-.415.417.417 0 0 0-.42.415zm6.25 6.953c0-5.246-4.415-5.692-5.547-5.717-.174-.006-.37-.006-.55-.006-1.162.006-5.484.401-5.484 5.692 0 2.67 1.112 4.104 2.362 4.858v1.512c0 .524.154.933.465 1.202.29.26.74.395 1.935.395h2.045c1.224 0 1.67-.135 1.96-.395.303-.27.452-.678.452-1.202v-1.518c1.249-.762 2.361-2.182 2.361-4.82m-.841 0c0 1.939-.661 3.322-1.964 4.118l-.398.243v1.978c0 .196-.03.457-.179.588-.132.12-.6.18-1.395.18h-2.045c-.966 0-1.277-.096-1.38-.188-.15-.129-.18-.387-.18-.58v-1.975l-.4-.243c-1.3-.787-1.961-2.185-1.961-4.152 0-4.367 3.25-4.857 4.647-4.865h.028c.162 0 .339 0 .501.005 4.387.096 4.726 3.768 4.726 4.891m-4.975-3.779c.641.014 3.866.27 4.056 3.855a.415.415 0 0 1-.398.434h-.022a.42.42 0 0 1-.42-.392C15 8.317 12.63 8.048 11.909 8.03c-.112-.003-.238-.003-.353-.003a.417.417 0 0 1-.42-.415c0-.23.187-.414.42-.414l.189.003zm3.238 12.7a.417.417 0 0 0-.42-.414h-5.42a.417.417 0 0 0-.42.415c0 .23.187.414.42.414h5.42c.232 0 .42-.185.42-.414m-1.151 1.107c.232 0 .42.185.42.415s-.188.414-.42.414H9.898a.417.417 0 0 1-.42-.414c0-.23.187-.415.42-.415zm3.882-16.624a.423.423 0 0 1 .594 0 .413.413 0 0 1 0 .585l-1.053 1.036a.42.42 0 0 1-.297.12.412.412 0 0 1-.297-.706zm-12.641.767L6.315 6.19a.42.42 0 0 0 .297.12.413.413 0 0 0 .297-.706L5.856 4.57a.423.423 0 0 0-.594 0 .413.413 0 0 0 0 .585m-.376 5.126c.233 0 .42.185.42.415s-.187.414-.42.414H3.4a.417.417 0 0 1-.42-.414c0-.23.187-.415.42-.415zm16.138.336a.417.417 0 0 0-.42-.414h-1.488a.417.417 0 0 0-.42.414c0 .23.188.415.42.415h1.487c.233 0 .42-.185.42-.415"
                />
            </svg>
        );
    }
};

export default IconLightbulbLight;
