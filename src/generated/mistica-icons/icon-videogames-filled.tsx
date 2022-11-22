/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVideogamesFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M19.699 7.715l.016.04c.069.165.153.36.248.578.68 1.568 1.913 4.406 1.884 6.921-.006.415-.163 1.241-.283 1.636-.244.793-.815 1.302-1.437 1.507-.255.084-.6.162-.849.162-.333 0-.988-.131-1.325-.28a3.192 3.192 0 01-.784-.495c-.165-.143-.248-.245-.477-.526-.031-.04-.065-.081-.103-.127-.066-.082-.13-.166-.194-.25-.147-.192-.295-.386-.472-.554-.58-.555-1.317-.947-2.197-1.193a6.391 6.391 0 00-1.722-.236c-.583 0-1.165.082-1.726.236-.876.243-1.616.638-2.196 1.193-.174.166-.32.358-.466.55-.065.085-.13.17-.198.254l-.07.087c-.254.314-.337.416-.51.566-.313.268-.58.408-.77.495-.31.14-.91.283-1.26.283l-.042-.001-.037-.002a4.007 4.007 0 01-.848-.162c-.625-.205-1.194-.714-1.437-1.507-.124-.398-.28-1.221-.286-1.636-.035-2.522 1.202-5.366 1.882-6.93.093-.215.176-.406.244-.569.059-.142.112-.266.154-.36.031-.072.048-.104.06-.125l.007-.016.056-.112a3.13 3.13 0 01.55-.728c.677-.647 1.64-.975 2.862-.975.501 0 .95.067 1.361.176.244.065.785.303.793.309 0 0 .412.232.546.322a2.375 2.375 0 002.65 0c.132-.09.546-.322.546-.322.012-.006.552-.244.796-.309a5.4 5.4 0 011.361-.176c1.221 0 2.185.328 2.866.975.221.21.395.46.546.728l.059.112.009.016c.01.021.028.053.058.124.038.086.083.195.135.32zm-3.645 2.304c.252 0 .451-.065.586-.193.143-.135.213-.334.213-.592 0-.257-.07-.456-.213-.59-.138-.132-.334-.197-.586-.197-.252 0-.448.065-.585.196-.137.135-.21.334-.21.591 0 .255.07.457.21.592.137.128.336.193.585.193zm1.62 1.568c.251 0 .448-.064.585-.193.14-.132.213-.33.215-.59 0-.261-.072-.46-.215-.595-.137-.129-.334-.196-.586-.196-.252 0-.448.067-.585.196-.14.135-.213.334-.213.594 0 .26.07.457.213.591.137.129.333.193.585.193zm-1.034 1.379c.143-.135.213-.334.213-.591 0-.258-.07-.457-.213-.591-.138-.13-.334-.197-.586-.197-.252 0-.448.065-.585.197-.137.134-.21.333-.21.59 0 .258.07.457.21.592.137.131.336.196.585.196.252 0 .451-.065.586-.196zm-2.205-1.379c.252 0 .448-.064.586-.193.143-.132.215-.33.212-.59 0-.261-.072-.46-.212-.595-.138-.129-.334-.196-.586-.196-.252 0-.448.067-.585.196-.14.135-.213.334-.213.594 0 .26.073.457.213.591.137.129.333.193.585.193zm-4.325-.005c.19-.182.289-.46.292-.815 0-.362-.096-.639-.289-.827-.188-.176-.462-.266-.818-.266a.652.652 0 00-.095.006c.003-.037.006-.087.006-.107 0-.364-.096-.641-.289-.823-.188-.177-.462-.266-.818-.266-.358 0-.633.09-.815.263-.193.18-.291.457-.291.824 0 .058.005.109.01.16h-.019a2.366 2.366 0 00-.145-.012c-.356 0-.633.09-.816.263-.19.185-.288.46-.288.827 0 .367.098.644.286.82.187.177.462.267.82.267.096 0 .126 0 .168-.006a1.576 1.576 0 00-.016.157c0 .367.098.647.285.82.185.177.46.267.818.267.356 0 .633-.09.818-.267.19-.179.289-.456.289-.82a.83.83 0 00-.02-.177l-.003-.022h.112c.356 0 .63-.09.818-.266z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconVideogamesFilled;
