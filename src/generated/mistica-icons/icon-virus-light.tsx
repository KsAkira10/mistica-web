/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconVirusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.982 14.999a.44.44 0 0 0-.282-.538l-1.159-.358c.009-.512-.12-1.067-.392-1.673l.95-.11a.43.43 0 0 0 .367-.479.417.417 0 0 0-.47-.375l-1.283.162a12.68 12.68 0 0 0-1.036-1.45l1.13-.573a.416.416 0 0 0 .188-.571.431.431 0 0 0-.572-.188l-1.31.657a28.848 28.848 0 0 0-1.454-1.562l1.028-1.024a.438.438 0 0 0 0-.606.439.439 0 0 0-.606 0l-1.028 1.024a33.26 33.26 0 0 0-1.565-1.45l.649-1.306a.416.416 0 0 0-.188-.572.42.42 0 0 0-.572.188l-.564 1.126c-.523-.41-1.01-.76-1.463-1.024l.163-1.289a.419.419 0 0 0-.37-.469.423.423 0 0 0-.479.367l-.119.964c-.606-.264-1.155-.384-1.668-.375L9.507 2.3a.432.432 0 0 0-.538-.282.427.427 0 0 0-.273.538L9.03 3.64a3.504 3.504 0 0 0-1.044.597l-.814-.81a.428.428 0 0 0-.598 0 .422.422 0 0 0 0 .605l.814.811c-.29.333-.495.683-.623 1.041l-1.07-.332a.43.43 0 0 0-.533.281c-.077.23.054.47.276.538l1.164.358c-.008.512.111 1.067.376 1.673l-.934.12a.42.42 0 0 0-.367.477.424.424 0 0 0 .419.376c.007 0 .015-.002.024-.004.01-.002.021-.005.035-.005l1.241-.153c.274.452.627.947 1.036 1.468l-1.095.546a.423.423 0 0 0-.188.572.419.419 0 0 0 .384.239c.06 0 .128-.017.188-.052l1.275-.64c.427.495.916 1.024 1.463 1.58l-1.002.998a.428.428 0 0 0 .307.725.414.414 0 0 0 .3-.128l1.001-.99a34.02 34.02 0 0 0 1.574 1.46l-.643 1.271a.43.43 0 0 0 .188.572.41.41 0 0 0 .196.043.439.439 0 0 0 .384-.23l.547-1.093c.523.41 1.01.76 1.471 1.032l-.162 1.238a.426.426 0 0 0 .375.478c.018.008.035.008.052.008a.439.439 0 0 0 .427-.375l.11-.93c.59.264 1.13.41 1.634.41.009 0 .017-.003.026-.005a.103.103 0 0 1 .026-.004l.358 1.135c.054.179.225.299.404.299a.344.344 0 0 0 .128-.026.42.42 0 0 0 .282-.53l-.324-1.04a3.363 3.363 0 0 0 1.061-.623l.789.785a.433.433 0 0 0 .307.128.414.414 0 0 0 .299-.128.412.412 0 0 0 0-.598l-.789-.785c.29-.341.487-.7.615-1.067l1.045.325c.042.017.085.017.128.017.18 0 .35-.111.41-.299Zm-3.097.754c-1.164 1.158-2.61 1.79-7.522-3.11-4.91-4.895-4.27-6.338-3.114-7.498.444-.444.94-.811 1.66-.811 1.138 0 2.851.922 5.854 3.926 4.91 4.899 4.278 6.34 3.122 7.493Zm-8.396.691a.427.427 0 0 0-.53-.281l-.956.298c-.239-.58-.566-.981-.916-1.254l.418-.794a.425.425 0 0 0-.179-.572.43.43 0 0 0-.583.18l-.419.802a2.887 2.887 0 0 0-.865-.128c-.268 0-.498.025-.686.068l-.29-.956a.425.425 0 0 0-.538-.282.426.426 0 0 0-.282.53l.29.947c-.35.145-.873.427-1.258.922l-.788-.419a.418.418 0 0 0-.572.18.428.428 0 0 0 .18.58l.788.41c-.137.418-.171.93-.034 1.544l-.968.299a.429.429 0 0 0 .12.836c.042 0 .085-.008.127-.017l.974-.298c.239.571.558.973.908 1.246l-.427.802a.415.415 0 0 0 .18.572c.059.034.127.05.196.05a.427.427 0 0 0 .378-.23l.427-.793c.299.094.59.128.857.128.273 0 .503-.034.691-.069l.29.948c.06.188.231.307.41.307a.342.342 0 0 0 .128-.026.426.426 0 0 0 .282-.529l-.299-.947a3.228 3.228 0 0 0 1.258-.922l.797.418c.06.035.128.052.197.052a.427.427 0 0 0 .378-.23.416.416 0 0 0-.18-.573l-.779-.418c.137-.418.18-.93.051-1.553l.942-.29a.432.432 0 0 0 .282-.538Zm-2.146.674c.55 1.756-.589 2.421-1.318 2.66a2.475 2.475 0 0 1-.122.04c-.04.013-.082.026-.12.04-.136.043-.41.102-.742.102-.917 0-1.523-.52-1.856-1.587-.52-1.69.418-2.373 1.3-2.654l.12-.039.12-.038c.14-.034.412-.094.737-.094.94 0 1.557.512 1.881 1.57Z"
            />
        </svg>
    );
};

export default IconVirusLight;
