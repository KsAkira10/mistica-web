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

const IconTeddyBearLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseOrMediaVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.022 17.872c-.003 0-.003-.062-.003-.062-.014-.706-.23-1.21-.647-1.608a2 2 0 0 0-.412-.286c1.034-.924 1.6-2.448.157-4.067-.602-.675-2.182-1.582-2.851-1.723-.023-.002-.087-.022-.087-.022.297-.714.468-1.555.468-2.507a8 8 0 0 0-.09-1.17l.024-.005a.5.5 0 0 0 .133-.032 1.9 1.9 0 0 0 .289-.196l.137-.112c.753-.636 1.255-1.802.182-3.006-1.076-1.204-2.35-.916-3.118-.303q-.036.031-.06.072l-.007.01c-.852-.446-1.888-.687-3.115-.692V2.16h-.042v.003c-1.227.005-2.266.244-3.115.692-.02-.028-.039-.056-.067-.082-.768-.613-2.042-.904-3.118.303-1.07 1.204-.571 2.373.185 3.006l.137.112c.05.039.126.095.2.14.016.014.054.035.08.05l.012.006c.047.025.102.03.154.036h.003a8 8 0 0 0-.09 1.171c0 .952.168 1.793.468 2.507 0 0-.067.02-.087.022-.672.138-2.25 1.048-2.852 1.723-1.442 1.62-.876 3.143.157 4.067a2 2 0 0 0-.412.286c-.422.398-.641.9-.655 1.608v.062s.003.08.014.137c.014.078.048.232.053.25l.661 2.48q.001.008.007.013l.007.01q.006.014.007.027.004.022.016.043c.092.174.215.328.355.46.395.367.95.551 1.645.551.694 0 1.249-.184 1.644-.549.325-.296.518-.694.594-1.179v-.003c1.03.642 2.342.961 3.991.961h.054c1.65 0 2.963-.32 3.991-.96v.002c.073.488.27.885.591 1.18.398.364.95.548 1.647.548.695 0 1.247-.184 1.645-.551.14-.13.263-.286.355-.46a.1.1 0 0 0 .015-.043l.008-.027q.002-.006.007-.01l.007-.012.66-2.482.013-.056c.014-.056.034-.14.041-.193.011-.053.014-.137.014-.137m-9.02-14.846c1.513.002 2.687.38 3.49 1.12.832.77 1.255 1.93 1.255 3.451s-.422 2.678-1.254 3.445c-.718.662-1.762 1.014-3.068 1.084V8.771c.252-.062.471-.168.645-.33.16-.147.283-.331.341-.547a1 1 0 0 0 .026-.235.4.4 0 0 0-.042-.197l-.003-.008a1.3 1.3 0 0 0-.286-.4c-.272-.25-.639-.373-1.081-.39V6.66l-.011.001-.012.001h-.007l-.012-.002v.005c-.446.017-.812.143-1.081.39-.124.112-.216.249-.286.4l-.004.008a.4.4 0 0 0-.041.197c.003.106.011.176.025.235.06.216.185.4.345.546.173.163.392.269.644.33v3.356c-1.308-.067-2.35-.42-3.07-1.084-.83-.767-1.252-1.924-1.252-3.445s.423-2.68 1.252-3.451c.801-.74 1.975-1.115 3.487-1.12m-4.112.501c-.582.54-.983 1.24-1.232 2.062l-.041-.029-.04-.027-.115-.096c-.362-.302-.855-.94-.09-1.798.692-.781 1.359-.546 1.745-.277a1 1 0 0 1-.1.072c-.045.03-.089.058-.127.093m.695 3.6q-.179-.165-.18-.485 0-.321.18-.488.172-.16.496-.16.32 0 .496.16.177.167.179.488-.002.32-.18.484c-.114.107-.282.16-.495.16s-.378-.056-.496-.16m6.339.16c-.213 0-.381-.054-.496-.16q-.18-.165-.18-.485t.18-.485q.175-.16.496-.162.32 0 .496.162.18.165.18.485c0 .213-.063.375-.18.484q-.179.16-.496.16m5.188 10.445c.003.027.008.1.003.156a.6.6 0 0 1-.04.166c-.173.61-.638 2.406-.638 2.406a1 1 0 0 1-.166.213c-.221.207-.563.31-1.017.31s-.8-.106-1.022-.31c-.232-.21-.347-.544-.35-.986l.18-1.692q0-.013.006-.025a.1.1 0 0 0 .007-.034 1 1 0 0 1 .01-.127l.004-.047.023-.221q.079-.459.355-.717c.25-.233.634-.35 1.135-.35s.882.115 1.131.347c.23.213.345.49.379.91m-3.838-.527a.3.3 0 0 0-.036.134l-.006.048a1 1 0 0 0-.012.09q-.002.036-.008.07l-.154 1.445c-.932.815-2.249 1.218-4.028 1.218h-.005v-.002h-.042v.003h-.006c-1.779 0-3.095-.404-4.028-1.219l-.151-1.445-.008-.07q-.003-.046-.012-.09l-.005-.048a.4.4 0 0 0-.045-.134c-.104-.4-.286-.742-.569-1.003a2.1 2.1 0 0 0-.773-.445 8 8 0 0 1-.061-.953c0-1.546.375-2.778 1.109-3.678l.067.086c.122.157.245.314.39.45.969.89 2.344 1.341 4.092 1.35v.002l.012-.001.007-.001.012.001.01.001v-.002c1.743-.009 3.124-.46 4.09-1.35a4 4 0 0 0 .388-.448l.069-.088c.734.9 1.11 2.132 1.11 3.678 0 .334-.029.647-.062.953-.297.1-.558.249-.773.445-.283.26-.468.602-.572 1.003M7.12 19.687c-.003.442-.12.776-.35.986-.224.204-.569.308-1.022.308q-.683 0-1.02-.311a.9.9 0 0 1-.165-.213s-.468-1.796-.639-2.406a1 1 0 0 1-.036-.163 1 1 0 0 1 .002-.157c.034-.417.149-.697.379-.91.249-.23.63-.347 1.131-.347q.755 0 1.135.35c.185.17.3.412.355.717l.023.221.004.04q.009.064.01.134 0 .017.006.035l.005.024zm-2.543-7.278c.367-.411 1.165-.921 1.742-1.213-.583.97-.894 2.171-.894 3.608 0 .237.02.46.04.681l.01.132q-.02 0-.038-.003l-.04-.003q-.107.002-.208.014l-.089.008a2 2 0 0 1-.19-.134c-.053-.04-.115-.09-.176-.14-.48-.403-1.454-1.493-.157-2.95M15.89 3.36c.387-.269 1.05-.504 1.745.277.765.86.27 1.499-.09 1.799l-.114.095-.084.056c-.25-.82-.65-1.521-1.233-2.062q-.058-.05-.125-.094a2 2 0 0 1-.099-.071m3.535 9.05c1.297 1.454.325 2.547-.154 2.953l-.179.14a3 3 0 0 1-.19.134l-.084-.008q-.1-.012-.213-.014l-.04.003-.039.002.007-.074c.023-.24.046-.481.046-.738 0-1.437-.308-2.639-.893-3.608.577.289 1.375.799 1.74 1.21"
            />
        </svg>
    );
};

export default IconTeddyBearLight;
