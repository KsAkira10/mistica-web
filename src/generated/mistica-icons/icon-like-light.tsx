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

const IconLikeLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M4.729 12.98c.45 0 .767.314.767.768s-.314.768-.767.768c-.451 0-.768-.317-.768-.768 0-.45.314-.767.768-.767zm15.862-.218a.411.411 0 01-.022-.58l.022-.022c.286-.26.437-.69.437-1.238 0-1.193-1.09-1.345-1.425-1.364H16.12l-2.74-.081a.407.407 0 01-.395-.41s.009-2.453.009-4.316v-.022L13 4.605c0-1.134-.481-1.63-1.518-1.63-.54 0-.96.143-1.213.415-.238.255-.341.627-.305 1.112l.017.204c.01.087.017.168.022.27.003.016.003.033.006.05.025 1.173.042 2.68-.073 3.91-.18 1.86-1.927 2.88-2.6 3.207v.123c0 .017.006.031.006.048v7.81c0 .016-.003.03-.006.047v.076l2.754.036c.302 0 .622.09 1.02.205l.224.064c.762.224 1.624.476 3.787.476 3.767 0 3.919-.406 4.218-1.218.067-.446.037-.804-.117-1.09a.41.41 0 01.168-.554l.033-.017c.488-.205 1.068-.591 1.068-1.292 0-.456-.107-.826-.314-1.064a.405.405 0 01.042-.574c.011-.011.025-.02.036-.028.353-.241.773-.667.773-1.314.003-.47-.143-.846-.437-1.115zM6.098 20.555c.227 0 .415-.18.426-.409v-7.854a.427.427 0 00-.426-.407H3.404a.43.43 0 00-.429.432v7.81c0 .237.193.43.429.43l2.694-.002zm15.314-8.095c.233.316.434.778.434 1.42 0 .658-.285 1.266-.812 1.737.151.288.274.691.274 1.24 0 .782-.425 1.435-1.204 1.866.104.364.11.779.022 1.291-.523 1.432-1.238 1.827-5.002 1.827-2.283 0-3.244-.283-4.017-.51l-.21-.062c-.359-.1-.614-.173-.81-.173l-2.865-.037a.685.685 0 01-.25-.053 1.234 1.234 0 01-.874.361H3.404c-.687 0-1.244-.56-1.244-1.246v-7.807c0-.686.557-1.246 1.244-1.246h2.694c.337 0 .639.134.863.35.521-.252 2.025-1.101 2.165-2.56.112-1.169.098-2.614.073-3.757a2.907 2.907 0 00-.025-.31l-.02-.233c-.05-.706.132-1.303.524-1.723.412-.443 1.037-.675 1.81-.675 1.482 0 2.333.866 2.333 2.37l-.003.095-.005.134c0 1.407-.006 3.143-.006 3.914l2.33.07h3.494c1.036.056 2.218.66 2.218 2.179-.003.72-.204 1.213-.437 1.538z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLikeLight;
