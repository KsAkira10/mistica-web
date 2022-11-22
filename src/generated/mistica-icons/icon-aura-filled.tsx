/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAuraFilled: React.FC<IconProps> = ({color, size = 24, children, ...rest}) => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                d="M11.2 19.99a1.34 1.34 0 011.896.307c.44.62.306 1.488-.3 1.938a1.34 1.34 0 01-1.897-.307 1.407 1.407 0 01.3-1.937zm-5.528-.239a.765.765 0 011.083-.175.804.804 0 01.172 1.107.765.765 0 01-1.084.175.804.804 0 01-.171-1.107zm11.572-.175a.765.765 0 011.084.175.804.804 0 01-.171 1.107.765.765 0 01-1.084-.175.804.804 0 01.171-1.107zm-9.663-4.531a1.913 1.913 0 012.71-.439 2.01 2.01 0 01.429 2.768 1.913 1.913 0 01-2.71.439 2.01 2.01 0 01-.429-2.768zm6.13-.44a1.913 1.913 0 012.71.438 2.01 2.01 0 01-.43 2.768 1.913 1.913 0 01-2.709-.438 2.01 2.01 0 01.429-2.768zm6.165-.967a1.352 1.352 0 011.71.89c.233.729-.157 1.512-.87 1.748a1.352 1.352 0 01-1.712-.89 1.394 1.394 0 01.872-1.748zm-17.272.5a1.34 1.34 0 011.897-.308c.607.45.741 1.318.3 1.938a1.34 1.34 0 01-1.896.307 1.407 1.407 0 01-.3-1.938zm2.939-4.079c.33-1.04 1.425-1.61 2.444-1.273 1.019.338 1.576 1.456 1.246 2.497-.331 1.041-1.425 1.61-2.444 1.273-1.02-.338-1.577-1.456-1.246-2.497zm10.469-1.275c1.019-.338 2.113.231 2.444 1.272.332 1.041-.226 2.16-1.245 2.498-1.018.338-2.113-.232-2.444-1.272-.331-1.041.226-2.16 1.245-2.498zm-13.974.11a.773.773 0 01.978-.509c.407.135.63.582.498.999a.773.773 0 01-.978.509.796.796 0 01-.498-.999zm18.946-.509a.773.773 0 01.978.509.796.796 0 01-.498.999.772.772 0 01-.978-.509.796.796 0 01.498-.999zm-8.986-3.12c1.072 0 1.94.887 1.94 1.981 0 1.095-.867 1.982-1.939 1.982-1.071 0-1.94-.886-1.94-1.98 0-1.095.868-1.983 1.94-1.983zm5.131-1.66c.75 0 1.358.621 1.358 1.387S17.88 6.38 17.13 6.38s-1.358-.621-1.358-1.387.607-1.387 1.357-1.388zm-11.546.956a1.352 1.352 0 011.711-.89c.713.236 1.104 1.018.872 1.747a1.352 1.352 0 01-1.71.89c-.714-.236-1.104-1.018-.873-1.747zM12 1.5c.428 0 .776.355.776.793a.784.784 0 01-.776.792.784.784 0 01-.776-.792c0-.438.347-.793.776-.793z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconAuraFilled;
