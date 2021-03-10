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

const IconNeuralNetworkRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M16.569 18.808h-.006c-.199.003-.434-.07-.68-.23a2.069 2.069 0 01-.152-.106.629.629 0 00-.868.095.592.592 0 00.084.835c.005.003.008.009.014.011.07.056.151.112.24.171.155.098.309.174.46.238-.316.538-.846.807-1.616.807-.95 0-1.32-.97-1.4-1.23.002-.221.005-.798 0-.938V17.3h1.235c.207.328.574.546.997.546.65 0 1.176-.515 1.176-1.15 0-.637-.53-1.152-1.176-1.152-.423 0-.79.221-.997.546h-1.24V9.92h.874v1.954c-.294.21-.49.55-.49.93 0 .634.53 1.152 1.177 1.152.42 0 .787-.219.994-.544l2.247-.005v1.249a1.14 1.14 0 00-.563.975c0 .633.526 1.151 1.179 1.151.647 0 1.176-.515 1.176-1.151 0-.41-.224-.768-.557-.972v-1.857a.596.596 0 00-.18-.426.636.636 0 00-.436-.177l-2.858.006a1.147 1.147 0 00-.453-.412V9.92h2.185a.608.608 0 00.616-.602V7.842c.336-.202.563-.56.563-.975 0-.636-.53-1.151-1.177-1.151s-1.176.515-1.176 1.151c0 .41.224.77.557.972v.874h-3.68V5.525c0-.176.005-.82.008-1.078.112-.26.532-1.09 1.395-1.09.768 0 1.3.27 1.616.807-.689.297-1.148.894-1.361 1.482l-.065.187a.6.6 0 00.41.754c.322.1.666-.076.77-.398l.05-.148c.095-.264.415-.894 1.101-.871h.003c3.008 0 3.244 2.868 3.244 3.748 0 .322-.045 1.294-.474 2.165a3.901 3.901 0 00-1.756-.616.613.613 0 00-.68.532.607.607 0 00.537.666h.006c.66.07 1.187.311 1.571.712.737.96.796 2.3.796 2.689.002.874-.233 3.695-3.241 3.742m-6.566 1.824c-.754 0-1.283-.255-1.602-.773.182-.07.364-.157.546-.272a.597.597 0 00.187-.82c-.002-.006-.005-.01-.008-.015a.625.625 0 00-.854-.173c-.252.162-.474.235-.687.232-.03-.003-.056.008-.084.008l-.022-.002c-3.008 0-3.244-2.869-3.244-3.748 0-.317.045-1.255.448-2.115.04.627.48 1.076 1.009 1.277.008.003.1.037.11.037.06.02.122.03.187.03.243 0 .456-.165.549-.409.115-.308-.084-.663-.398-.784a.349.349 0 01-.185-.137c.4-.017.768-.107 1.073-.286a.595.595 0 00.216-.812l-.009-.017a.623.623 0 00-.846-.202c-.176.104-.417.143-.725.118-.291-.025-.516-.104-.672-.224-.695-.958-.754-2.247-.754-2.63 0-.877.235-3.748 3.322-3.748.21.008.392.039.552.131a.626.626 0 00.846-.207.6.6 0 00-.199-.82l-.014-.009a2.379 2.379 0 00-.33-.157c.322-.504.846-.756 1.59-.756.95 0 1.32.97 1.404 1.23-.003.22-.006.798 0 .938v.767h-1.12a1.178 1.178 0 00-.998-.546c-.65 0-1.176.516-1.176 1.151 0 .634.526 1.149 1.176 1.149.404 0 .779-.205.998-.546h1.12v1.21H7.157a1.178 1.178 0 00-.997-.546c-.65 0-1.18.515-1.18 1.15 0 .634.527 1.15 1.18 1.15.423 0 .79-.22.997-.547h4.246v1.02H9.311a.614.614 0 00-.62.602v1.854a1.143 1.143 0 00-.56.975c0 .633.53 1.149 1.177 1.149s1.177-.516 1.177-1.149c0-.414-.224-.773-.56-.975v-1.252H11.4v4.824H6.882v-.146L6.88 16.8c.35-.202.568-.577.571-.98 0-.636-.53-1.152-1.176-1.152-.648 0-1.177.516-1.177 1.151 0 .412.224.77.557.972 0 .014-.005.023-.005.037l.011.742a.61.61 0 00.616.594h5.132v.294c0 .177-.006.82-.008 1.079-.118.268-.538 1.095-1.398 1.095M21.045 8.918c0-2.18-1.067-4.706-4.101-4.93-.473-1.188-1.49-1.838-2.902-1.838-.978 0-1.627.51-2.034 1.011-.428-.543-1.075-1.011-2.005-1.011-1.387 0-2.42.658-2.9 1.83C4.085 4.17 3 6.72 3 8.917c0 .563.084 1.91.804 3.072C3.084 13.15 3 14.503 3 15.066c0 2.18 1.067 4.709 4.1 4.933.474 1.19 1.491 1.837 2.906 1.837.977 0 1.627-.51 2.03-1.01.429.542 1.079 1.01 2.009 1.01 1.409 0 2.423-.644 2.899-1.829 3.02-.193 4.104-2.745 4.104-4.938 0-.563-.084-1.91-.804-3.073.717-1.16.8-2.513.8-3.078"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconNeuralNetworkRegular;
