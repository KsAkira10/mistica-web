import {O2_NEW_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
    beyondBlue: '#0050FF',
    beyondBlue10: '#E5EDFF',
    beyondBlue15: '#CCDCFF',
    beyondBlue30: '#80A7FF',
    beyondBlue40: '#4D84FF',
    beyondBlue45: '#0A73EB',
    beyondBlue55: '#0044D9',
    beyondBlue70: '#0038B2',
    beyondBlue90: '#001033',
    darkBlue: '#00008C',
    o2BlueLight: '#82DCFA',
    o2BlueLight30: '#C0EEFD',
    o2BlueLight35: '#B4EAFC',
    o2Green: '#00DC7D',
    o2Green10: '#E5FBF2',
    o2Green40: '#4CE7A4',
    o2Green80: '#006338',
    o2Yellow: '#FADC00',
    o2Orange: '#FFA55A',
    o2Orange10: '#FFF6EE',
    o2Orange40: '#FFC08B',
    o2Orange60: '#F06C00',
    o2Orange75: '#996336',
    o2Pink: '#FA96FF',
    o2Pink15: '#FEEAFF',
    o2Pink30: '#FDCAFF',
    o2Pink80: '#704373',
    o2Red: '#FF5A5A',
    o2Red10: '#FFEEEE',
    o2Red20: '#FFCDCD',
    o2Red40: '#FF8B8B',
    o2Red45: '#FF7B7B',
    o2Red60: '#CC4848',
    o2Red65: '#BF4444',
    grey20: '#F3F3F5',
    grey30: '#D9D9DD',
    grey40: '#B4B4BE',
    grey45: '#8C8C9A',
    grey60: '#6E6E77',
    grey80: '#3C3C46',
    black: '#00001E',
    white: '#FFFFFF',
    darkModeBlack: '#00001C',
    darkModeGrey: '#08132B',
    darkModeGrey6: '#14213D',
    darkModeBeyondBlue: '#1A62FF',
};

