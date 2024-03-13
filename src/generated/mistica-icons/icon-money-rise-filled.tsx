'use client';
/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMoneyRiseFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.127 6.455a.76.76 0 0 0 .686.445l1.148.011.003 1.978a1.1 1.1 0 0 0 1.093 1.106h1.717c.602 0 1.092-.495 1.092-1.109l-.003-1.978L21.01 6.9c.297 0 .56-.17.69-.445.128-.275.089-.605-.138-.883l-3.05-3.131a1 1 0 0 0-.115-.115.74.74 0 0 0-.56-.165c-.202.022-.384.126-.466.235l-3.142 3.216a.81.81 0 0 0-.101.843m-10.62.38a.628.628 0 0 0-.003 1.255h.592c.513 1.606 1.835 2.477 3.857 2.477.812 0 1.521-.143 2.106-.423a.63.63 0 0 0 .295-.835.614.614 0 0 0-.821-.3c-.42.202-.95.303-1.58.303-1.277 0-2.1-.404-2.524-1.227h1.9c.338 0 .616-.28.616-.625a.62.62 0 0 0-.617-.624H5.11l-.01-.14q-.013-.14-.015-.295 0-.03.004-.06l.004-.06h2.235c.34 0 .617-.28.617-.625a.62.62 0 0 0-.617-.624H5.292c.367-1.042 1.233-1.54 2.661-1.54.622 0 1.149.1 1.566.296a.614.614 0 0 0 .818-.305.63.63 0 0 0-.3-.832c-.58-.275-1.28-.412-2.084-.412-2.148 0-3.496.989-3.933 2.793h-.515a.62.62 0 0 0-.616.624.62.62 0 0 0 .616.625h.356q0 .03-.005.06l-.004.06c0 .096.009.183.017.27q.008.082.014.165zm16.494 13.522c-.986.3-2.723.3-3.7.002-.502-.154-.594-.302-.606-.325v-.854l.066.027c.061.026.121.05.19.071.604.185 1.386.286 2.204.286s1.6-.1 2.204-.286a2 2 0 0 0 .25-.098v.852s-.079.165-.608.325m-5.547-.311c-.09.087-.282.215-.602.313-.975.297-2.717.297-3.7.003-.353-.109-.535-.235-.613-.308v-.913l.084.035c.057.024.113.047.176.066.605.185 1.387.285 2.205.285.817 0 1.602-.1 2.204-.285q.085-.028.16-.06l.086-.035zm-6.753.313c-.975.297-2.717.3-3.697-.002-.359-.11-.541-.233-.617-.308v-.9q.044.017.085.035c.056.024.112.047.176.066.602.185 1.386.286 2.204.286s1.602-.1 2.205-.286c.057-.017.106-.038.156-.058q.044-.02.093-.037v.885c-.084.081-.263.216-.605.32m-4.16-2.504c.093-.059.227-.126.457-.196.98-.3 2.72-.3 3.7 0 .233.073.37.143.46.199a2 2 0 0 1-.457.193c-.98.3-2.717.297-3.697 0a1.9 1.9 0 0 1-.463-.196m6.608-2.515c.98-.297 2.723-.297 3.7 0 .236.07.37.14.46.199a2 2 0 0 1-.457.193c-.975.297-2.717.297-3.697 0a1.7 1.7 0 0 1-.46-.199c.093-.056.236-.126.454-.193m5.695-2.081a1.8 1.8 0 0 1 .454-.194c.983-.302 2.72-.3 3.703 0 .232.073.37.14.46.2a2 2 0 0 1-.457.192c-.98.3-2.72.297-3.698 0a1.7 1.7 0 0 1-.462-.198m-.151 3.605.092.036q.076.034.165.062c.602.184 1.384.285 2.205.285.82 0 1.605-.103 2.204-.285q.092-.03.174-.067l.075-.031v.896c-.086.087-.28.218-.605.32-.983.299-2.717.299-3.7 0-.347-.104-.532-.228-.61-.303zm.079-2.274q.082.037.175.066c.605.182 1.387.283 2.205.283s1.6-.1 2.204-.285c.07-.021.128-.045.188-.07l.062-.026v.886c-.082.08-.264.215-.605.319-.978.3-2.717.3-3.698 0-.358-.11-.538-.233-.616-.308v-.9zm-6.233 3.142h-.003v-.902l.085.034a2 2 0 0 0 .175.067c.603.185 1.384.286 2.205.286.82 0 1.605-.101 2.204-.286q.086-.029.16-.06l.087-.035v.888c-.082.084-.26.212-.6.316-.98.3-2.714.297-3.697 0-.356-.11-.538-.232-.616-.308m12.302-4.336c0-.49-.258-1.154-1.487-1.53-1.205-.37-3.205-.37-4.412.006-.801.244-1.283.639-1.437 1.174q-.05.17-.05.353v.84a3 3 0 0 0-.25-.092c-1.201-.37-3.207-.37-4.412 0-.8.243-1.285.638-1.437 1.173q-.05.168-.05.353v.882l-.063-.024c-.06-.023-.12-.047-.19-.068-1.204-.367-3.206-.367-4.41 0-.802.244-1.287.639-1.44 1.174v.003c-.031.112-.048.232-.048.35v2.31c0 .2.095.367.238.482.255.33.678.597 1.255.773.6.185 1.384.286 2.204.286s1.605-.1 2.205-.286c.333-.103.622-.246.86-.417.235.168.53.311.882.417.602.185 1.384.286 2.205.286.82 0 1.604-.1 2.204-.286.333-.103.625-.246.863-.417.215.157.493.303.87.417.606.185 1.387.286 2.205.286s1.603-.1 2.208-.286c1.23-.375 1.487-1.039 1.487-1.529z"
            />
        </svg>
    );
};

export default IconMoneyRiseFilled;
