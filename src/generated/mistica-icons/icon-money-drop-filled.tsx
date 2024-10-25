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

const IconMoneyDropFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="m14.262 6.592 3.05 3.14a1 1 0 0 0 .116.112.75.75 0 0 0 .563.165c.201-.022.383-.126.465-.235L21.6 6.547a.81.81 0 0 0 .098-.843.75.75 0 0 0-.683-.445l-1.154-.012-.003-1.983c0-.61-.49-1.109-1.093-1.109H17.05c-.602 0-1.092.499-1.092 1.112l.003 1.983-1.146.009c-.297 0-.56.17-.689.445s-.092.608.137.888m-10.756.202a.62.62 0 0 0-.616.627c0 .345.274.628.616.625h.59c.516 1.61 1.836 2.484 3.858 2.484.815 0 1.524-.143 2.11-.423a.63.63 0 0 0 .293-.834.613.613 0 0 0-.82-.3c-.418.202-.95.302-1.58.302-1.275 0-2.098-.4-2.524-1.226h1.9c.338 0 .615-.28.615-.628a.62.62 0 0 0-.616-.627H5.114l-.01-.134q-.014-.143-.015-.3 0-.032.004-.06.003-.027.004-.058h2.238c.339 0 .616-.28.616-.628a.62.62 0 0 0-.616-.627h-2.04c.365-1.045 1.233-1.546 2.662-1.546.619 0 1.148.1 1.566.297a.61.61 0 0 0 .818-.308.633.633 0 0 0-.303-.832c-.583-.272-1.283-.412-2.084-.412-2.148 0-3.496.991-3.933 2.801h-.515a.62.62 0 0 0-.616.627.62.62 0 0 0 .616.628h.353q0 .03-.004.059-.004.027-.005.059c0 .106.01.204.02.302l.011.132zm17.098 13.235v-.852l-.057.024a2 2 0 0 1-.192.075c-.6.184-1.384.285-2.205.285-.82 0-1.605-.1-2.207-.285q-.1-.032-.19-.072l-.065-.027v.858c.008.02.1.17.605.325.992.294 2.717.294 3.703-.006.53-.163.608-.325.608-.325m-6.75.325c.319-.098.509-.227.602-.317v-.904q-.043.015-.085.034-.077.035-.162.06c-.6.186-1.384.287-2.204.287s-1.606-.101-2.205-.286q-.093-.03-.176-.066l-.085-.035v.916c.079.076.261.199.614.308.983.303 2.717.303 3.7.003m-5.55-.32v-.887l-.093.037c-.05.02-.099.04-.156.058-.602.185-1.384.286-2.205.286-.82 0-1.605-.101-2.204-.286q-.091-.029-.17-.065l-.088-.036v.905c.079.075.26.199.616.308.98.3 2.712.3 3.698 0 .339-.104.521-.238.602-.32m-4.308-2.386c-.23.07-.364.137-.454.196.093.059.238.129.46.196.977.303 2.72.3 3.7 0 .23-.07.364-.137.454-.196a1.8 1.8 0 0 0-.46-.199c-.983-.297-2.72-.297-3.7.003m5.698-2.129c.09.059.224.126.459.2.98.299 2.717.299 3.697 0a2 2 0 0 0 .457-.194 1.7 1.7 0 0 0-.46-.2c-.977-.302-2.72-.302-3.7-.002a1.8 1.8 0 0 0-.453.196m6.602-2.479c-.227.07-.361.137-.454.194.09.058.224.126.46.198.977.3 2.72.3 3.697 0 .218-.067.361-.137.457-.193a1.7 1.7 0 0 0-.46-.199c-.98-.3-2.717-.302-3.7 0m-.605 4.726c.078.075.263.199.61.305.978.3 2.72.3 3.698 0 .322-.1.515-.23.605-.32v-.901l-.056.023q-.092.041-.193.075c-.605.185-1.387.285-2.205.285s-1.602-.1-2.204-.285q-.1-.032-.19-.071-.032-.014-.065-.027zm.255-3.132c-.063-.018-.116-.041-.17-.065l-.088-.036v.902c.078.076.26.199.616.311.978.3 2.717.3 3.698 0 .341-.104.524-.238.605-.32v-.887l-.094.037q-.072.03-.156.058c-.599.185-1.383.286-2.204.286-.824 0-1.605-.101-2.207-.286m-5.79 3.395c.977.3 2.72.3 3.697 0 .34-.104.518-.235.603-.317v-.89q-.044.016-.086.034c-.052.021-.103.043-.161.06-.602.186-1.387.287-2.204.287s-1.603-.101-2.205-.286a2 2 0 0 1-.176-.067l-.085-.034v.905c.079.076.261.199.617.308m10.196-6.193c1.23.375 1.487 1.042 1.487 1.535v6.652c0 .493-.258 1.157-1.487 1.535-.608.185-1.39.286-2.207.286-.816 0-1.597-.1-2.205-.286a2.9 2.9 0 0 1-.871-.417c-.238.174-.53.317-.863.417-.605.185-1.386.286-2.204.286s-1.603-.1-2.205-.286a3 3 0 0 1-.882-.417 2.9 2.9 0 0 1-.86.417c-.605.185-1.387.286-2.205.286-.817 0-1.602-.1-2.204-.286-.577-.176-1-.442-1.258-.776a.63.63 0 0 1-.238-.481v-2.32c0-.117.017-.238.048-.35v-.003c.154-.535.638-.932 1.437-1.179 1.207-.37 3.204-.367 4.412 0q.1.032.188.068l.064.025v-.886q0-.181.047-.35v-.002c.154-.538.636-.936 1.44-1.18 1.205-.37 3.21-.37 4.412 0 .092.028.168.059.25.093v-.844q0-.177.047-.347v-.005c.154-.535.636-.936 1.44-1.18 1.218-.372 3.212-.37 4.417-.005"
            />
        </svg>
    );
};

export default IconMoneyDropFilled;
