import {VIVO_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
    vivoPurple: '#660099',
    vivoPurpleDark: '#461E5F',
    vivoPurpleLight10: '#EFE5F4',
    vivoPurpleLight20: '#E0CCEB',
    vivoPurpleLight50: '#B280CC',
    vivoPurpleLight80: '#8433AD',
    vivoPurpleLight90: '#751AA3',
    vivoGreen: '#99CC33',
    vivoGreenDark: '#225C3D',
    vivoGreenLight10: '#EDF8E8',
    vivoGreen25: '#D6EBAD',
    vivoGreenLight30: '#91AE9E',
    vivoBlue: '#00ABDB',
    orange: '#FF9900',
    orange25: '#FFD699',
    orangeDark: '#972A1D',
    orangeLight10: '#FFEFE1',
    orangeLight40: '#FFB84C',
    pink: '#EB3D7D',
    pepper: '#CC1F59',
    pepperDark: '#B71D63',
    pepperDark80: '#8F2052',
    pepperLight10: '#FCE4EF',
    pepperLight30: '#F7B1CB',
    pepperLight40: '#DB628B',
    grey1: '#F6F6F6',
    grey2: '#EEEEEE',
    grey3: '#DDDDDD',
    grey4: '#999999',
    grey5: '#666666',
    grey6: '#000000',
    white: '#FFFFFF',
    darkModeBlack: '#191919',
    darkModeGrey: '#242424',
    darkModeGrey6: '#313235',
};

