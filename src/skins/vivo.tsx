import {applyAlpha} from '../utils/color';
import {VIVO_SKIN} from './constants';

import type {GetSkin} from './types';

export const palette = {
    vivoPurple: '#660099',
    vivoPurpleDark: '#461E5F',
    vivoPurpleLight90: '#751AA3',
    vivoPurpleLight80: '#8433AD',
    vivoPurpleLight50: '#B280CC',
    vivoPurpleLight20: '#E0CCEB',
    vivoPurpleLight10: '#EFE5F4',
    vivoGreen: '#99CC33',
    vivoGreenDark: '#33A14A',
    vivoGreenLight40: '#D6EAAD',
    vivoBlue: '#00ABDB',
    orange: '#FF9900',
    orangeDark: '#FA6324',
    orangeLight: '#FFD699',
    pink: '#EB3D7D',
    pepper: '#CC1F59',
    pepperDark: '#B71D63',
    pepperLight30: '#F7B1CB',
    grey1: '#F6F6F6',
    grey2: '#EEEEEE',
    grey3: '#DDDDDD',
    grey4: '#999999',
    grey5: '#666666',
    grey6: '#000000',
    white: '#FFFFFF',
    // specific for dark mode:
    darkModeBlack: '#191919',
    darkModeGrey: '#242424',
    darkModeGrey6: '#313235',
} as const;

