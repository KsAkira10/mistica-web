import {O2_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
    o2BluePrimary: '#0019A5',
    o2BluePrimary70: '#000066',
    o2BluePrimary90: '#000033',
    o2BluePrimary30: '#808CD2',
    o2BluePrimary15: '#CCD1ED',
    o2BluePrimary10: '#E5E8F6',
    o2BlueMid: '#0090D0',
    o2BlueLight: '#41B6E6',
    o2BlueLight30: '#C6E9F7',
    o2BlueLight35: '#8DD3F0',
    o2Teal: '#01B7B4',
    o2Green: '#91C90E',
    o2Green10: '#F4FAE7',
    o2Green40: '#B2D956',
    o2Green80: '#415A06',
    o2Yellow: '#FEDB00',
    o2Orange: '#FF7F41',
    o2Orange10: '#FFF2EC',
    o2Orange40: '#FFA57A',
    o2Orange75: '#A6522A',
    o2Pink: '#E45DBF',
    o2Purple: '#952D98',
    o2Purple10: '#F4EAF5',
    o2Purple30: '#CA9ACB',
    pepper: '#F4364C',
    pepper10: '#FEEBED',
    pepper20: '#FCC3C9',
    pepper40: '#FF7380',
    pepper60: '#C32B3D',
    grey1: '#F6F6F6',
    grey2: '#EEEEEE',
    grey3: '#DDDDDD',
    grey4: '#999999',
    grey5: '#707070',
    grey6: '#000033',
    white: '#FFFFFF',
    darkModeBlack: '#191919',
    darkModeGrey: '#242424',
    darkModeGrey6: '#313235',
    darkModeO2BluePrimary: '#0020D6',
    darkModeO2BluePrimaryDark: '#000099',
};

