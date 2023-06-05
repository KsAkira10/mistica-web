import {MOVISTAR_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
    movistarBlue: '#019DF4',
    movistarBlue10: '#E6F5FD',
    movistarBlue20: '#B3E1FB',
    movistarBlue30: '#80CEF9',
    movistarBlue40: '#4DBAF7',
    movistarBlue55: '#008EDD',
    movistarGreen: '#5CB615',
    movistarGreen10: '#EFF8E8',
    movistarGreen30: '#ADDA8A',
    movistarGreen40: '#8DCC5B',
    movistarGreen60: '#499110',
    movistarGreen70: '#407F0F',
    pepper: '#FF374A',
    pepper10: '#FFEBED',
    pepper40: '#FF7380',
    pepper55: '#D73241',
    pepper70: '#B22634',
    egg: '#F28D15',
    egg10: '#FEF4E8',
    egg40: '#F6AF5B',
    egg80: '#6D3F09',
    pink: '#E63780',
    purple: '#A13EA1',
    purple10: '#F6ECF6',
    purple40: '#BD78BD',
    purple70: '#712B71',
    grey1: '#F6F6F6',
    grey2: '#EEEEEE',
    grey3: '#DDDDDD',
    grey4: '#999999',
    grey5: '#86888C',
    grey6: '#313235',
    white: '#FFFFFF',
    movistarBlueDark: '#0B2739',
    darkModeBlack: '#061824',
    darkModeGrey: '#081F2E',
    darkModeGrey2: '#EAEBEE',
    darkModeGrey3: '#CED4D7',
    darkModeGrey4: '#85939C',
    darkModeGrey5: '#6D7D88',
    darkModeGrey6: '#3C5261',
};

