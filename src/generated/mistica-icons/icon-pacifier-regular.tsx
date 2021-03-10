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

const IconPacifierRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M17.634 13.723c-.26.26-.577.465-.924.638a4.174 4.174 0 01-.54.236c-.44.142-.936.224-1.471.243-.093.006-.174.02-.269.02H9.343c-.092 0-.176-.017-.269-.02a5.529 5.529 0 01-1.47-.243 4.089 4.089 0 01-.541-.236 3.44 3.44 0 01-.924-.638c-.255-.34-.39-.807-.39-1.415 0-.605.138-1.073.392-1.417.6-.605 1.454-.967 2.48-1.084a4.74 4.74 0 00-.057.711c0 1.059.309 1.888.914 2.468.58.555 1.392.838 2.411.838 1.023 0 1.832-.283 2.412-.838.605-.58.91-1.409.91-2.468 0-.25-.02-.484-.053-.711 1.025.12 1.877.479 2.48 1.084.254.341.391.812.391 1.417-.005.608-.14 1.076-.395 1.415zm-7.823 2.375h4.151l-.003.255c-.005.725-.285 1.936-2.072 1.936-1.788 0-2.068-1.21-2.073-1.936l-.003-.255zm6.202.487c-.012 1.166-.435 3.869-4.126 3.869-3.695 0-4.115-2.703-4.126-3.869l-.012-.663c.26.058.533.103.813.131l.005.311c.014 1.457.891 3.154 3.317 3.157 2.428 0 3.305-1.697 3.316-3.157l.006-.31c.28-.029.552-.074.812-.132l-.005.663zM9.73 3.938c.481-.465 1.21-.7 2.157-.7.95 0 1.675.238 2.156.7.499.482.754 1.224.754 2.208 0 .798-.177 1.428-.507 1.896a2.176 2.176 0 01-.247.305s-.042.031-.095.079a.608.608 0 00-.339.44.617.617 0 00.076.389.526.526 0 00.036.098c.084.162.096.199.146.398.059.23.095.479.095.764 0 .712-.18 1.241-.53 1.577-.341.328-.862.493-1.548.493-.687 0-1.208-.165-1.546-.493-.353-.336-.533-.868-.533-1.577 0-.285.04-.537.098-.764.05-.2.065-.236.146-.398a.503.503 0 00.04-.098.6.6 0 00.075-.39.608.608 0 00-.34-.44c-.052-.047-.094-.078-.094-.078-.096-.09-.171-.199-.247-.305-.33-.468-.507-1.098-.507-1.896 0-.984.252-1.726.754-2.208zm8.826 6.13c-.014-.018-.025-.034-.042-.051-.056-.067-.104-.104-.168-.163a1.275 1.275 0 00-.17-.148c-.735-.6-1.67-.978-2.752-1.12.404-.65.614-1.466.614-2.44 0-1.33-.381-2.373-1.132-3.096-.723-.697-1.74-1.05-3.025-1.05-1.286 0-2.303.353-3.022 1.05-.751.723-1.132 1.765-1.132 3.096 0 .974.207 1.79.613 2.44-1.08.142-2.014.52-2.75 1.12-.065.042-.12.098-.171.148-.062.06-.11.096-.165.163-.017.017-.026.033-.043.05-.462.566-.711 1.311-.711 2.241 0 .93.25 1.675.711 2.241l.043.05c.106.11.218.213.336.309.274.226.577.42.904.582l.017 1.107c.02 2.462 1.443 5.09 5.37 5.09s5.35-2.628 5.37-5.09l.017-1.107c.327-.165.63-.358.904-.582.118-.096.23-.202.336-.309l.042-.05c.465-.566.715-1.31.715-2.24.003-.93-.244-1.676-.709-2.242z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconPacifierRegular;
