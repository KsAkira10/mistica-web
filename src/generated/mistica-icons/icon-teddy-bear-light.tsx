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

const IconTeddyBearLight: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M8.105 7.126c-.118-.109-.18-.271-.18-.484 0-.213.06-.378.18-.488.115-.106.28-.16.496-.16.213 0 .38.054.496.16.117.11.179.275.179.488 0 .213-.062.375-.18.484-.114.107-.282.16-.495.16-.213 0-.378-.056-.496-.16zm6.339.16c-.213 0-.381-.053-.496-.16-.12-.109-.18-.271-.18-.484 0-.213.06-.376.18-.485.115-.106.283-.162.496-.162.213 0 .38.053.496.162.12.11.179.272.179.485 0 .213-.062.375-.18.484-.117.107-.285.16-.495.16zm5.19 10.602a.907.907 0 00-.002-.157c-.034-.42-.149-.697-.378-.91-.25-.232-.63-.347-1.132-.347-.502 0-.885.117-1.135.35-.184.17-.302.412-.355.717l-.023.221c-.005.06-.014.112-.014.174 0 .02-.011.04-.014.059l-.179 1.692c.003.442.118.776.35.986.221.204.569.31 1.023.31.453 0 .795-.103 1.016-.31a.943.943 0 00.166-.213s.465-1.796.638-2.406a.573.573 0 00.04-.166zm-3.84-.683c.104-.4.289-.742.572-1.003a2.16 2.16 0 01.773-.445c.033-.306.061-.62.061-.953 0-1.546-.375-2.778-1.109-3.678-.146.185-.283.373-.457.535-.966.891-2.347 1.342-4.09 1.35v.003l-.022-.002-.02.002v-.002c-1.747-.009-3.122-.46-4.092-1.35-.17-.16-.31-.35-.456-.536-.734.9-1.11 2.132-1.11 3.678 0 .334.026.647.062.953.3.098.558.249.773.445.283.26.465.602.569 1.003a.38.38 0 01.045.134l.005.048c.012.05.012.106.02.16l.151 1.445c.933.815 2.25 1.218 4.028 1.218h.006v-.002h.042v.002h.005c1.78 0 3.096-.403 4.028-1.218l.154-1.445c.009-.054.009-.11.02-.16l.006-.048a.284.284 0 01.036-.134zM6.29 20.673c.23-.21.347-.544.35-.986l-.182-1.692c-.003-.02-.011-.04-.011-.06 0-.06-.009-.117-.014-.173l-.023-.221c-.056-.305-.17-.546-.355-.717-.252-.233-.633-.35-1.135-.35-.501 0-.882.117-1.131.347-.23.213-.345.493-.379.91-.002.026-.008.101-.002.157a.788.788 0 00.036.163c.17.61.639 2.406.639 2.406a.9.9 0 00.165.213c.224.207.566.31 1.02.31.453 0 .798-.103 1.022-.307zm-2.193-8.264c-1.297 1.457-.322 2.547.157 2.95.061.05.123.1.176.14.042.036.112.084.19.134.101-.008.194-.022.297-.022.028 0 .05.006.079.006-.023-.267-.05-.53-.05-.813 0-1.437.31-2.638.893-3.608-.577.292-1.375.802-1.742 1.213zm2.08-6.82c.25-.821.65-1.521 1.233-2.062.068-.062.154-.106.227-.165-.386-.27-1.053-.505-1.745.277-.765.857-.272 1.496.09 1.798l.115.096.08.056zm5.345-2.563c-1.512.005-2.686.38-3.487 1.12-.83.77-1.252 1.93-1.252 3.451 0 1.521.423 2.678 1.252 3.445.72.664 1.762 1.017 3.07 1.084V8.771a1.415 1.415 0 01-.644-.33 1.156 1.156 0 01-.345-.547 1.13 1.13 0 01-.025-.235c-.003-.104.022-.154.045-.205.07-.151.162-.288.286-.4.268-.247.635-.373 1.08-.39V6.66l.02.002.023-.002v.005c.442.017.81.14 1.081.39.123.114.213.249.286.4.022.05.047.101.045.205a1.13 1.13 0 01-.026.235c-.058.216-.182.4-.341.546a1.415 1.415 0 01-.645.33v3.356c1.306-.07 2.35-.423 3.068-1.084.832-.767 1.255-1.924 1.255-3.445s-.423-2.68-1.255-3.451c-.804-.74-1.978-1.118-3.49-1.12zm5.633.61c-.694-.781-1.358-.546-1.745-.277.073.059.157.104.224.165.583.54.984 1.241 1.233 2.062.028-.02.062-.042.084-.056l.115-.095c.358-.3.854-.939.09-1.799zm1.79 8.773c-.364-.411-1.162-.921-1.74-1.21.586.97.894 2.171.894 3.608 0 .283-.028.546-.053.812.028 0 .05-.005.079-.005.106 0 .199.014.297.022.075-.05.145-.098.19-.134l.18-.14c.478-.406 1.45-1.499.153-2.953zm1.594 5.4s0 .062.003.062c0 0-.003.085-.014.138-.011.078-.05.23-.053.249l-.661 2.482c-.003.008-.011.014-.014.022-.009.023-.009.048-.023.07a1.74 1.74 0 01-.355.46c-.398.367-.95.551-1.645.551-.697 0-1.249-.184-1.647-.549-.322-.294-.518-.691-.59-1.179v-.003c-1.029.642-2.343.961-3.992.961h-.054c-1.65 0-2.96-.32-3.991-.96v.002c-.076.485-.27.883-.594 1.18-.395.364-.95.548-1.644.548-.695 0-1.25-.184-1.645-.551a1.787 1.787 0 01-.355-.46c-.014-.022-.014-.047-.023-.07-.003-.008-.014-.014-.014-.022l-.66-2.482a4.506 4.506 0 01-.054-.25 1.052 1.052 0 01-.014-.137v-.061c.014-.709.232-1.21.655-1.608.124-.112.261-.204.412-.286-1.033-.924-1.6-2.448-.157-4.067.603-.675 2.18-1.585 2.852-1.723.02-.002.087-.022.087-.022-.3-.714-.468-1.555-.468-2.507 0-.415.034-.801.09-1.17-.054-.006-.11-.012-.157-.037-.025-.014-.073-.04-.093-.056a2.361 2.361 0 01-.199-.14l-.137-.112C4.63 5.449 4.13 4.28 5.2 3.076c1.076-1.207 2.35-.916 3.118-.303a.455.455 0 01.067.082c.849-.449 1.888-.687 3.115-.692V2.16h.042v.003c1.227.005 2.263.246 3.115.692.02-.028.04-.06.067-.082.768-.613 2.042-.902 3.118.303 1.073 1.204.571 2.37-.182 3.006l-.138.112a1.909 1.909 0 01-.288.196c-.048.022-.104.028-.157.036.056.37.09.756.09 1.171 0 .952-.171 1.793-.468 2.507 0 0 .064.02.087.022.67.14 2.249 1.048 2.851 1.723 1.443 1.62.877 3.143-.157 4.067.149.082.292.174.412.286.418.398.633.902.647 1.608z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconTeddyBearLight;
