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

const IconOnlineOfferRegular: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M5.069 2.003c.308 0 .56.252.56.56 0 .54 0 .966 1.613.966h1.104c.924 0 1.6.194 2.067.589.448.378.678.921.678 1.61v.382c1.55.087 2.777.557 3.65 1.397 1.011.972 1.524 2.42 1.524 4.303v1.02l.002.037a.56.56 0 010 .02l-.001.737c.1.123.181.27.254.401.03.056.075.137.114.2.068-.037.152-.088.21-.121.295-.177.659-.398 1.009-.196.35.201.342.633.333.98 0 .067-.003.162 0 .238.076.003.171 0 .238 0 .345-.008.776-.017.98.333.205.35-.019.715-.195 1.009a2.958 2.958 0 00-.12.21c.06.04.142.084.198.115.305.168.686.378.686.787 0 .409-.38.619-.686.787-.056.03-.137.076-.199.115.037.067.087.151.12.21.177.294.398.658.197 1.008-.202.35-.633.342-.98.334-.068 0-.163-.003-.239 0-.003.075 0 .17 0 .238.009.344.017.776-.333.98-.35.205-.714-.02-1.008-.196a2.958 2.958 0 00-.21-.12c-.04.061-.085.142-.115.198-.168.306-.379.687-.788.687-.408 0-.619-.381-.787-.687a3.926 3.926 0 00-.114-.198c-.068.036-.152.086-.21.12-.27.162-.6.362-.923.237-.853.445-1.91.668-3.148.668-1.81 0-3.218-.476-4.19-1.412-1.011-.975-1.524-2.423-1.524-4.303V11.81c0-1.88.513-3.328 1.524-4.303.866-.836 2.08-1.303 3.613-1.395V5.63c-.01-.39-.13-.982-1.624-.982H7.245c-.963 0-1.59-.143-2.03-.46-.474-.344-.707-.873-.707-1.624 0-.308.253-.56.56-.56zM15.79 14.258l-.086.01-.043-.003c-.229.122-.387.722-.61.783-.254.067-.767-.485-.988-.353-.221.131-.003.851-.188 1.033-.185.182-.904-.039-1.033.188-.13.227.423.737.353.989-.068.246-.801.414-.801.68 0 .267.733.435.8.681.068.255-.484.768-.352.989.131.221.851.003 1.033.188.124.125.061.5.08.766a.519.519 0 01.225.28c.251-.03.654-.426.872-.366.246.065.414.801.68.801.267 0 .435-.734.681-.8.255-.068.768.484.989.352.221-.131.003-.851.188-1.033.185-.182.904.036 1.033-.188.13-.224-.423-.734-.353-.989.065-.246.801-.414.801-.68 0-.267-.736-.435-.8-.681-.068-.255.484-.768.352-.989-.131-.221-.851-.003-1.033-.188-.182-.185.039-.904-.188-1.033-.227-.13-.734.423-.989.353-.228-.063-.39-.697-.623-.79zm-9.833-.766v2.754c0 1.566.397 2.74 1.179 3.496.756.729 1.905 1.098 3.414 1.098 1.106 0 2.025-.2 2.73-.594l-.001.026c0-.068.003-.163 0-.238-.076-.003-.171 0-.238 0-.348.008-.776.016-.98-.334-.205-.35.019-.714.195-1.008.037-.059.087-.143.12-.21a3.925 3.925 0 00-.198-.115c-.305-.168-.686-.378-.686-.787 0-.41.38-.62.686-.787.056-.031.137-.076.199-.115-.037-.067-.087-.151-.12-.21-.177-.294-.398-.658-.197-1.009.202-.35.633-.341.98-.333.068 0 .163.003.239 0 .003-.076 0-.17 0-.238-.009-.345-.017-.776.333-.98.35-.205.714.02 1.008.196.06.036.143.086.21.12a3.11 3.11 0 00.115-.199c.06-.106.123-.222.199-.328v-.205l-.103.014c-1.491.178-2.99.264-4.49.262-1.536.002-3.07-.09-4.594-.276zm10.708 4.43c.451 0 .731.28.731.73 0 .452-.283.732-.73.732-.452 0-.732-.28-.732-.731 0-.451.28-.731.731-.731zm.398-2.04a.28.28 0 01.048.393l-2.32 2.963a.267.267 0 01-.218.11.28.28 0 01-.221-.454l2.319-2.964a.28.28 0 01.392-.048zm-.398 2.603c-.14 0-.17.028-.17.17 0 .143.027.171.17.171.143 0 .171-.028.171-.17 0-.143-.03-.171-.17-.171zm-1.888-2.726c.451 0 .731.28.731.731 0 .451-.28.731-.73.731-.452 0-.732-.28-.732-.73 0-.452.28-.732.731-.732zm0 .563c-.14 0-.17.028-.17.171 0 .143.027.17.17.17.143 0 .171-.027.171-.17 0-.143-.03-.17-.17-.17zM10.55 7.216c-1.51 0-2.658.37-3.414 1.098-.782.756-1.18 1.93-1.18 3.496v.55l.24.032c1.447.171 2.9.257 4.354.255 1.535.003 3.07-.091 4.594-.283v-.554c0-1.566-.398-2.74-1.179-3.496-.756-.729-1.905-1.098-3.415-1.098zm0 1.07c.309 0 .56.252.56.56v2.485c0 .308-.251.56-.56.56a.562.562 0 01-.56-.56V8.846c0-.308.252-.56.56-.56z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconOnlineOfferRegular;
