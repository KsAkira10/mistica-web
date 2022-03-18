/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';

import type {IconProps} from '../../utils/types';

const IconTargetLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const {skinName, colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.887 4.393L19.3 7.115a.354.354 0 01-.26.115h-2.442l-3.56 3.737c.62.776 1 1.777 1 2.871 0 2.464-1.91 4.47-4.258 4.47-2.346 0-4.257-2.006-4.257-4.47 0-2.463 1.91-4.468 4.258-4.468 1.043 0 1.995.393 2.735 1.05l1.967-2.066c-1.294-1.224-2.948-1.9-4.702-1.9-3.878 0-7.036 3.314-7.036 7.385 0 4.07 3.158 7.385 7.036 7.385a6.757 6.757 0 003.707-1.11.36.36 0 01.512.124.4.4 0 01-.119.538A7.486 7.486 0 019.78 22C5.49 22 2 18.337 2 13.834 2 9.33 5.49 5.667 9.78 5.667c1.948 0 3.792.756 5.224 2.13l1.071-1.125V4.11c0-.104.038-.204.11-.273l2.592-2.722a.36.36 0 01.403-.085c.138.06.228.204.228.358v2.334h2.223c.152 0 .285.095.342.24a.41.41 0 01-.086.432zM16.07 18.89c0 .428-.331.776-.74.776-.407 0-.739-.348-.739-.776 0-.428.332-.777.74-.777s.74.349.74.777zm-6.03-4.778l2.47-2.592c.488.632.782 1.438.787 2.324 0 2.035-1.579 3.692-3.518 3.692-1.938 0-3.517-1.657-3.517-3.693 0-2.035 1.579-3.692 3.518-3.692.834 0 1.602.309 2.209.821l-2.47 2.593a.395.395 0 000 .547.361.361 0 00.26.115.36.36 0 00.261-.115zm10.695-9.604h-2.067v-2.17l-1.853 1.946v2.17h2.067l1.853-1.946zM15.99 10.37a.402.402 0 01.152-.528.36.36 0 01.502.165 8.487 8.487 0 01.91 3.837 8.41 8.41 0 01-.65 3.264.37.37 0 01-.34.234c-.048 0-.1-.01-.148-.035a.399.399 0 01-.19-.512 7.738 7.738 0 00.584-2.957c0-1.209-.28-2.408-.82-3.468z"
                    fill={fillColor}
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.84 12.005a.41.41 0 00-.41-.41h-1.766c-.202-6.638-5.78-7.347-7.27-7.415V2.56a.408.408 0 00-.409-.41.408.408 0 00-.409.41v1.61h-.05c-1.218.008-7.18.434-7.36 7.428H2.54a.408.408 0 000 .816h1.64c.29 6.809 6.184 7.266 7.39 7.28h.003v1.756a.41.41 0 10.82 0v-1.761c1.438-.054 7.002-.699 7.262-7.275h1.776a.41.41 0 00.409-.41zm-3 .409c-.242 5.693-4.799 6.394-6.445 6.456v-.69a.408.408 0 00-.41-.41.408.408 0 00-.409.41v.698c-1.517-.022-6.313-.583-6.582-6.464h.813a.41.41 0 000-.819h-.821c.168-6.066 5.034-6.599 6.545-6.613h.045v.847c0 .228.182.41.41.41a.408.408 0 00.409-.41V5c1.69.076 6.262.836 6.45 6.596h-.684a.41.41 0 000 .819h.678zm-7.945-3.69c-.22.213-.329.563-.329 1.046 0 .482.11.832.329 1.043.21.204.555.305 1.018.305.468 0 .813-.103 1.026-.308.219-.21.328-.56.328-1.04 0-.483-.11-.833-.328-1.044-.213-.204-.558-.311-1.024-.311-.465 0-.81.107-1.02.308zm-.57 2.678c.37.356.903.535 1.588.535.687 0 1.222-.18 1.592-.535.385-.373.58-.923.58-1.632 0-.71-.195-1.26-.58-1.633-.373-.359-.905-.538-1.593-.538-.684 0-1.217.182-1.587.538-.384.373-.577.923-.577 1.635 0 .713.193 1.26.577 1.63zm4.628 4.044v-.152c0-.33-.07-.796-.396-1.136-.364-.375-.92-.454-1.32-.454h-2.643c-.4 0-.956.079-1.315.454-.325.34-.395.808-.395 1.136v.152h6.069zm.193-1.854c-.446-.463-1.105-.707-1.91-.707l-2.644-.003c-.802 0-1.461.244-1.904.707-.407.426-.623 1.015-.623 1.702v.724c0 .137.11.247.247.247h7.213c.137 0 .246-.11.246-.247v-.72c0-.688-.216-1.277-.625-1.703z"
                    fill={fillColor}
                />
            </svg>
        );
    }
};

export default IconTargetLight;
