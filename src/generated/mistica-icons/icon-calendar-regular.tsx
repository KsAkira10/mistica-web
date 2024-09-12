'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCalendarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.644 11.252H9c-.428 0-1.284.18-1.752.536a.7.7 0 0 0-.108 1c.252.32.716.356 1.036.144.108-.072.572-.216.82-.216h.644c.5 0 .928.428.928.964s-.392.964-.928.964h-.96a.756.756 0 0 0-.752.752c0 .432.32.748.752.748h.964c.5 0 .928.428.928.964s-.392.964-.928.964H9c-.252 0-.716-.144-.82-.216a.73.73 0 0 0-1.036.108A.73.73 0 0 0 7.252 19c.464.356 1.32.536 1.752.536h.644c1.32 0 2.392-1.108 2.392-2.428 0-.644-.252-1.252-.68-1.716.428-.428.68-1.036.68-1.716-.004-1.32-1.076-2.424-2.396-2.424M15.572 11.392a.65.65 0 0 0-.716 0l-1.64.928a.675.675 0 0 0-.252.964c.18.356.644.464.964.252l.572-.32v5.572a.715.715 0 1 0 1.432 0V12a.71.71 0 0 0-.36-.608"
                />
                <path
                    fill={fillColor}
                    d="M16.64 4.144h3.216c1.18 0 2.144.964 2.144 2.14V22H2V6.284c0-1.176.964-2.14 2.144-2.14h3.208V2.716c0-.396.324-.716.716-.716.396 0 .716.324.716.716v1.428h6.428V2.716c0-.396.324-.716.716-.716s.716.32.712.716zM7.36 5.572H4.144a.715.715 0 0 0-.716.716v2.5h17.156v-2.5a.72.72 0 0 0-.716-.716h-3.216V7a.715.715 0 1 1-1.432 0V5.572H8.792V7a.72.72 0 0 1-.716.716A.72.72 0 0 1 7.36 7zm-3.932 15h17.144V10.216H3.428z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.644 11.252H9c-.428 0-1.284.18-1.752.536a.7.7 0 0 0-.108 1c.252.32.716.356 1.036.144.108-.072.572-.216.82-.216h.644c.5 0 .928.428.928.964s-.392.964-.928.964h-.96a.756.756 0 0 0-.752.752c0 .432.32.748.752.748h.964c.5 0 .928.428.928.964s-.392.964-.928.964H9c-.252 0-.716-.144-.82-.216a.73.73 0 0 0-1.036.108A.73.73 0 0 0 7.252 19c.464.356 1.32.536 1.752.536h.644c1.32 0 2.392-1.108 2.392-2.428 0-.644-.252-1.252-.68-1.716.428-.428.68-1.036.68-1.716-.004-1.32-1.076-2.424-2.396-2.424M15.572 11.392a.65.65 0 0 0-.716 0l-1.64.928a.675.675 0 0 0-.252.964c.18.356.644.464.964.252l.572-.32v5.572a.715.715 0 1 0 1.432 0V12a.71.71 0 0 0-.36-.608"
                />
                <path
                    fill={fillColor}
                    d="M16.64 4.144h3.216c1.18 0 2.144.964 2.144 2.14V22H2V6.284c0-1.176.964-2.14 2.144-2.14h3.208V2.716c0-.396.324-.716.716-.716.396 0 .716.324.716.716v1.428h6.428V2.716c0-.396.324-.716.716-.716s.716.32.712.716zM7.36 5.572H4.144a.715.715 0 0 0-.716.716v2.5h17.156v-2.5a.72.72 0 0 0-.716-.716h-3.216V7a.715.715 0 1 1-1.432 0V5.572H8.792V7a.72.72 0 0 1-.716.716A.72.72 0 0 1 7.36 7zm-3.932 15h17.144V10.216H3.428z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.033 6.855c.101.104.289.23.594.23a.8.8 0 0 0 .594-.23c.1-.1.219-.286.219-.583 0-.487-.328-.815-.813-.815s-.812.328-.812.815c0 .297.12.482.218.583M15.787 6.855a.8.8 0 0 0 .594.23c.305 0 .493-.126.594-.233.1-.1.218-.285.218-.582a.8.8 0 0 0-.238-.603.8.8 0 0 0-.574-.21c-.485 0-.813.328-.813.815 0 .297.12.482.219.583M10.053 16.648q0-.27.078-.48.08-.208.27-.433l1.153-1.406q.539-.651.737-.995.2-.345.199-.689 0-.382-.235-.574-.26-.228-.902-.227-.557-.001-1.163.112v-.922q.278-.069.656-.117.377-.047.725-.048 1.224 0 1.779.555.425.426.426 1.154 0 .547-.278 1.047-.277.5-.988 1.28l-1.034 1.13h2.398v.884h-3.787a.8.8 0 0 1-.034-.271"
                />
                <path
                    fill={fillColor}
                    d="M19.146 20.208H4.766a2.597 2.597 0 0 1-2.594-2.594V6.384a2.597 2.597 0 0 1 2.594-2.593h14.46a2.597 2.597 0 0 1 2.593 2.593v11.149a2.68 2.68 0 0 1-2.675 2.675M4.766 4.866A1.52 1.52 0 0 0 3.25 6.384v1.258h17.496V6.384a1.52 1.52 0 0 0-1.518-1.518zm15.978 3.849H3.249v8.9c0 .837.68 1.517 1.518 1.517h14.378a1.6 1.6 0 0 0 1.6-1.6z"
                />
            </svg>
        );
    }
};

export default IconCalendarRegular;