export const getO2NewSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: O2_NEW_SKIN,
        colors: {
            background: palette.white,
            backgroundAlternative: palette.grey20,
            backgroundBrand: `linear-gradient(180deg, ${palette.darkBlue} 0%, ${palette.beyondBlue} 64%, ${palette.beyondBlue45} 100%)`,
            backgroundBrandSecondary: palette.beyondBlue,
            backgroundContainer: palette.white,
            backgroundContainerError: palette.o2Red10,
            backgroundContainerHover: applyAlpha(palette.darkModeBlack, 0.05),
            backgroundContainerPressed: applyAlpha(palette.darkModeBlack, 0.08),
            backgroundContainerBrand: `linear-gradient(180deg, ${palette.darkBlue} 0%, ${palette.beyondBlue} 64%, ${palette.beyondBlue45} 100%)`,
            backgroundContainerBrandHover: applyAlpha(palette.darkModeBlack, 0.2),
            backgroundContainerBrandPressed: applyAlpha(palette.darkModeBlack, 0.4),
            backgroundContainerBrandOverInverse: palette.beyondBlue70,
            backgroundContainerAlternative: palette.grey20,
            backgroundOverlay: applyAlpha(palette.black, 0.6),
            backgroundSkeleton: palette.grey30,
            backgroundSkeletonInverse: palette.beyondBlue70,
            backgroundBrandTop: palette.darkBlue,
            backgroundBrandBottom: palette.beyondBlue45,
            appBarBackground: palette.white,
            navigationBarBackground: palette.darkBlue,
            skeletonWave: palette.grey30,
            borderLow: palette.grey20,
            border: palette.grey30,
            borderHigh: palette.grey80,
            borderSelected: palette.beyondBlue,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.o2Red60,
            buttonDangerBackgroundPressed: palette.o2Red65,
            buttonDangerBackgroundHover: palette.o2Red65,
            buttonLinkDangerBackgroundPressed: palette.o2Red10,
            buttonLinkDangerBackgroundInverse: palette.white,
            buttonLinkDangerBackgroundInversePressed: palette.o2Red10,
            buttonLinkBackgroundPressed: palette.beyondBlue10,
            buttonLinkBackgroundInversePressed: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.beyondBlue,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundPressed: palette.beyondBlue70,
            buttonPrimaryBackgroundHover: palette.beyondBlue70,
            buttonPrimaryBackgroundInversePressed: palette.beyondBlue30,
            buttonSecondaryBorder: palette.beyondBlue,
            buttonSecondaryBorderPressed: palette.beyondBlue70,
            buttonSecondaryBackgroundHover: palette.beyondBlue10,
            buttonSecondaryBackgroundPressed: palette.beyondBlue10,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInversePressed: palette.beyondBlue30,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInversePressed: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.beyondBlue,
            textButtonPrimaryInversePressed: palette.beyondBlue70,
            textButtonSecondary: palette.beyondBlue,
            textButtonSecondaryPressed: palette.beyondBlue70,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInversePressed: palette.white,
            textLink: palette.beyondBlue,
            textLinkInverse: palette.white,
            textLinkDanger: palette.o2Red65,
            textLinkSnackbar: palette.beyondBlue30,
            textActivated: palette.beyondBlue,
            textBrand: palette.beyondBlue,
            control: palette.grey45,
            controlActivated: palette.beyondBlue,
            controlInverse: palette.white,
            controlActivatedInverse: palette.white,
            controlError: palette.o2Red60,
            barTrack: palette.grey30,
            barTrackInverse: applyAlpha(palette.white, 0.3),
            loadingBar: palette.beyondBlue,
            loadingBarBackground: palette.grey20,
            toggleAndroidInactive: palette.grey30,
            toggleAndroidBackgroundActive: palette.beyondBlue15,
            iosControlKnob: palette.white,
            controlKnobInverse: palette.beyondBlue,
            divider: palette.grey30,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.darkBlue,
            badge: palette.o2Red65,
            feedbackErrorBackground: palette.o2Red60,
            feedbackInfoBackground: palette.black,
            brand: palette.beyondBlue,
            brandHigh: palette.beyondBlue70,
            inverse: palette.white,
            neutralHigh: palette.black,
            neutralMedium: palette.grey60,
            neutralMediumInverse: palette.grey60,
            neutralLow: palette.grey20,
            neutralLowAlternative: palette.grey30,
            textPrimary: palette.black,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey60,
            textSecondaryInverse: palette.beyondBlue10,
            success: palette.o2Green,
            warning: palette.o2Orange60,
            error: palette.o2Red65,
            textError: palette.o2Red65,
            textErrorInverse: palette.white,
            promo: palette.o2Pink,
            highlight: palette.o2Pink80,
            successLow: palette.o2Green10,
            warningLow: palette.o2Orange10,
            errorLow: palette.o2Red10,
            promoLow: palette.o2Pink15,
            brandLow: palette.beyondBlue10,
            successHigh: palette.o2Green80,
            warningHigh: palette.o2Orange75,
            errorHigh: palette.o2Red65,
            promoHigh: palette.o2Pink80,
            successHighInverse: palette.o2Green80,
            warningHighInverse: palette.o2Orange75,
            errorHighInverse: palette.o2Red65,
            promoHighInverse: palette.o2Pink80,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.beyondBlue30,
            textNavigationSearchBarHint: palette.beyondBlue30,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey60,
            textAppBarSelected: palette.beyondBlue,
            customTabsBackground: palette.beyondBlue,
            tagTextPromo: palette.o2Pink80,
            tagTextActive: palette.beyondBlue,
            tagTextInactive: palette.grey60,
            tagTextSuccess: palette.o2Green80,
            tagTextWarning: palette.o2Orange75,
            tagTextError: palette.o2Red65,
            tagBackgroundPromo: palette.o2Pink15,
            tagBackgroundActive: palette.beyondBlue10,
            tagBackgroundInactive: palette.grey20,
            tagBackgroundSuccess: palette.o2Green10,
            tagBackgroundWarning: palette.o2Orange10,
            tagBackgroundError: palette.o2Red10,
            cardContentOverlay: `linear-gradient(180deg, ${applyAlpha(palette.beyondBlue, 0)} 0%, ${applyAlpha(palette.beyondBlue, 0.4)} 30%, ${applyAlpha(palette.beyondBlue, 1)} 100%)`,
        },
        darkModeColors: {
            background: palette.darkModeBlack,
            backgroundAlternative: palette.darkModeBlack,
            backgroundBrand: palette.darkModeBlack,
            backgroundBrandSecondary: palette.darkModeBlack,
            backgroundContainer: palette.darkModeGrey,
            backgroundContainerError: palette.darkModeGrey,
            backgroundContainerHover: applyAlpha(palette.white, 0.05),
            backgroundContainerPressed: applyAlpha(palette.white, 0.08),
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
            skeletonWave: palette.grey80,
            borderLow: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderHigh: palette.grey45,
            borderSelected: palette.beyondBlue30,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.o2Red60,
            buttonDangerBackgroundPressed: palette.o2Red65,
            buttonDangerBackgroundHover: palette.o2Red65,
            buttonLinkDangerBackgroundPressed: applyAlpha(palette.white, 0.08),
            buttonLinkDangerBackgroundInverse: applyAlpha(palette.white, 0),
            buttonLinkDangerBackgroundInversePressed: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundPressed: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundInversePressed: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.darkModeBeyondBlue,
            buttonPrimaryBackgroundInverse: palette.darkModeBeyondBlue,
            buttonPrimaryBackgroundPressed: palette.beyondBlue55,
            buttonPrimaryBackgroundHover: palette.beyondBlue55,
            buttonPrimaryBackgroundInversePressed: palette.beyondBlue55,
            buttonSecondaryBackgroundPressed: applyAlpha(palette.white, 0.15),
            buttonSecondaryBorder: palette.white,
            buttonSecondaryBorderPressed: palette.white,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInversePressed: palette.white,
            buttonSecondaryBackgroundHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.15),
            buttonSecondaryBackgroundInversePressed: applyAlpha(palette.white, 0.15),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.white,
            textButtonPrimaryInversePressed: palette.white,
            textButtonSecondary: palette.grey30,
            textButtonSecondaryPressed: palette.grey30,
            textButtonSecondaryInverse: palette.grey30,
            textButtonSecondaryInversePressed: palette.grey30,
            textLink: palette.beyondBlue40,
            textLinkInverse: palette.beyondBlue40,
            textLinkDanger: palette.o2Red45,
            textLinkSnackbar: palette.beyondBlue30,
            textActivated: palette.beyondBlue30,
            textBrand: palette.beyondBlue30,
            control: palette.grey45,
            controlActivated: palette.darkModeBeyondBlue,
            controlInverse: palette.grey45,
            controlActivatedInverse: palette.darkModeBeyondBlue,
            controlError: palette.o2Red45,
            barTrack: palette.darkModeGrey6,
            barTrackInverse: palette.darkModeGrey6,
            loadingBar: palette.darkModeBeyondBlue,
            loadingBarBackground: palette.darkModeGrey6,
            toggleAndroidInactive: palette.grey20,
            toggleAndroidBackgroundActive: palette.beyondBlue15,
            iosControlKnob: palette.grey30,
            controlKnobInverse: palette.grey30,
            badge: palette.o2Red65,
            feedbackErrorBackground: palette.o2Red60,
            feedbackInfoBackground: palette.darkModeGrey6,
            divider: applyAlpha(palette.white, 0.1),
            dividerInverse: applyAlpha(palette.white, 0.1),
            navigationBarDivider: palette.darkModeBlack,
            brand: palette.beyondBlue30,
            brandHigh: applyAlpha(palette.white, 0.05),
            inverse: palette.grey30,
            neutralHigh: palette.grey30,
            neutralMedium: palette.grey60,
            neutralMediumInverse: palette.grey60,
            neutralLow: palette.grey80,
            neutralLowAlternative: palette.grey80,
            textPrimary: palette.grey30,
            textPrimaryInverse: palette.grey30,
            textSecondary: palette.grey45,
            textSecondaryInverse: palette.grey45,
            success: palette.o2Green,
            warning: palette.o2Orange,
            error: palette.o2Red45,
            textError: palette.o2Red45,
            textErrorInverse: palette.o2Red45,
            promo: palette.o2Pink,
            highlight: palette.o2Pink,
            successLow: palette.darkModeGrey6,
            warningLow: palette.darkModeGrey6,
            errorLow: palette.darkModeGrey6,
            promoLow: palette.darkModeGrey6,
            brandLow: palette.darkModeGrey6,
            successHigh: palette.o2Green40,
            warningHigh: palette.o2Orange40,
            errorHigh: palette.o2Red40,
            promoHigh: palette.o2Pink30,
            successHighInverse: palette.o2Green80,
            warningHighInverse: palette.o2Orange75,
            errorHighInverse: palette.o2Red65,
            promoHighInverse: palette.o2Pink,
            textNavigationBarPrimary: palette.grey30,
            textNavigationBarSecondary: palette.grey45,
            textNavigationSearchBarHint: palette.grey45,
            textNavigationSearchBarText: palette.grey30,
            textAppBar: palette.grey45,
            textAppBarSelected: palette.beyondBlue40,
            customTabsBackground: palette.darkModeBlack,
            tagTextPromo: palette.o2Pink,
            tagTextActive: palette.beyondBlue30,
            tagTextInactive: palette.grey40,
            tagTextSuccess: palette.o2Green,
            tagTextWarning: palette.o2Orange,
            tagTextError: palette.o2Red45,
            tagBackgroundPromo: palette.darkModeGrey6,
            tagBackgroundActive: palette.darkModeGrey6,
            tagBackgroundInactive: palette.darkModeGrey6,
            tagBackgroundSuccess: palette.darkModeGrey6,
            tagBackgroundWarning: palette.darkModeGrey6,
            tagBackgroundError: palette.darkModeGrey6,
            cardContentOverlay: `linear-gradient(180deg, ${applyAlpha(palette.black, 0)} 0%, ${applyAlpha(palette.black, 0.4)} 30%, ${applyAlpha(palette.black, 0.7)} 100%)`,
        },
        borderRadii: {
            avatar: '50%',
            bar: '999px',
            button: '999px',
            checkbox: '2px',
            container: '16px',
            indicator: '999px',
            input: '12px',
            legacyDisplay: '16px',
            popup: '8px',
            sheet: '16px',
            mediaSmall: '8px',
        },
        textPresets: {
            button: {weight: 'medium'},
            cardTitle: {weight: 'medium'},
            indicator: {weight: 'medium'},
            link: {weight: 'medium'},
            navigationBar: {weight: 'medium'},
            tabsLabel: {
                lineHeight: {desktop: 24, mobile: 24},
                size: {desktop: 18, mobile: 16},
                weight: 'medium',
            },
            text1: {lineHeight: {desktop: 20, mobile: 16}, size: {desktop: 14, mobile: 12}},
            text2: {lineHeight: {desktop: 24, mobile: 20}, size: {desktop: 16, mobile: 14}},
            text3: {lineHeight: {desktop: 24, mobile: 24}, size: {desktop: 18, mobile: 16}},
            text4: {lineHeight: {desktop: 28, mobile: 24}, size: {desktop: 20, mobile: 18}},
            text5: {lineHeight: {desktop: 32, mobile: 24}, size: {desktop: 28, mobile: 20}, weight: 'bold'},
            text6: {lineHeight: {desktop: 40, mobile: 32}, size: {desktop: 32, mobile: 24}, weight: 'bold'},
            text7: {lineHeight: {desktop: 48, mobile: 32}, size: {desktop: 40, mobile: 28}, weight: 'bold'},
            text8: {lineHeight: {desktop: 56, mobile: 40}, size: {desktop: 48, mobile: 32}, weight: 'bold'},
            text9: {lineHeight: {desktop: 64, mobile: 48}, size: {desktop: 56, mobile: 40}, weight: 'bold'},
            text10: {lineHeight: {desktop: 72, mobile: 56}, size: {desktop: 64, mobile: 48}, weight: 'bold'},
            title1: {weight: 'medium'},
            title2: {weight: 'bold'},
            title3: {lineHeight: {desktop: 32, mobile: 24}, size: {desktop: 28, mobile: 20}, weight: 'bold'},
        },
    };
    return skin;
};
