// @flow
import * as React from 'react';
import Box from './box';
import Stack from './stack';
import {createUseStyles} from './jss';
import {ThemeVariant, useIsInverseVariant} from './theme-variant-context';
import ResponsiveLayout from './responsive-layout';
import GridLayout from './grid-layout';
import {useScreenSize, useTheme} from './hooks';
import OverscrollColor from './overscroll-color-context';
import Text from './text';
import NavigationBreadcrumbs from './navigation-breadcrumbs';
import {ButtonPrimary, ButtonSecondary} from './button';

import type {TextProps} from './text';

type OverridableTextProps = {
    color?: $PropertyType<TextProps, 'color'>,
    textDecoration?: $PropertyType<TextProps, 'textDecoration'>,
};

type RichText = string | {text: string, ...OverridableTextProps};

type HeaderProps = {
    pretitle?: RichText,
    title: string,
    preamount?: RichText,
    amount?: string,
    button?: React.Element<typeof ButtonPrimary> | React.Element<typeof ButtonSecondary>,
    subtitle?: RichText,
    isErrorAmount?: boolean,
};

export const Header = ({
    pretitle,
    title,
    preamount,
    amount,
    button,
    subtitle,
    isErrorAmount,
}: HeaderProps): React.Node => {
    const {isMobile} = useScreenSize();
    const theme = useTheme();
    const isInverse = useIsInverseVariant();

    const renderRichText = (richText: RichText, notOverridableProps: $Diff<TextProps, {children: any}>) => {
        if (typeof richText === 'string') {
            return <Text {...notOverridableProps}>{richText}</Text>;
        }
        const {text, ...textProps} = richText;
        return (
            <Text {...textProps} {...notOverridableProps}>
                {richText.text}
            </Text>
        );
    };

    return (
        <Stack space={isMobile ? 24 : 32}>
            <Stack space={8}>
                {pretitle &&
                    renderRichText(pretitle, {
                        size: 16,
                        lineHeight: '24px',
                        truncate: true,
                        color: theme.colors.textPrimary,
                    })}
                <Text
                    as="h2"
                    size={isMobile ? 24 : 32}
                    lineHeight={isMobile ? '32px' : '40px'}
                    weight="light"
                >
                    {title}
                </Text>
            </Stack>
            {(preamount || amount || button || subtitle) && (
                <Stack space={16}>
                    {(preamount || amount) && (
                        <Stack space={8}>
                            {preamount &&
                                renderRichText(preamount, {
                                    size: 16,
                                    lineHeight: '24px',
                                    truncate: true,
                                    color: theme.colors.textPrimary,
                                })}
                            <Text
                                size={isMobile ? 32 : 40}
                                lineHeight={isMobile ? '40px' : '48px'}
                                weight="light"
                                truncate
                                color={
                                    isErrorAmount && !isInverse
                                        ? theme.colors.textError
                                        : theme.colors.textPrimary
                                }
                            >
                                {amount}
                            </Text>
                        </Stack>
                    )}
                    {button}
                    {subtitle && renderRichText(subtitle, {size: 16, lineHeight: '24px', truncate: true})}
                </Stack>
            )}
        </Stack>
    );
};

type MainSectionHeaderProps = {
    title: string,
    description?: string,
    button?: React.Element<typeof ButtonPrimary> | React.Element<typeof ButtonSecondary>,
};

export const MainSectionHeader = ({title, description, button}: MainSectionHeaderProps): React.Node => {
    const {isMobile} = useScreenSize();

    return (
        <Stack space={32}>
            <Stack space={isMobile ? 12 : 16}>
                {title && (
                    <Text
                        as="h1"
                        size={isMobile ? 28 : 40}
                        lineHeight={isMobile ? '32px' : '48px'}
                        weight="light"
                        truncate
                    >
                        {title}
                    </Text>
                )}
                {description && (
                    <Text size={24} lineHeight="32px" weight="light">
                        {description}
                    </Text>
                )}
            </Stack>
            {button}
        </Stack>
    );
};

const useHeaderLayoutStyles = createUseStyles((theme) => ({
    background: {
        background: ({isInverse}) => (isInverse ? theme.colors.backgroundHeading : 'initial'),
    },
    gridItem: {
        gridColumn: 'span 6',
    },
}));

type HeaderLayoutProps = {
    isInverse?: boolean,
    breadcrumbs?: React.Element<typeof NavigationBreadcrumbs>,
    header: React.Element<typeof Header>,
    extra?: React.Node,
};

export const HeaderLayout = ({
    isInverse = true,
    breadcrumbs,
    header,
    extra,
}: HeaderLayoutProps): React.Node => {
    const classes = useHeaderLayoutStyles({isInverse});
    const {isTabletOrSmaller} = useScreenSize();

    return (
        <ResponsiveLayout className={classes.background}>
            <ThemeVariant isInverse={isInverse}>
                <OverscrollColor />
                {isTabletOrSmaller ? (
                    <Box paddingTop={32} paddingBottom={24} paddingRight={16}>
                        <Stack space={24}>
                            {header}
                            {extra}
                        </Stack>
                    </Box>
                ) : (
                    <Box paddingTop={breadcrumbs ? 16 : 48} paddingBottom={48}>
                        <GridLayout>
                            <div className={classes.gridItem}>
                                <Stack space={32}>
                                    {breadcrumbs}
                                    {header}
                                </Stack>
                            </div>
                            {extra && <div className={classes.gridItem}>{extra}</div>}
                        </GridLayout>
                    </Box>
                )}
            </ThemeVariant>
        </ResponsiveLayout>
    );
};

type MainSectionHeaderLayoutProps = {
    isInverse?: boolean,
    children: React.Element<typeof MainSectionHeader>,
};

export const MainSectionHeaderLayout = ({
    isInverse = true,
    children,
}: MainSectionHeaderLayoutProps): React.Node => {
    const classes = useHeaderLayoutStyles({isInverse});
    const {isMobile} = useScreenSize();

    return (
        <ResponsiveLayout className={classes.background}>
            <ThemeVariant isInverse={isInverse}>
                <OverscrollColor />
                {isMobile ? (
                    <Box paddingTop={12} paddingBottom={24}>
                        {children}
                    </Box>
                ) : (
                    <GridLayout>
                        <div className={classes.gridItem}>
                            <Box paddingY={48}>{children}</Box>
                        </div>
                    </GridLayout>
                )}
            </ThemeVariant>
        </ResponsiveLayout>
    );
};