export const getMovistarSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: MOVISTAR_SKIN,
        colors: {
            background: palette.white,
            backgroundAlternative: palette.grey1,
            backgroundBrand: palette.movistarBlue,
            backgroundBrandSecondary: palette.movistarBlueDark,
            backgroundContainer: palette.white,
            backgroundContainerHover: applyAlpha(palette.darkModeBlack, 0.03),
            backgroundContainerPressed: applyAlpha(palette.darkModeBlack, 0.05),
            backgroundContainerBrand: palette.movistarBlue,
            backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.1),
            backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.2),
            backgroundContainerBrandOverInverse: palette.movistarBlue55,
            backgroundContainerAlternative: palette.grey1,
            backgroundOverlay: applyAlpha(palette.movistarBlueDark, 0.6),
            backgroundSkeleton: palette.grey2,
            backgroundSkeletonInverse: palette.movistarBlue55,
            backgroundFeedbackBottom: palette.movistarBlue,
            appBarBackground: palette.white,
            navigationBarBackground: palette.movistarBlue,
            skeletonWave: palette.grey2,
            borderLow: palette.grey1,
            border: palette.grey3,
            borderHigh: palette.grey5,
            borderSelected: palette.movistarBlue,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper55,
            buttonDangerBackgroundHover: palette.pepper55,
            buttonLinkBackgroundSelected: palette.movistarBlue10,
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.2),
            buttonPrimaryBackground: palette.movistarBlue,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.movistarBlue55,
            buttonPrimaryBackgroundHover: palette.movistarBlue55,
            buttonPrimaryBackgroundInverseSelected: palette.movistarBlue30,
            buttonSecondaryBorder: palette.movistarBlue,
            buttonSecondaryBorderSelected: palette.movistarBlue55,
            buttonSecondaryBackgroundHover: palette.movistarBlue10,
            buttonSecondaryBackgroundSelected: palette.movistarBlue10,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.white,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.2),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.2),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.movistarBlue,
            textButtonPrimaryInverseSelected: palette.movistarBlue,
            textButtonSecondary: palette.movistarBlue,
            textButtonSecondarySelected: palette.movistarBlue55,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.movistarBlue,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.movistarBlue30,
            control: palette.grey3,
            controlActivated: palette.movistarBlue,
            controlError: palette.pepper,
            loadingBar: palette.movistarBlue30,
            loadingBarBackground: palette.movistarBlue55,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.movistarBlue20,
            iosControlKnob: palette.white,
            divider: palette.grey2,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.movistarBlue,
            badge: palette.pepper55,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.movistarBlueDark,
            brand: palette.movistarBlue,
            brandHigh: palette.movistarBlue55,
            inverse: palette.white,
            neutralHigh: palette.movistarBlueDark,
            neutralMedium: palette.grey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.grey1,
            neutralLowAlternative: palette.grey2,
            textPrimary: palette.movistarBlueDark,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.movistarBlue10,
            success: palette.movistarGreen,
            warning: palette.egg,
            error: palette.pepper,
            promo: palette.purple,
            highlight: palette.pink,
            successLow: palette.movistarGreen10,
            warningLow: palette.egg10,
            errorLow: palette.pepper10,
            promoLow: palette.purple10,
            brandLow: palette.movistarBlue10,
            successHigh: palette.movistarGreen70,
            warningHigh: palette.egg80,
            errorHigh: palette.pepper70,
            promoHigh: palette.purple70,
            successHighInverse: palette.movistarGreen70,
            warningHighInverse: palette.egg80,
            errorHighInverse: palette.pepper70,
            promoHighInverse: palette.purple70,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.movistarBlue20,
            textNavigationSearchBarHint: palette.movistarBlue20,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey4,
            textAppBarSelected: palette.movistarBlue,
            customTabsBackground: palette.movistarBlue,
        },
        darkModeColors: {
            background: palette.darkModeBlack,
            backgroundAlternative: palette.darkModeBlack,
            backgroundBrand: palette.darkModeBlack,
            backgroundBrandSecondary: palette.darkModeBlack,
            backgroundContainer: palette.darkModeGrey,
            backgroundContainerHover: applyAlpha(palette.white, 0.03),
            backgroundContainerPressed: applyAlpha(palette.white, 0.05),
            backgroundContainerBrand: palette.darkModeGrey,
            backgroundContainerBrandHover: applyAlpha(palette.white, 0.03),
            backgroundContainerBrandPressed: applyAlpha(palette.white, 0.05),
            backgroundContainerBrandOverInverse: palette.darkModeGrey,
            backgroundContainerAlternative: palette.darkModeGrey,
            backgroundOverlay: applyAlpha(palette.darkModeGrey, 0.8),
            backgroundSkeleton: palette.movistarBlueDark,
            backgroundSkeletonInverse: palette.movistarBlueDark,
            backgroundFeedbackBottom: palette.darkModeBlack,
            appBarBackground: palette.darkModeGrey,
            navigationBarBackground: palette.darkModeBlack,
            skeletonWave: palette.darkModeGrey6,
            borderLow: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderHigh: palette.darkModeGrey4,
            borderSelected: palette.movistarBlue,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper55,
            buttonDangerBackgroundHover: palette.pepper55,
            buttonLinkBackgroundSelected: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.movistarBlue,
            buttonPrimaryBackgroundInverse: palette.movistarBlue,
            buttonPrimaryBackgroundSelected: palette.movistarBlue55,
            buttonPrimaryBackgroundHover: palette.movistarBlue55,
            buttonPrimaryBackgroundInverseSelected: palette.movistarBlue55,
            buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundSelected: applyAlpha(palette.white, 0.15),
            buttonSecondaryBorder: palette.white,
            buttonSecondaryBorderSelected: palette.white,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.white,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.darkModeGrey2,
            textButtonPrimaryInverse: palette.darkModeGrey2,
            textButtonPrimaryInverseSelected: palette.darkModeGrey2,
            textButtonSecondary: palette.darkModeGrey2,
            textButtonSecondarySelected: palette.darkModeGrey4,
            textButtonSecondaryInverse: palette.darkModeGrey2,
            textButtonSecondaryInverseSelected: palette.darkModeGrey4,
            textLink: palette.movistarBlue,
            textLinkInverse: palette.movistarBlue,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.movistarBlue30,
            control: palette.darkModeGrey6,
            controlActivated: palette.movistarBlue,
            controlError: palette.pepper,
            loadingBar: palette.movistarBlue,
            loadingBarBackground: palette.darkModeGrey6,
            toggleAndroidInactive: palette.darkModeGrey4,
            toggleAndroidBackgroundActive: palette.movistarBlue20,
            iosControlKnob: palette.darkModeGrey2,
            divider: applyAlpha(palette.white, 0.05),
            dividerInverse: applyAlpha(palette.white, 0.05),
            navigationBarDivider: palette.darkModeBlack,
            badge: palette.pepper55,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.movistarBlueDark,
            brand: palette.movistarBlue,
            brandHigh: palette.darkModeGrey,
            inverse: palette.darkModeGrey2,
            neutralHigh: palette.darkModeGrey2,
            neutralMedium: palette.darkModeGrey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.movistarBlueDark,
            neutralLowAlternative: palette.movistarBlueDark,
            textPrimary: palette.darkModeGrey2,
            textPrimaryInverse: palette.darkModeGrey2,
            textSecondary: palette.darkModeGrey4,
            textSecondaryInverse: palette.darkModeGrey4,
            success: palette.movistarGreen,
            warning: palette.egg,
            error: palette.pepper,
            promo: palette.purple,
            highlight: palette.pink,
            successLow: palette.movistarBlueDark,
            warningLow: palette.movistarBlueDark,
            errorLow: palette.movistarBlueDark,
            promoLow: palette.movistarBlueDark,
            brandLow: palette.movistarBlueDark,
            successHigh: palette.movistarGreen40,
            warningHigh: palette.egg40,
            errorHigh: palette.pepper40,
            promoHigh: palette.purple40,
            successHighInverse: palette.movistarGreen70,
            warningHighInverse: palette.egg80,
            errorHighInverse: palette.pepper70,
            promoHighInverse: palette.purple70,
            textNavigationBarPrimary: palette.darkModeGrey2,
            textNavigationBarSecondary: palette.darkModeGrey4,
            textNavigationSearchBarHint: palette.darkModeGrey4,
            textNavigationSearchBarText: palette.darkModeGrey2,
            textAppBar: palette.darkModeGrey5,
            textAppBarSelected: palette.darkModeGrey2,
            customTabsBackground: palette.darkModeBlack,
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
        },
        textPresets: {
            cardTitle: {weight: 'bold'},
            text5: {weight: 'bold'},
            text6: {weight: 'bold'},
            text7: {weight: 'bold'},
            text8: {weight: 'bold'},
            text9: {weight: 'bold'},
            text10: {weight: 'bold'},
        },
    };
    return skin;
};
