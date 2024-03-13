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

const IconAutenticationFailureRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.33v-.027a.6.6 0 0 0-.235-.451.66.66 0 0 0-.504-.137c-1.67.257-2.55-.314-3.647-1.037l-.022-.014c-1.084-.702-2.309-1.496-4.412-1.504h-.009c-2.097 0-3.33.803-4.41 1.506l-.018.012c-1.11.723-1.987 1.294-3.639 1.037a.613.613 0 0 0-.748.588v.031c0 .454-.008 4.88.277 7.854-1.487.577-2.319 1.888-2.319 4.011 0 2.975 1.62 4.359 4.4 4.356 1.522 0 2.704-.409 3.452-1.269a29 29 0 0 0 2.75 1.502.56.56 0 0 0 .26.055.56.56 0 0 0 .261-.055l.004-.002c.348-.165 7.464-3.524 8.094-7.127.471-2.679.466-8.801.465-9.329m-1.666 9.13c-.093.52-.393 1.058-.816 1.602-.03-.04-.056-.065-.08-.09-.92-.95-2.264-1.448-3.883-1.448h-4.768c-.103 0-.21 0-.308.009-.717-1.143-2.008-1.69-3.759-1.69a6 6 0 0 0-.88.056c-.21-2.33-.251-5.546-.26-6.921 1.717.081 2.798-.61 3.84-1.294l.006-.004c1.03-.674 2.009-1.316 3.745-1.316h.009c1.747.009 2.725.645 3.761 1.32 1.026.675 2.099 1.358 3.84 1.286-.016 1.722-.075 6.353-.447 8.49m-4.292-7.793c-.67-.639-1.635-.96-2.87-.96-1.233 0-2.2.321-2.864.96-.691.661-1.042 1.641-1.042 2.91s.35 2.247 1.042 2.905c.667.636 1.63.955 2.866.955 1.235 0 2.202-.322 2.868-.952.695-.661 1.048-1.639 1.048-2.908s-.353-2.246-1.048-2.91m-.846 4.944c-.434.409-1.112.619-2.022.619s-1.585-.21-2.017-.619c-.445-.423-.67-1.11-.67-2.036 0-.93.225-1.617.67-2.042.432-.412 1.11-.622 2.017-.622s1.588.21 2.022.622c.446.425.673 1.112.673 2.042s-.224 1.613-.673 2.036m-6.532 3.717a.517.517 0 0 1 .009.731l-.009.009-1.162 1.148 1.162 1.148a.517.517 0 0 1 .009.732l-.009.008a.53.53 0 0 1-.375.151.54.54 0 0 1-.376-.151l-1.162-1.148-1.157 1.142a.535.535 0 0 1-.75 0 .515.515 0 0 1-.006-.73l.002-.004.003-.002 1.157-1.143-1.157-1.143a.515.515 0 0 1-.005-.731l.002-.003.003-.003a.533.533 0 0 1 .748 0l1.157 1.143 1.163-1.148a.54.54 0 0 1 .753-.006m10.017 1.616c-1.653 1.558-4.134 2.967-5.501 3.633a36 36 0 0 1-2.398-1.325c.235-.571.347-1.255.347-2.05q-.001-.819-.162-1.47h4.588c1.277 0 2.32.37 3.003 1.075q.03.032.072.08zM6.558 20.351c-2.23 0-3.182-.939-3.182-3.152 0-2.202.953-3.151 3.182-3.151 2.238 0 3.19.947 3.19 3.151 0 2.21-.952 3.151-3.19 3.151"
            />
        </svg>
    );
};

export default IconAutenticationFailureRegular;
