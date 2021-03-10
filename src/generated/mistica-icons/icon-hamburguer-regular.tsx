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

const IconHamburguerRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.375 7.924c-.087.09-.257.107-.386.107v.011h-6.905v-.011c-.126 0-.294-.017-.38-.104-.09-.09-.107-.269-.107-.406 0-.134.02-.317.109-.403.087-.087.255-.104.38-.104h6.906c.128 0 .296.017.383.106.09.087.11.27.11.404-.003.134-.02.314-.11.4zm-.902 5.373c-.213 4.577-.213 4.585-.213 4.61-.02 2.227-.54 2.463-1.165 2.53-.017.003-.03.006-.047.006h-.026a2.64 2.64 0 01-.42-.003l-2.255.003a2.074 2.074 0 01-.19.008h-.037c.146-.317.25-.672.353-1.048l.028-.092c.337-.11.625-.277.866-.516.462-.459.695-1.106.695-1.927 0-.636-.146-1.165-.423-1.588.529-.028 1.033-.277 1.495-.759.505-.521.754-1.092.743-1.69-.011-.573-.26-1.12-.745-1.62s-1.012-.757-1.563-.766c-.589.003-1.124.25-1.625.773-.14.146-.258.295-.356.449a3.05 3.05 0 00-1.112-.72c-.025-.653-.047-1.222-.059-1.625h6.244c-.042.852-.115 2.415-.188 3.975zm-4.039-.417c-.003-.239.123-.496.381-.762.255-.266.499-.398.728-.398h.012c.22.003.462.134.708.392.252.26.378.51.384.742.006.238-.126.496-.384.765-.255.266-.487.378-.734.392-.224-.003-.462-.137-.714-.395-.25-.257-.378-.507-.38-.736zm-1.7 5.28h-9.35c-.353-.026-.636-.11-.813-.286-.207-.207-.31-.546-.31-1.006 0-.38.075-.672.218-.882.132.269.31.532.552.781.52.541 1.084.813 1.672.813h.036c.58-.011 1.132-.283 1.642-.813.367-.38.6-.784.709-1.204h6.532c.395.008.7.106.89.294.21.21.317.552.317 1.011 0 .46-.106.799-.316 1.006-.177.176-.46.26-.813.286h-.966zm.294 1.728c-.162.364-.367.473-.877.532l-.232.003-.717.011-.745-.003-3.855.003c-.134.009-.975.017-1.106.017-1.009 0-1.278-.19-1.563-1.014h9.255c-.06.182-.107.33-.16.45zm-7.28-4.325c-.065.1-.14.199-.238.303-.275.285-.544.434-.79.44-.3.008-.535-.144-.818-.44a1.87 1.87 0 01-.24-.303h2.086zm.143-3.591c.073-.008.431-.003.748.003l3.854-.003c.112.006.23.003.353.003.154 0 .294-.006.434.008.51.048.919.19 1.247.443.479.367.79.963.977 1.862H4.591c.367-1.728 1.134-2.187 2.16-2.3l.14-.016zm9.367-8.373c0-.162.126-.294.283-.294a.29.29 0 01.283.294v2.146h-.566V3.6zm1.8 18.11h.11c.062 0 .106 0 .17-.012 1.866-.268 2.135-2.058 2.152-3.764.003-.101.107-2.334.21-4.577l.2-4.272c.117-.067.229-.143.327-.238.221-.221.484-.63.484-1.325 0-.692-.263-1.104-.484-1.322-.221-.224-.504-.417-.84-.46-.031-.005-.093-.005-.127-.005h-2.21V3.597c0-.866-.677-1.572-1.512-1.572-.832 0-1.513.703-1.513 1.572v2.137h-1.941c-.515 0-.933.154-1.238.465-.219.218-.482.63-.482 1.322 0 .695.263 1.1.485 1.325.098.095.207.17.325.238l.058 1.622a5.731 5.731 0 00-.386-.014c-.151 0-.289.005-.398.003l-3.77.002c-.286 0-.628-.005-.832-.002a2.193 2.193 0 00-.378.04c-2.317.332-2.939 2.248-3.177 3.808a2.12 2.12 0 00-.577.398c-.456.46-.689 1.11-.689 1.93 0 .82.236 1.47.69 1.927.24.241.54.412.882.521.406 1.367.834 2.395 2.893 2.395.146 0 1.059.009 1.151 0l3.77-.003h6.648v-.002z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconHamburguerRegular;
