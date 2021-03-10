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

const IconEmailVirusRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.inverse : colors.neutralHigh);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M9.659 17.505c1.54 0 1.963-.558 1.963-2.597 0-1.275-.187-1.958-.624-2.283-.286-.21-.723-.314-1.34-.314-.621 0-1.061.104-1.347.32-.434.327-.619 1.008-.619 2.277 0 2.04.423 2.597 1.967 2.597zm.002-6.732c-1.325 0-1.325.286-1.325.645 0 .02.003.03.003.047a4 4 0 011.32-.199c.518 0 .952.07 1.325.202l.002-.05c0-.359 0-.645-1.325-.645zm3.661 3.239a.52.52 0 01.524.523v.773a.522.522 0 01-.524.521.52.52 0 01-.523-.52v-.253h-.13c-.005.569-.05 1.118-.184 1.608l.737.221a.52.52 0 01.372.527l-.061 1.165a.523.523 0 01-.524.493h-.028a.525.525 0 01-.496-.549l.042-.756-.493-.148c-.44.568-1.17.932-2.373.932-1.204 0-1.935-.364-2.375-.938l-.513.154.042.756a.523.523 0 01-.495.55h-.028a.523.523 0 01-.524-.494l-.062-1.165a.517.517 0 01.373-.527l.756-.226c-.134-.49-.176-1.037-.182-1.603h-.129v.252A.522.522 0 016 15.83a.52.52 0 01-.523-.52v-.774c0-.288.235-.523.523-.523h.687c.042-.46.134-.905.305-1.306l-.91-.271a.522.522 0 01-.373-.53l.062-1.165c.014-.289.26-.476.551-.493a.52.52 0 01.496.549l-.042.756.54.163a2.02 2.02 0 01-.024-.297c0-1.69 1.666-1.69 2.375-1.69.711 0 2.375 0 2.375 1.69 0 .1-.01.196-.022.288l.51-.151-.042-.756a.523.523 0 01.496-.55c.3.017.537.205.551.494l.062 1.165c.014.24-.14.46-.373.53l-.893.265c.174.398.266.85.308 1.311h.683v-.002zm-3.697-.863a.52.52 0 01.524.52v2.897a.522.522 0 01-.524.521.522.522 0 01-.524-.52V13.67c0-.289.235-.521.524-.521zm10.894 5.053c.148-.174.112-.468.112-.47l-.009-.096.006-7.745-3.72 2.317c.073.313.137.635.176.98.045.39.068.804.068 1.224 0 1.555-.325 2.882-.928 3.989 1.675 0 3.367-.003 3.684-.009.204.003.479-.036.61-.19zM9.96 20.647c.796-.014 3.502-.226 4.97-2.389.672-.989 1.013-2.28 1.013-3.84 0-.378-.02-.743-.059-1.087-.54-4.68-4.691-5.143-5.952-5.177-.148-.002-.32-.005-.482-.005h-.148c-1.272.011-5.454.426-5.89 5.339a9.72 9.72 0 00-.04.888c0 5.74 4.577 6.252 5.98 6.271.205.006.426.003.608 0zm1.933-17.03L5.07 7.927c-.078.057-.137.185-.173.362C6.19 7.364 7.782 6.96 9.289 6.947c.218-.003.465 0 .672.006 2.544.061 5.35 1.201 6.569 4.075l4.092-2.551c-.022-.272-.098-.477-.227-.57l-.078-.05-6.698-4.226a1.638 1.638 0 00-.865-.26c-.496.002-.855.243-.86.246zM21.835 17.6c.025.207.053.846-.378 1.364-.235.283-.69.622-1.527.636-.372.005-2.627.008-4.543.008-1.838 2.003-4.552 2.224-5.403 2.238-.13.003-.28.006-.432.006-.073 0-.146 0-.218-.003-1.2-.02-7.174-.46-7.174-7.476 0-.347.014-.678.042-.995.146-1.655.683-2.932 1.445-3.904v-.891c.023-.95.415-1.423.74-1.658l.129-.084 6.703-4.233a2.82 2.82 0 011.515-.448c.877 0 1.49.42 1.558.468l6.778 4.28c.353.25.745.725.768 1.661l-.003 9.03z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconEmailVirusRegular;
