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

const IconCareShieldRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M20.417 15.41c0-.012.25-3.309.221-4.382a.544.544 0 00-.02-.157c-.008 0-.038-.008-.097-.008-.101.003-.177.053-.193.135l-.519 2.526c-.005.028-.022.048-.03.073a1.336 1.336 0 01-.177.675l-.003.003v.003l-1.538 2.602a.6.6 0 01-.826.213.613.613 0 01-.21-.835l1.538-2.605s.003 0 .003-.003v-.003c.033-.056-.003-.198-.06-.235 0 0-.117-.067-.162.009l-.078.134c-.258.46-.793 1.415-1.882 1.978 0 0-.253.15-.704.736a7.916 7.916 0 00-1.02 1.773l-.086.208h2.913c.037 0 .073.008.112.01l1.793-1.531c.154-.132.316-.255.479-.379.12-.09.235-.23.344-.414.118-.19.185-.37.202-.527zm-2.7 4.994v-.709a.225.225 0 00-.224-.224h-3.457c-.123 0-.224.1-.224.224v.711c0 .124.1.225.224.225h3.457a.226.226 0 00.224-.227zm4.126-9.406c.03 1.134-.216 4.389-.227 4.529-.04.35-.16.692-.364 1.036a2.63 2.63 0 01-.656.762c-.145.11-.288.216-.423.334l-1.479 1.266c.14.221.227.487.227.77v.711c0 .796-.641 1.443-1.431 1.443h-3.457c-.79 0-1.428-.644-1.428-1.443v-.711c0-.448.207-.843.524-1.106l.423-1.014a9.235 9.235 0 011.179-2.045c.622-.813 1.02-1.037 1.129-1.084.742-.387 1.143-1.101 1.358-1.485l.101-.176c.322-.527.95-.731 1.524-.541l.305-1.493a1.396 1.396 0 011.37-1.106c.849.047 1.305.54 1.325 1.353zm-11.647 9.406v-.709a.224.224 0 00-.221-.224H6.518c-.123 0-.224.1-.224.224v.711c0 .124.1.225.224.225h3.457c.12 0 .22-.101.22-.227zM4.61 16.73l1.793 1.533c.037-.003.073-.012.11-.012h2.913l-.087-.207a8.025 8.025 0 00-1.02-1.773c-.45-.585-.703-.737-.706-.737-1.087-.563-1.622-1.518-1.877-1.977l-.078-.137c-.045-.076-.162-.009-.162-.006-.056.034-.093.176-.06.232v.003l.004.003 1.537 2.605a.61.61 0 01-.515.922.6.6 0 01-.518-.3l-1.538-2.605v-.003h-.003a1.373 1.373 0 01-.176-.675c-.009-.025-.026-.045-.031-.073l-.518-2.526a.172.172 0 00-.16-.138.628.628 0 00-.14.02c.003.011-.008.059-.011.148-.028 1.073.221 4.37.224 4.404.017.134.084.313.199.51a1.4 1.4 0 00.347.414c.157.118.32.241.473.375zm5.84.844l.427 1.014c.316.263.523.658.523 1.106v.711a1.44 1.44 0 01-1.428 1.443H6.515c-.79 0-1.428-.647-1.428-1.443v-.711c0-.286.084-.549.224-.77l-1.48-1.266c-.134-.115-.28-.224-.42-.33a2.662 2.662 0 01-.658-.766 2.549 2.549 0 01-.361-1.016c-.014-.16-.258-3.415-.23-4.552.02-.813.48-1.303 1.252-1.348.726.009 1.306.443 1.443 1.104l.308 1.493c.574-.19 1.199.014 1.521.538l.1.176c.217.384.617 1.098 1.382 1.496.084.04.482.263 1.103 1.073a9.084 9.084 0 011.18 2.048zm1.485-4.286c1.544-.782 3.801-2.3 4.006-3.48.204-1.187.25-3.68.258-4.856-.98-.025-1.605-.44-2.168-.818-.605-.406-1.132-.757-2.093-.76h-.003c-.963 0-1.487.354-2.095.757-.571.384-1.204.807-2.168.826.011 1.182.056 3.664.263 4.85.2 1.184 2.457 2.7 4 3.48zm5.194-3.27c-.393 2.273-4.477 4.275-4.939 4.5a.597.597 0 01-.515 0c-.465-.222-4.544-2.225-4.933-4.5-.291-1.68-.283-5.548-.283-5.71 0-.188.087-.362.233-.48a.61.61 0 01.515-.112c.871.132 1.325-.173 1.96-.596.64-.429 1.435-.961 2.76-.961h.006c1.324.003 2.12.535 2.759.96.636.424 1.095.735 1.994.592a.622.622 0 01.714.596c.006.163.014 4.028-.271 5.712zM13.885 6.28a.597.597 0 01.851 0 .612.612 0 010 .86l-3.282 3.311a.602.602 0 01-.855 0L9.126 8.964a.612.612 0 010-.86.597.597 0 01.851 0l1.045 1.059 2.863-2.883z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconCareShieldRegular;
