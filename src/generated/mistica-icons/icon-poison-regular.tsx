'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseOrMediaVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPoisonRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.733 6.72c1.185.583 1.83 1.768 1.83 3.398l-.01 7.924c0 2.381-1.408 3.804-3.764 3.804H9.223c-1.16 0-2.081-.325-2.745-.969-.689-.67-1.04-1.622-1.04-2.835v-7.924c0-1.213.351-2.165 1.048-2.835.21-.204.457-.367.72-.507a1.4 1.4 0 0 1-.028-.269V3.583c0-.784.636-1.42 1.418-1.42h6.742c.781 0 1.417.639 1.417 1.42v2.924c0 .073-.01.143-.022.213m-8.361-.215c0 .123.098.224.22.224h6.743c.123 0 .221-.101.221-.224V3.58a.22.22 0 0 0-.22-.221H8.592c-.12 0-.221.1-.221.221zm8.756 12.829H6.868c.109.266.252.498.44.683.433.42 1.075.633 1.912.633h5.569v-.003c1.204 0 1.98-.448 2.339-1.313m.162-9.997c-.156-.796-.574-1.334-1.249-1.603-.207.12-.448.196-.706.196H8.593c-.238 0-.462-.064-.658-.17-.236.1-.451.224-.625.389-.303.291-.496.697-.597 1.188zm-10.655 8.75.003.048h10.714q0-.023.003-.045l.003-.045.008-7.507H6.632v7.504zM8.809 5.575a.598.598 0 1 0 1.193 0V4.533a.6.6 0 0 0-.597-.6.6.6 0 0 0-.596.6zm2.305.6a.6.6 0 0 1-.597-.6V4.533a.6.6 0 0 1 .597-.6c.33 0 .597.27.597.6v1.042c0 .33-.267.6-.597.6m1.11-.6a.598.598 0 1 0 1.192 0V4.533a.6.6 0 0 0-.596-.6.6.6 0 0 0-.597.6zm2.302.6a.6.6 0 0 1-.597-.6V4.533a.598.598 0 1 1 1.193 0v1.042c.003.33-.266.6-.596.6m-.07 7.904c0-2.188-1.647-2.462-2.353-2.48q-.125-.003-.25-.002h-.014c-.694.003-2.313.252-2.313 2.465 0 .997.33 1.703.977 2.104l.19.117v.432q0 .221.096.305c.073.067.196.098.359.098h1.694c.115 0 .266-.017.353-.095.079-.07.093-.207.093-.308v-.434l.187-.115c.65-.404.98-1.107.98-2.087m-2.328-3.277c.515.01 3.126.224 3.126 3.277 0 1.431-.597 2.215-1.168 2.639 0 .481-.193.756-.356.899-.218.198-.518.302-.888.302h-1.694c-.373 0-.673-.104-.891-.305-.16-.14-.359-.418-.359-.894-.571-.42-1.168-1.207-1.168-2.655 0-3.093 2.588-3.263 3.107-3.266.08-.016.145-.01.21-.004q.04.005.08.007m-.835 4.15a.399.399 0 0 0 .283-.684l-.232-.231.232-.233a.404.404 0 0 0 0-.566.396.396 0 0 0-.563 0l-.232.233-.233-.232a.396.396 0 0 0-.563 0 .404.404 0 0 0 0 .565l.233.233-.233.232a.404.404 0 0 0 0 .566.397.397 0 0 0 .563 0l.233-.232.232.232a.4.4 0 0 0 .28.118m2.502-.915.232.232a.404.404 0 0 1 0 .566.397.397 0 0 1-.563 0l-.232-.232-.233.232a.397.397 0 0 1-.563 0 .404.404 0 0 1 0-.566l.232-.232-.232-.233a.404.404 0 0 1 0-.566.396.396 0 0 1 .563 0l.233.233.232-.232a.396.396 0 0 1 .563 0 .404.404 0 0 1 0 .565zm-1.11 1.655-.12-.283a.395.395 0 0 0-.518-.213.2.2 0 0 0-.054.035l-.016.013-.017-.013q-.023-.02-.053-.034a.396.396 0 0 0-.521.212l-.12.283a.4.4 0 0 0 .363.555.39.39 0 0 0 .345-.219.39.39 0 0 0 .501.188.4.4 0 0 0 .21-.524"
            />
        </svg>
    );
};

export default IconPoisonRegular;