export const getO2Skin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: O2_SKIN,
        colors: {
            background: palette.white,
            backgroundAlternative: palette.grey1,
            backgroundBrand: palette.o2BluePrimary,
            backgroundBrandSecondary: palette.o2BluePrimary,
            backgroundContainer: palette.white,
            backgroundContainerHover: applyAlpha(palette.darkModeBlack, 0.03),
            backgroundContainerPressed: applyAlpha(palette.darkModeBlack, 0.05),
            backgroundContainerBrand: palette.o2BluePrimary,
            backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: palette.o2BluePrimary70,
            backgroundContainerAlternative: palette.grey1,
            backgroundOverlay: applyAlpha(palette.grey6, 0.6),
            backgroundSkeleton: palette.grey2,
            backgroundSkeletonInverse: palette.o2BluePrimary70,
            backgroundFeedbackBottom: palette.o2BluePrimary,
            appBarBackground: palette.white,
            navigationBarBackground: palette.o2BluePrimary,
            skeletonWave: palette.grey2,
            borderLow: palette.grey1,
            border: palette.grey3,
            borderHigh: palette.grey5,
            borderSelected: palette.o2BluePrimary,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper60,
            buttonDangerBackgroundHover: palette.pepper60,
            buttonLinkBackgroundSelected: palette.o2BluePrimary10,
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.o2BluePrimary,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.o2BluePrimary70,
            buttonPrimaryBackgroundHover: palette.o2BluePrimary70,
            buttonPrimaryBackgroundInverseSelected: palette.o2BluePrimary30,
            buttonSecondaryBorder: palette.o2BluePrimary,
            buttonSecondaryBorderSelected: palette.o2BluePrimary70,
            buttonSecondaryBackgroundHover: palette.o2BluePrimary10,
            buttonSecondaryBackgroundSelected: palette.o2BluePrimary10,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.o2BluePrimary30,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.o2BluePrimary,
            textButtonPrimaryInverseSelected: palette.o2BluePrimary70,
            textButtonSecondary: palette.o2BluePrimary,
            textButtonSecondarySelected: palette.o2BluePrimary70,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.o2BluePrimary,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.o2BluePrimary30,
            control: palette.grey3,
            controlActivated: palette.o2BluePrimary,
            controlError: palette.pepper,
            loadingBar: palette.o2BluePrimary,
            loadingBarBackground: palette.grey1,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.o2BluePrimary15,
            iosControlKnob: palette.white,
            divider: palette.grey2,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.o2BluePrimary,
            badge: palette.pepper60,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,
            brand: palette.o2BluePrimary,
            brandHigh: palette.o2BluePrimary70,
            inverse: palette.white,
            neutralHigh: palette.grey6,
            neutralMedium: palette.grey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.grey1,
            neutralLowAlternative: palette.grey2,
            textPrimary: palette.grey6,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.o2BluePrimary15,
            success: palette.o2Green,
            warning: palette.o2Orange,
            error: palette.pepper,
            promo: palette.o2Purple,
            highlight: palette.o2Pink,
            successLow: palette.o2Green10,
            warningLow: palette.o2Orange10,
            errorLow: palette.pepper10,
            promoLow: palette.o2Purple10,
            brandLow: palette.o2BluePrimary10,
            successHigh: palette.o2Green80,
            warningHigh: palette.o2Orange75,
            errorHigh: palette.pepper60,
            promoHigh: palette.o2Purple,
            successHighInverse: palette.o2Green80,
            warningHighInverse: palette.o2Orange75,
            errorHighInverse: palette.pepper60,
            promoHighInverse: palette.o2Purple,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.o2BluePrimary30,
            textNavigationSearchBarHint: palette.o2BluePrimary30,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey4,
            textAppBarSelected: palette.o2BluePrimary,
            customTabsBackground: palette.o2BluePrimary,
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
            backgroundSkeleton: palette.darkModeGrey6,
            backgroundSkeletonInverse: palette.darkModeGrey6,
            backgroundFeedbackBottom: palette.darkModeBlack,
            appBarBackground: palette.darkModeGrey,
            navigationBarBackground: palette.darkModeBlack,
            skeletonWave: palette.grey5,
            borderLow: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderHigh: palette.grey5,
            borderSelected: palette.o2BluePrimary30,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper60,
            buttonDangerBackgroundHover: palette.pepper60,
            buttonLinkBackgroundSelected: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundInverseSelected: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.darkModeO2BluePrimary,
            buttonPrimaryBackgroundInverse: palette.darkModeO2BluePrimary,
            buttonPrimaryBackgroundSelected: palette.darkModeO2BluePrimaryDark,
            buttonPrimaryBackgroundHover: palette.darkModeO2BluePrimaryDark,
            buttonPrimaryBackgroundInverseSelected: palette.darkModeO2BluePrimaryDark,
            buttonSecondaryBackgroundSelected: applyAlpha(palette.white, 0.15),
            buttonSecondaryBorder: palette.white,
            buttonSecondaryBorderSelected: palette.white,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInverseSelected: palette.white,
            buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseSelected: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.grey2,
            textButtonPrimaryInverse: palette.grey2,
            textButtonPrimaryInverseSelected: palette.grey2,
            textButtonSecondary: palette.grey2,
            textButtonSecondarySelected: palette.grey2,
            textButtonSecondaryInverse: palette.grey2,
            textButtonSecondaryInverseSelected: palette.grey2,
            textLink: palette.o2BluePrimary30,
            textLinkInverse: palette.o2BluePrimary30,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.o2BluePrimary30,
            control: palette.darkModeGrey6,
            controlActivated: palette.o2BluePrimary30,
            controlError: palette.pepper,
            loadingBar: palette.darkModeO2BluePrimary,
            loadingBarBackground: palette.darkModeGrey6,
            toggleAndroidInactive: palette.grey4,
            toggleAndroidBackgroundActive: palette.o2BlueLight30,
            iosControlKnob: palette.grey2,
            badge: palette.pepper60,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.darkModeGrey6,
            divider: applyAlpha(palette.white, 0.05),
            dividerInverse: applyAlpha(palette.white, 0.05),
            navigationBarDivider: palette.darkModeBlack,
            brand: palette.o2BluePrimary30,
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
            success: palette.o2Green,
            warning: palette.o2Orange,
            error: palette.pepper,
            promo: palette.o2Purple,
            highlight: palette.o2Pink,
            successLow: palette.darkModeGrey6,
            warningLow: palette.darkModeGrey6,
            errorLow: palette.darkModeGrey6,
            promoLow: palette.darkModeGrey6,
            brandLow: palette.darkModeGrey6,
            successHigh: palette.o2Green40,
            warningHigh: palette.o2Orange40,
            errorHigh: palette.pepper40,
            promoHigh: palette.o2Purple30,
            successHighInverse: palette.o2Green80,
            warningHighInverse: palette.o2Orange75,
            errorHighInverse: palette.pepper60,
            promoHighInverse: palette.o2Purple,
            textNavigationBarPrimary: palette.grey2,
            textNavigationBarSecondary: palette.grey4,
            textNavigationSearchBarHint: palette.grey4,
            textNavigationSearchBarText: palette.grey2,
            textAppBar: palette.grey5,
            textAppBarSelected: palette.grey2,
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
            cardTitle: {weight: 'regular'},
            button: {weight: 'medium'},
            link: {weight: 'medium'},
            title1: {weight: 'medium'},
            indicator: {weight: 'medium'},
            text5: {weight: 'light'},
            text6: {weight: 'light'},
            text7: {weight: 'light'},
            text8: {weight: 'light'},
            text9: {weight: 'light'},
            text10: {weight: 'light'},
            tabsLabel: {size: {mobile: 16, desktop: 18}, lineHeight: {mobile: 24, desktop: 24}},
        },
    };
    return skin;
};
