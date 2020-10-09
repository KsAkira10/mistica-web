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

const IconSmsFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M18.565 2.97c1.804 0 3.271 1.415 3.271 3.154v8.765c0 1.74-1.467 3.154-3.271 3.154H8.95l-1.888 2.333c-.22.286-.63.639-1.29.639-.852 0-1.57-.68-1.57-1.485v-1.686a3.113 3.113 0 01-2.053-2.955V6.124c0-1.74 1.468-3.154 3.275-3.154h13.14zM6.85 9.945c-.697-.27-.983-.423-.983-.863 0-.188 0-.577.905-.577.364 0 .65.064.882.132a.403.403 0 00.502-.28l.053-.205a.385.385 0 00-.277-.465c-1.06-.3-2.04-.224-2.589.247-.33.28-.504.689-.504 1.179 0 1.14.922 1.496 1.591 1.756.723.28 1.017.44 1.017.919 0 .3-.118.442-.221.507-.11.073-.34.16-.804.16a3.67 3.67 0 01-1.081-.166.399.399 0 00-.32.034.39.39 0 00-.193.246l-.053.21a.384.384 0 00.246.454c.3.11.85.222 1.407.222 1.305 0 2.056-.611 2.056-1.675 0-1.205-.944-1.57-1.634-1.835zm7.334-2.342h-.21a.406.406 0 00-.356.207l-1.63 2.986L10.4 7.81a.4.4 0 00-.356-.21h-.227c-.221 0-.4.174-.4.39v4.972c0 .212.179.389.4.389h.213c.221 0 .4-.174.4-.39v-2.943l1.076 2.025a.4.4 0 00.356.21h.227a.406.406 0 00.355-.207l1.13-2.068v2.984c0 .215.178.389.4.389h.21c.221 0 .4-.174.4-.39V7.993a.395.395 0 00-.4-.389zm3.403 2.342c-.697-.27-.98-.423-.98-.863 0-.188 0-.577.905-.577.364 0 .65.064.882.132a.41.41 0 00.314-.037.391.391 0 00.187-.243l.054-.205a.385.385 0 00-.278-.465c-1.059-.3-2.039-.224-2.588.247-.33.28-.504.689-.504 1.179 0 1.14.921 1.496 1.59 1.756.723.28 1.018.44 1.018.919 0 .3-.118.442-.224.507-.11.073-.34.16-.804.16-.362 0-.726-.056-1.082-.166a.399.399 0 00-.319.034.39.39 0 00-.193.246l-.053.21a.384.384 0 00.246.454c.3.11.849.222 1.406.222 1.306 0 2.056-.611 2.056-1.675 0-1.205-.944-1.57-1.633-1.835z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconSmsFilled;
