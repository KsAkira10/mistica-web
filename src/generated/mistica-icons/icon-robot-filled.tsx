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

const IconRobotFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2-new/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.494 4.427c0-.251-.035-.498-.101-.75-.275-.822-.934-1.462-1.797-1.64C12.46 2 12.322 2 12.146 2c-.833 0-1.59.43-2.005 1.18l-4.044 7.25c.274-.073.588-.105.898-.105 1.487 0 2.765.891 3.39 2.144l2.282-4.106.518-.964 1.004-1.788q.305-.594.305-1.184m1.005.43 1.73 1.82c.274.283.447.676.482 1.037v.142c0 .283-.07.535-.173.75-.208.393-.517.717-.933.86a1.4 1.4 0 0 1-.553.104c-.137 0-.279 0-.38-.036a1.63 1.63 0 0 1-.833-.467l-.898-.928 1.142-2.034c.208-.388.345-.818.416-1.248m4.667 2.857 1.208 1.321a.62.62 0 0 1-.03.787.44.44 0 0 1-.346.141.55.55 0 0 1-.38-.178l-.898-1.001h-1.107l.009-.035c.064-.272.129-.55.129-.856v-.179zM2.5 22h8.99v-2.144c0-1.001-.796-1.787-1.73-1.787H4.23c-.969 0-1.73.786-1.73 1.787zm14.176-10.395v-1.002c-.208.037-.416.074-.624.074-.137 0-.275 0-.416-.037v1.394l1.177 1.216a.52.52 0 0 0 .38.142.52.52 0 0 0 .38-.142.53.53 0 0 0 0-.75zM9.76 14.247v2.747H4.23v-2.752c0-.247.035-.461.07-.676.138-.567.412-1.07.828-1.427.518-.466 1.142-.75 1.867-.75 1.314 0 2.451.965 2.695 2.286.035.179.07.394.07.572"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.494 4.427c0-.251-.035-.498-.101-.75-.275-.822-.934-1.462-1.797-1.64C12.46 2 12.322 2 12.146 2c-.833 0-1.59.43-2.005 1.18l-4.044 7.25c.274-.073.588-.105.898-.105 1.487 0 2.765.891 3.39 2.144l2.282-4.106.518-.964 1.004-1.788q.305-.594.305-1.184m1.005.43 1.73 1.82c.274.283.447.676.482 1.037v.142c0 .283-.07.535-.173.75-.208.393-.517.717-.933.86a1.4 1.4 0 0 1-.553.104c-.137 0-.279 0-.38-.036a1.63 1.63 0 0 1-.833-.467l-.898-.928 1.142-2.034c.208-.388.345-.818.416-1.248m4.667 2.857 1.208 1.321a.62.62 0 0 1-.03.787.44.44 0 0 1-.346.141.55.55 0 0 1-.38-.178l-.898-1.001h-1.107l.009-.035c.064-.272.129-.55.129-.856v-.179zM2.5 22h8.99v-2.144c0-1.001-.796-1.787-1.73-1.787H4.23c-.969 0-1.73.786-1.73 1.787zm14.176-10.395v-1.002c-.208.037-.416.074-.624.074-.137 0-.275 0-.416-.037v1.394l1.177 1.216a.52.52 0 0 0 .38.142.52.52 0 0 0 .38-.142.53.53 0 0 0 0-.75zM9.76 14.247v2.747H4.23v-2.752c0-.247.035-.461.07-.676.138-.567.412-1.07.828-1.427.518-.466 1.142-.75 1.867-.75 1.314 0 2.451.965 2.695 2.286.035.179.07.394.07.572"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.826 12.909h-3.944v.753h5.877c.697 0 1.263.549 1.263 1.224v5.74c0 .675-.566 1.224-1.263 1.224H4.243c-.697 0-1.263-.547-1.263-1.224v-5.74c0-.675.566-1.224 1.263-1.224h5.877v-.754H6.176c-.697 0-1.263-.546-1.263-1.224v-.689h-.664c-.698 0-1.263-.546-1.263-1.224v-2.89c0-.676.565-1.225 1.263-1.225h.664v-.983c0-.675.566-1.224 1.263-1.224h5.32V3.18a.6.6 0 0 1-.152-.39c0-.35.294-.635.656-.635.36 0 .655.286.655.636 0 .148-.062.28-.151.39v.268h5.32c.697 0 1.262.546 1.262 1.224v.995h.676c.697 0 1.263.546 1.263 1.224v2.89c0 .675-.566 1.225-1.263 1.225h-.676v.677c.003.676-.563 1.225-1.26 1.225m-4.543-1.225h4.543V4.676H6.179v2.123q0 .015.003.028.005.029.005.056v2.891q0 .028-.005.056l-.003.028v1.83h4.543q.008 0 .016-.004l.015-.002h2.499q.009-.002.018 0 .006.002.013.002m-1.9 1.975h1.236v-.753h-1.236zm1.886 1.224-.008.003q-.005.002-.012.003H10.75l-.008-.002q-.005-.004-.011-.004H4.24v5.74h1.831l-.001-.017-.001-.017v-3.678c0-.675.563-1.224 1.263-1.224h9.33c.698 0 1.264.546 1.264 1.224v3.678l-.002.017v.012l-.001.005h1.832v-5.74zm-3.191-7.745a.454.454 0 0 0-.462-.445.454.454 0 0 0-.462.445c0 .25.204.448.462.448a.456.456 0 0 0 .462-.448m1.177.003c0 .877-.737 1.588-1.642 1.588s-1.641-.711-1.641-1.588c0-.874.736-1.588 1.641-1.588s1.642.714 1.642 1.588m3.596-.017a.454.454 0 0 0-.462-.445.454.454 0 0 0-.462.445c0 .244.207.446.462.446a.454.454 0 0 0 .462-.446m-.462-1.588c.905 0 1.639.711 1.639 1.588 0 .874-.737 1.588-1.64 1.588-.901 0-1.64-.711-1.64-1.588.002-.877.739-1.588 1.64-1.588m-.134 4.507a.62.62 0 0 0-.63-.61h-3.242a.62.62 0 0 0-.63.61c0 .336.283.61.63.61h3.241a.62.62 0 0 0 .63-.61"
                />
            </svg>
        );
    }
};

export default IconRobotFilled;
