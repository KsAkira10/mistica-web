import * as React from 'react';
import Box from './box';
import {useTheme} from './hooks';
import {createUseStyles} from './jss';
import {Text} from './text';
import {ThemeVariant, useIsInverseVariant} from './theme-variant-context';
import {pxToRem} from './utils/css';
import {getPrefixedDataAttributes} from './utils/dom';

import type {DataAttributes, IconProps} from './utils/types';

const useStyles = createUseStyles(() => ({
    tag: {
        display: 'inline-flex',
        verticalAlign: 'middle',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        minWidth: 56,
        padding: ({hasIcon}) => `4px 12px 4px ${hasIcon ? 8 : 12}px`,

        // FIXME: remove this style and use an inline style for the icon once WEB-338 gets merged
        '& svg': {
            display: 'block',
        },
    },
}));

export type TagType = 'promo' | 'active' | 'inactive' | 'success' | 'warning' | 'error';

export type TagProps = {
    // not using "TagType" and repeating the union to make these props playroom autocomplete friendly
    type?: 'promo' | 'active' | 'inactive' | 'success' | 'warning' | 'error';
    children: string;
    Icon?: React.FC<IconProps>;
    dataAttributes?: DataAttributes;
};

const Tag: React.FC<TagProps> = ({Icon, children, dataAttributes, type = 'promo'}) => {
    const classes = useStyles({hasIcon: !!Icon});
    const {colors, isDarkMode} = useTheme();
    const isInverse = useIsInverseVariant();

    if (!children) {
        return null;
    }

    const tagTypeToColors: Record<TagType, [string, string]> = {
        promo: [colors.promoHigh, colors.promoLow],
        active: [colors.brand, colors.brandLow],
        inactive: [colors.neutralMedium, colors.neutralLow],
        success: [colors.successHigh, colors.successLow],
        warning: [colors.warningHigh, colors.warningLow],
        error: [colors.errorHigh, colors.errorLow],
    };
    const [textColor, backgroundColor] = tagTypeToColors[type];

    const shouldUseInverseBackground = isInverse && !isDarkMode;

    return (
        <span
            {...getPrefixedDataAttributes(dataAttributes)}
            className={classes.tag}
            style={{background: shouldUseInverseBackground ? colors.inverse : backgroundColor}}
        >
            {Icon && (
                <Box paddingRight={4}>
                    <Icon color={textColor} size={pxToRem(16)} />
                </Box>
            )}
            <ThemeVariant isInverse={false}>
                <Text color={textColor} size={14} lineHeight={20} weight="medium" truncate>
                    {children}
                </Text>
            </ThemeVariant>
        </span>
    );
};

export default Tag;