export const getVivoSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: VIVO_SKIN,
        colors: {
            background: palette.white,
            backgroundAlternative: palette.grey1,
            backgroundBrand: palette.vivoPurple,
            backgroundBrandSecondary: palette.vivoPurple,
            backgroundContainer: palette.white,
            backgroundContainerError: palette.pepperLight10,
            backgroundContainerHover: applyAlpha(palette.darkModeBlack, 0.03),
            backgroundContainerPressed: applyAlpha(palette.darkModeBlack, 0.05),
            backgroundContainerBrand: palette.vivoPurple,
            backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: palette.vivoPurpleDark,
            backgroundContainerAlternative: palette.grey1,
            backgroundOverlay: applyAlpha(palette.grey6, 0.6),
            backgroundSkeleton: palette.grey2,
            backgroundSkeletonInverse: palette.vivoPurpleDark,
            backgroundBrandTop: palette.vivoPurple,
            backgroundBrandBottom: palette.vivoPurple,
            appBarBackground: palette.white,
            navigationBarBackground: palette.vivoPurple,
            skeletonWave: palette.grey2,
            borderLow: palette.grey1,
            border: palette.grey3,
            borderHigh: palette.grey5,
            borderSelected: palette.vivoPurple,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepperDark,
            buttonDangerBackgroundHover: palette.pepperDark,
            buttonLinkDangerBackgroundSelected: palette.pepperLight10,
            buttonLinkDangerBackgroundInverse: palette.white,
            buttonLinkDangerBackgroundInverseSelected: palette.pepperLight10,
            buttonLinkBackgroundSelected: palette.vivoPurpleLight10,
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.1),
            buttonPrimaryBackground: palette.vivoPurple,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.vivoPurpleDark,
            buttonPrimaryBackgroundHover: palette.vivoPurpleDark,
            buttonPrimaryBackgroundInverseSelected: palette.vivoPurpleLight50,
            buttonSecondaryBorder: palette.vivoPurple,
            buttonSecondaryBorderSelected: palette.vivoPurpleDark,
            buttonSecondaryBackgroundHover: palette.vivoPurpleLight10,
            buttonSecondaryBackgroundSelected: palette.vivoPurpleLight10,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.white,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.vivoPurple,
            textButtonPrimaryInverseSelected: palette.vivoPurple,
            textButtonSecondary: palette.vivoPurple,
            textButtonSecondarySelected: palette.vivoPurpleDark,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.vivoPurple,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.vivoPurpleLight50,
            textActivated: palette.vivoPurple,
            textBrand: palette.vivoPurple,
            control: palette.grey3,
            controlActivated: palette.vivoPurple,
            controlInverse: palette.vivoPurpleLight50,
            controlActivatedInverse: palette.white,
            controlError: palette.pepper,
            barTrack: palette.grey3,
            loadingBar: palette.pink,
            loadingBarBackground: palette.pepperLight30,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.vivoPurpleLight20,
            iosControlKnob: palette.white,
            divider: palette.grey2,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.vivoPurple,
            badge: palette.pepperDark,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,
            brand: palette.vivoPurple,
            brandHigh: palette.vivoPurpleDark,
            inverse: palette.white,
            neutralHigh: palette.grey6,
            neutralMedium: palette.grey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.grey1,
            neutralLowAlternative: palette.grey2,
            textPrimary: palette.grey6,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.vivoPurpleLight20,
            success: palette.vivoGreen,
            warning: palette.orange,
            error: palette.pepper,
            textError: palette.pepper,
            textErrorInverse: palette.white,
            promo: palette.vivoPurple,
            highlight: palette.pink,
            successLow: palette.vivoGreenLight10,
            warningLow: palette.orangeLight10,
            errorLow: palette.pepperLight10,
            promoLow: palette.vivoPurpleLight10,
            brandLow: palette.vivoPurpleLight10,
            successHigh: palette.vivoGreenDark,
            warningHigh: palette.orangeDark,
            errorHigh: palette.pepperDark80,
            promoHigh: palette.vivoPurple,
            successHighInverse: palette.vivoGreenDark,
            warningHighInverse: palette.orangeDark,
            errorHighInverse: palette.pepperDark80,
            promoHighInverse: palette.vivoPurple,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.vivoPurpleLight50,
            textNavigationSearchBarHint: palette.vivoPurpleLight50,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey4,
            textAppBarSelected: palette.vivoPurple,
            customTabsBackground: palette.vivoPurple,
            tagTextPromo: palette.vivoPurple,
            tagTextActive: palette.vivoPurple,
            tagTextInactive: palette.grey5,
            tagTextSuccess: palette.vivoGreenDark,
            tagTextWarning: palette.orangeDark,
            tagTextError: palette.pepperDark80,
            tagBackgroundPromo: palette.vivoPurpleLight10,
            tagBackgroundActive: palette.vivoPurpleLight10,
            tagBackgroundInactive: palette.grey1,
            tagBackgroundSuccess: palette.vivoGreenLight10,
            tagBackgroundWarning: palette.orangeLight10,
            tagBackgroundError: palette.pepperLight10,
            cardContentOverlay: `linear-gradient(180deg, ${applyAlpha(palette.grey6, 0)} 0%, ${applyAlpha(
                palette.grey6,
                0.4
            )} 30%, ${applyAlpha(palette.grey6, 0.7)} 100%)`,
        },
        darkModeColors: {
            background: palette.darkModeBlack,
            backgroundAlternative: palette.darkModeBlack,
            backgroundBrand: palette.darkModeBlack,
            backgroundBrandSecondary: palette.darkModeBlack,
            backgroundContainer: palette.darkModeGrey,
            backgroundContainerError: palette.darkModeGrey,
            backgroundContainerHover: applyAlpha(palette.white, 0.03),
            backgroundContainerPressed: applyAlpha(palette.white, 0.05),
            backgroundContainerBrand: palette.darkModeGrey,
            backgroundContainerBrandHover: applyAlpha(palette.white, 0.03),
            backgroundContainerBrandPressed: applyAlpha(palette.white, 0.05),
            backgroundContainerBrandOverInverse: palette.darkModeGrey,
            backgroundContainerAlternative: palette.darkModeGrey,
            backgroundOverlay: applyAlpha(palette.darkModeGrey, 0.8),
            backgroundSkeleton: palette.darkModeGrey6,
            backgroundSkeletonInverse: palette.darkModeGrey6,
            backgroundBrandTop: palette.darkModeBlack,
            backgroundBrandBottom: palette.darkModeBlack,
            appBarBackground: palette.darkModeGrey,
            navigationBarBackground: palette.darkModeBlack,
            skeletonWave: palette.grey5,
            borderLow: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderHigh: palette.grey5,
            borderSelected: palette.vivoPurple,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepperDark,
            buttonDangerBackgroundHover: palette.pepperDark,
            buttonLinkDangerBackgroundSelected: applyAlpha(palette.white, 0.08),
            buttonLinkDangerBackgroundInverse: applyAlpha(palette.white, 0),
            buttonLinkDangerBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundSelected: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.vivoPurpleLight80,
            buttonPrimaryBackgroundInverse: palette.vivoPurpleLight80,
            buttonPrimaryBackgroundSelected: palette.vivoPurpleDark,
            buttonPrimaryBackgroundHover: palette.vivoPurpleDark,
            buttonPrimaryBackgroundInverseSelected: palette.vivoPurpleDark,
            buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundSelected: applyAlpha(palette.white, 0.15),
            buttonSecondaryBorder: palette.white,
            buttonSecondaryBorderSelected: palette.white,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.white,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.grey2,
            textButtonPrimaryInverse: palette.grey2,
            textButtonPrimaryInverseSelected: palette.grey2,
            textButtonSecondary: palette.grey2,
            textButtonSecondarySelected: palette.grey2,
            textButtonSecondaryInverse: palette.grey2,
            textButtonSecondaryInverseSelected: palette.grey2,
            textLink: palette.vivoPurpleLight50,
            textLinkInverse: palette.vivoPurpleLight50,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.vivoPurpleLight50,
            textActivated: palette.vivoPurpleLight80,
            textBrand: palette.vivoPurpleLight80,
            control: palette.darkModeGrey6,
            controlActivated: palette.vivoPurpleLight80,
            controlInverse: palette.darkModeGrey6,
            controlActivatedInverse: palette.vivoPurpleLight80,
            controlError: palette.pepper,
            barTrack: palette.darkModeGrey6,
            loadingBar: palette.vivoPurpleLight80,
            loadingBarBackground: palette.darkModeGrey6,
            toggleAndroidInactive: palette.grey4,
            toggleAndroidBackgroundActive: palette.vivoPurpleLight50,
            iosControlKnob: palette.grey2,
            divider: applyAlpha(palette.white, 0.05),
            dividerInverse: applyAlpha(palette.white, 0.05),
            navigationBarDivider: palette.darkModeBlack,
            badge: palette.pepperDark,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,
            brand: palette.vivoPurpleLight80,
            brandHigh: applyAlpha(palette.white, 0.05),
            inverse: palette.grey2,
            neutralHigh: palette.grey2,
            neutralMedium: palette.grey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.darkModeGrey6,
            neutralLowAlternative: palette.darkModeGrey6,
            textPrimary: palette.grey2,
            textPrimaryInverse: palette.grey2,
            textSecondary: palette.grey4,
            textSecondaryInverse: palette.grey4,
            success: palette.vivoGreen,
            warning: palette.orange,
            error: palette.pepper,
            textError: palette.pepper,
            textErrorInverse: palette.pepper,
            promo: palette.vivoPurpleLight80,
            highlight: palette.pink,
            successLow: palette.darkModeGrey6,
            warningLow: palette.darkModeGrey6,
            errorLow: palette.darkModeGrey6,
            promoLow: palette.darkModeGrey6,
            brandLow: palette.darkModeGrey6,
            successHigh: palette.vivoGreenLight30,
            warningHigh: palette.orangeLight40,
            errorHigh: palette.pepperLight40,
            promoHigh: palette.vivoPurpleLight50,
            successHighInverse: palette.vivoGreenDark,
            warningHighInverse: palette.orangeDark,
            errorHighInverse: palette.pepperDark80,
            promoHighInverse: palette.vivoPurple,
            textNavigationBarPrimary: palette.grey2,
            textNavigationBarSecondary: palette.grey4,
            textNavigationSearchBarHint: palette.grey4,
            textNavigationSearchBarText: palette.grey2,
            textAppBar: palette.grey5,
            textAppBarSelected: palette.grey2,
            customTabsBackground: palette.darkModeBlack,
            tagTextPromo: palette.vivoPurpleLight50,
            tagTextActive: palette.vivoPurpleLight80,
            tagTextInactive: palette.grey5,
            tagTextSuccess: palette.vivoGreenLight30,
            tagTextWarning: palette.orangeLight40,
            tagTextError: palette.pepperLight40,
            tagBackgroundPromo: palette.darkModeGrey6,
            tagBackgroundActive: palette.darkModeGrey6,
            tagBackgroundInactive: palette.darkModeGrey6,
            tagBackgroundSuccess: palette.darkModeGrey6,
            tagBackgroundWarning: palette.darkModeGrey6,
            tagBackgroundError: palette.darkModeGrey6,
            cardContentOverlay: `linear-gradient(180deg, ${applyAlpha(palette.grey6, 0)} 0%, ${applyAlpha(
                palette.grey6,
                0.4
            )} 30%, ${applyAlpha(palette.grey6, 0.7)} 100%)`,
        },
        borderRadii: {
            avatar: '50%',
            bar: '999px',
            button: '4px',
            checkbox: '2px',
            container: '8px',
            indicator: '999px',
            input: '8px',
            legacyDisplay: '16px',
            popup: '8px',
            sheet: '8px',
            mediaSmall: '8px',
        },
        textPresets: {
            cardTitle: {weight: 'regular'},
            button: {weight: 'medium'},
            tabsLabel: {
                weight: 'medium',
                size: {mobile: 16, desktop: 18},
                lineHeight: {mobile: 24, desktop: 24},
            },
            link: {weight: 'medium'},
            title1: {weight: 'medium'},
            title2: {weight: 'light', size: {mobile: 20, desktop: 28}, lineHeight: {mobile: 24, desktop: 32}},
            indicator: {weight: 'medium'},
            navigationBar: {weight: 'medium'},
            text5: {weight: 'light'},
            text6: {weight: 'light'},
            text7: {weight: 'light'},
            text8: {weight: 'light'},
            text9: {weight: 'light'},
            text10: {weight: 'light'},
        },
    };
    return skin;
};
