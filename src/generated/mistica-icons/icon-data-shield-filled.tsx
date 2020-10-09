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

const IconDataShieldFilled: React.FC<Props> = ({color, size = 24}) => {
    const {colors} = useTheme();
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? colors.iconInverse : colors.iconPrimary);
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation">
            <path
                d="M10.784 5.244c-1.131-.34-1.818-.801-2-1.33 0-.01 0-.01-.008-.018.182-.53.868-1 1.994-1.339C11.96 2.2 13.538 2 15.207 2c1.67 0 3.25.199 4.432.557 1.185.356 1.854.827 2.002 1.384 0 0-.008.009-.008.017-.202.513-.88.955-1.986 1.286-1.193.355-2.762.557-4.431.557-1.67-.003-3.238-.202-4.432-.557zm2.681 6.459c.006-.322.011-.622.014-.882l.003-.356c-1.185 0-1.933-.493-2.602-.938-.58-.384-1.138-.746-1.972-.86v5.072H13.4c.028-.677.05-1.355.064-2.036zm-.288 4.549c.016-.095.03-.213.044-.322.02-.14.037-.289.054-.445.016-.171.036-.348.05-.535H8.908v5.168c.495-.272.983-.563 1.456-.874l.053-.037a13.699 13.699 0 001.485-1.129l.067-.064a5.55 5.55 0 00.717-.768c.023-.028.04-.053.06-.08a2.94 2.94 0 00.243-.385 1.82 1.82 0 00.188-.529zm-5.48-2.51V8.681c-.787.128-1.322.476-1.879.846-.678.448-1.434.95-2.591.95h-.011c.005.75.025 2.033.084 3.265h4.398zm0 6.328v-5.12H3.37c.042.498.09.95.151 1.302.221 1.269 2.403 2.843 4.177 3.818zm7.522-9.168c-.183 0-.356-.008-.533-.014-.002.26-.005.552-.01.868.178.006.358.014.543.014 1.759 0 3.42-.21 4.683-.59.714-.21 1.325-.505 1.784-.86v3.86c-.215.408-.86.946-2.036 1.305-1.185.355-2.76.554-4.431.554-.267 0-.527-.011-.785-.022-.02.157-.042.308-.064.442-.025.143-.067.28-.115.42.316.017.639.029.966.029 1.76 0 3.42-.208 4.684-.592.714-.207 1.325-.512 1.784-.868v3.434c0 .681-.686 1.236-2.045 1.645-1.193.355-2.767.557-4.431.557-1.664 0-3.238-.199-4.44-.557l-.103-.034c-.664.417-1.353.798-2.062 1.137a.594.594 0 01-.516 0c-.546-.258-5.308-2.571-5.761-5.168C1.989 14.504 2 10.006 2 9.815a.604.604 0 01.748-.583c1.076.166 1.661-.22 2.4-.711.78-.515 1.664-1.1 3.197-1.1h.005c.132 0 .252.01.373.016v-2.23c.434.348 1.036.645 1.812.869 1.272.38 2.933.59 4.684.59 1.75 0 3.411-.21 4.683-.59.76-.227 1.35-.505 1.784-.855v3.824c-.215.409-.86.95-2.036 1.305-1.185.361-2.762.55-4.431.552z"
                fill={fillColor}
            />
        </svg>
    );
};

export default IconDataShieldFilled;