export const getVivoSkin: GetSkin = () => {
    return {
        name: VIVO_SKIN,
        colors: {
            // BACKGROUNDS
            appBarBackground: palette.white,
            background: palette.white,
            backgroundContainer: palette.white,
            backgroundBrand: palette.vivoPurple,
            backgroundOverlay: applyAlpha(palette.grey6, 0.6),
            backgroundSkeleton: palette.grey1,
            backgroundSkeletonInverse: applyAlpha(palette.white, 0.2),
            backgroundFeedbackBottom: palette.vivoPurple,
            navigationBarBackground: palette.vivoPurple,
            backgroundAlternative: palette.grey1,

            skeletonWave: palette.grey2,

            // BORDERS
            borderLight: palette.grey1,
            border: palette.grey3,
            borderDark: palette.grey5,
            borderSelected: palette.vivoPurple,

            // BUTTONS
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundDisabled: palette.pepperLight30,
            buttonDangerBackgroundSelected: palette.pepperDark,
            buttonDangerBackgroundHover: palette.pepperDark,
            buttonLinkBackgroundSelected: palette.vivoPurpleLight10,
            buttonLinkBackgroundSelectedInverse: applyAlpha(palette.white, 0.2),
            buttonPrimaryBackground: palette.vivoPurple,
            buttonPrimaryBackgroundDisabled: palette.vivoPurpleLight20,
            buttonPrimaryBackgroundDisabledInverse: palette.vivoPurpleLight50,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.vivoPurpleDark,
            buttonPrimaryBackgroundHover: palette.vivoPurpleDark,
            buttonPrimaryBackgroundSelectedInverse: palette.vivoPurpleLight50,
            buttonSecondaryBackground: palette.vivoPurple,
            buttonSecondaryBackgroundDisabled: palette.vivoPurpleLight20,
            buttonSecondaryBackgroundSelected: palette.vivoPurpleDark,
            buttonSecondaryBorderDisabledInverse: palette.vivoPurpleLight50,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderSelectedInverse: palette.vivoPurpleLight50,

            textButtonPrimary: palette.white,
            textButtonPrimaryDisabled: palette.white,
            textButtonPrimaryInverse: palette.vivoPurple,
            textButtonPrimaryInverseDisabled: palette.vivoPurpleLight20,
            textButtonPrimaryInverseSelected: palette.vivoPurple,
            textButtonSecondary: palette.vivoPurple,
            textButtonSecondaryDisabled: palette.vivoPurpleLight20,
            textButtonSecondarySelected: palette.vivoPurpleDark,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseDisabled: palette.vivoPurpleLight50,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.vivoPurple,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkDangerDisabled: palette.pepperLight30,
            textLinkDisabled: palette.vivoPurpleLight50,
            textLinkSnackbar: palette.vivoPurpleLight50,

            // CONTROLS
            control: palette.grey3,
            controlActivated: palette.vivoPurple,
            controlError: palette.pepper,
            loadingBar: palette.pink,
            loadingBarBackground: palette.pepperLight30,
            loadingBarBackgroundInverse: palette.vivoPurpleLight50,
            loadingBarInverse: palette.vivoPurple,

            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.vivoPurpleLight20,
            iosControlKnob: palette.white,

            // DIVIDERS
            divider: palette.grey2,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.vivoPurple,

            // FEEDBACKS
            badge: palette.pepperDark,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,

            // GLOBAL
            brand: palette.vivoPurple,
            brandDark: palette.vivoPurpleDark,
            inverse: palette.white,
            neutralHigh: palette.grey6,
            neutralMedium: palette.grey5,
            neutralLow: palette.grey3,
            promo: palette.vivoPurple,
            highlight: palette.pink,

            textPrimary: palette.grey6,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.white,
            textDisabled: palette.grey4,
            textAmount: palette.vivoPurple,

            // STATES
            error: palette.pepper,
            success: palette.vivoGreen,
            warning: palette.orange,

            // BARS TEXTS
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.vivoPurpleLight50,
            textNavigationSearchBarHint: palette.vivoPurpleLight50, // iOS only
            textNavigationSearchBarText: palette.white, // iOS only
            textAppBar: palette.grey4,
            textAppBarSelected: palette.vivoPurple,
        },
        darkModeColors: {
            appBarBackground: palette.darkModeGrey,
            background: palette.darkModeBlack,
            backgroundContainer: palette.darkModeGrey,
            backgroundBrand: palette.darkModeBlack,
            backgroundOverlay: applyAlpha(palette.darkModeGrey, 0.8),
            backgroundSkeleton: palette.darkModeGrey6,
            backgroundSkeletonInverse: palette.darkModeGrey6,
            navigationBarBackground: palette.darkModeBlack,
            backgroundAlternative: palette.darkModeGrey,
            backgroundFeedbackBottom: palette.darkModeBlack,
            skeletonWave: palette.grey5,
            borderLight: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderDark: palette.grey5,
            borderSelected: palette.vivoPurpleLight80,
            buttonDangerBackgroundDisabled: applyAlpha(palette.white, 0.05),
            buttonLinkBackgroundSelected: applyAlpha(palette.white, 0.05),
            buttonLinkBackgroundSelectedInverse: applyAlpha(palette.white, 0.05),
            buttonPrimaryBackground: palette.vivoPurpleLight80,
            buttonPrimaryBackgroundDisabled: applyAlpha(palette.white, 0.05),
            buttonPrimaryBackgroundDisabledInverse: applyAlpha(palette.white, 0.05),
            buttonPrimaryBackgroundInverse: palette.vivoPurpleLight80,
            buttonPrimaryBackgroundSelected: palette.vivoPurpleDark,
            buttonPrimaryBackgroundHover: palette.vivoPurpleDark,
            buttonPrimaryBackgroundSelectedInverse: palette.vivoPurpleDark,
            buttonSecondaryBackground: palette.vivoPurpleLight80,
            buttonSecondaryBackgroundDisabled: applyAlpha(palette.white, 0.05),
            buttonSecondaryBackgroundSelected: palette.vivoPurpleDark,
            buttonSecondaryBorderDisabledInverse: applyAlpha(palette.white, 0.05),
            buttonSecondaryBorderInverse: palette.vivoPurpleLight80,
            buttonSecondaryBorderSelectedInverse: palette.vivoPurpleDark,
            textButtonPrimary: palette.grey2,
            textButtonPrimaryDisabled: palette.grey5,
            textButtonPrimaryInverse: palette.grey2,
            textButtonPrimaryInverseDisabled: palette.grey5,
            textButtonPrimaryInverseSelected: palette.grey2,
            textButtonSecondary: palette.grey2,
            textButtonSecondaryDisabled: palette.grey5,
            textButtonSecondarySelected: palette.grey4,
            textButtonSecondaryInverse: palette.grey2,
            textButtonSecondaryInverseDisabled: palette.grey5,
            textButtonSecondaryInverseSelected: palette.grey4,
            textLink: palette.vivoPurpleLight50,
            textLinkInverse: palette.vivoPurpleLight50,
            textLinkDisabled: palette.darkModeGrey6,
            control: palette.darkModeGrey6,
            controlActivated: palette.vivoPurpleLight80,
            loadingBar: palette.vivoPurpleLight80,
            loadingBarBackground: palette.darkModeGrey6,
            loadingBarBackgroundInverse: palette.grey1,
            loadingBarInverse: palette.vivoPurpleLight80,
            toggleAndroidInactive: palette.grey4,
            toggleAndroidBackgroundActive: palette.vivoPurpleLight50,
            iosControlKnob: palette.grey2,
            divider: applyAlpha(palette.white, 0.05),
            dividerInverse: applyAlpha(palette.white, 0.05),
            navigationBarDivider: palette.darkModeBlack,
            feedbackInfoBackground: palette.darkModeGrey6,
            brand: palette.vivoPurpleLight80,
            brandDark: palette.darkModeGrey6,
            inverse: palette.grey2,
            neutralHigh: palette.grey2,
            neutralMedium: palette.grey5,
            neutralLow: palette.darkModeGrey6,
            promo: palette.vivoPurpleLight80,
            textPrimary: palette.grey2,
            textPrimaryInverse: palette.grey2,
            textSecondary: palette.grey4,
            textSecondaryInverse: palette.grey4,
            textDisabled: palette.grey5,
            textAmount: palette.vivoPurpleLight50,
            textNavigationBarPrimary: palette.grey2,
            textNavigationBarSecondary: palette.grey4,
            textNavigationSearchBarHint: palette.grey4,
            textNavigationSearchBarText: palette.grey2,
            textAppBar: palette.grey5,
            textAppBarSelected: palette.grey2,
        },
    };
};
