/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLidarLight: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M7.575 16.642h9.189c.204 0 .33.142.33.357s-.135.356-.34.356h-3.4v4.288c0 .215-.135.357-.34.357-.205 0-.34-.142-.34-.357v-4.288h-1.358v4.288c0 .215-.135.357-.34.357-.205 0-.34-.142-.34-.357v-4.288h-3.4c-.205 0-.34-.141-.34-.356V2.357c0-.215.135-.357.34-.357h9.523c.205 0 .34.142.34.357v10.358c0 .215-.135.357-.34.357-.204 0-.34-.142-.34-.357V2.713H7.575v13.93zm4.424-12.86c1.703 0 3.062 1.427 3.062 3.215 0 1.787-1.359 3.213-3.062 3.213-1.702 0-3.06-1.426-3.06-3.213 0-1.788 1.358-3.214 3.06-3.214zm0 5.715c1.329 0 2.383-1.106 2.383-2.5 0-1.395-1.054-2.5-2.383-2.5-1.328 0-2.382 1.105-2.382 2.5 0 1.394 1.054 2.5 2.382 2.5zm0 5.714c-.953 0-1.702-.786-1.702-1.787 0-.997.749-1.787 1.702-1.787.954 0 1.703.786 1.703 1.787s-.749 1.787-1.703 1.787zm1.02-1.787c0-.603-.445-1.07-1.02-1.07-.574 0-1.019.467-1.019 1.07 0 .604.445 1.07 1.02 1.07.574 0 1.018-.462 1.018-1.07zM10.64 6.997c0-.782.61-1.427 1.358-1.427.75 0 1.36.645 1.36 1.427 0 .781-.615 1.426-1.36 1.426-.744 0-1.358-.645-1.358-1.426zm1.358.713c.375 0 .68-.32.68-.713 0-.394-.305-.714-.68-.714-.374 0-.679.32-.679.714 0 .393.305.713.68.713zm5.444 7.145c0-.393-.305-.713-.68-.713-.378 0-.679.32-.679.713 0 .393.305.713.68.713.374 0 .679-.32.679-.713zM5.093 5.854c.17-.105.205-.32.07-.498-.1-.179-.305-.215-.475-.074a2.204 2.204 0 00-.85 1.715c0 .676.306 1.32.85 1.714l.011.006a.432.432 0 00.194.067c.1 0 .204-.036.274-.142.1-.178.07-.393-.07-.498a1.442 1.442 0 01-.579-1.143c0-.466.2-.86.575-1.147zm-.984-1.107a3.062 3.062 0 00-.954 2.25c0 .859.34 1.677.958 2.253.135.142.17.357.035.499-.035.068-.135.105-.24.105a.455.455 0 01-.231-.07l-.008-.003a3.858 3.858 0 010-5.568c.135-.142.34-.106.474.036.135.142.1.357-.034.498zm15.206.535c-.17-.105-.374-.073-.474.074-.1.178-.07.393.07.498.34.251.579.676.579 1.143 0 .466-.205.86-.58 1.143-.17.105-.204.32-.07.498a.31.31 0 00.27.142.432.432 0 00.194-.068l.011-.006c.51-.393.85-1.037.85-1.714 0-.676-.34-1.316-.85-1.71zm.545-.996c.135-.142.34-.179.474-.037a3.682 3.682 0 011.194 2.711c0 1.07-.44 2.07-1.19 2.784a.373.373 0 01-.239.105.35.35 0 01-.24-.105c-.134-.142-.1-.357.036-.498.614-.572.953-1.395.953-2.25 0-.854-.34-1.677-.953-2.212-.135-.142-.17-.357-.035-.498z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconLidarLight;
