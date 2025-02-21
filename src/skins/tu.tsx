import {TU_SKIN} from './constants';
import {applyAlpha} from '../utils/color';

import type {GetKnownSkin, KnownSkin} from './types';

export const palette = {
    primary: '#2B3447',
    primary10: '#EAEBED',
    primary15: '#D5D6DA',
    primary45: '#555D6C',
    primary65: '#202735',
    primary80: '#161A24',
    blue: '#4343FF',
    blue10: '#ECECFF',
    blue20: '#C7C7FF',
    blue30: '#A1A1FF',
    blue70: '#3232B9',
    orange: '#EFE384',
    orange20: '#FAF7DA',
    orange55: '#D5C77D',
    orange65: '#BBAF6F',
    orange70: '#958946',
    red: '#CB4D3A',
    red10: '#FAEDEB',
    red40: '#DB8275',
    red55: '#BB4736',
    red70: '#8E3629',
    red80: '#5B231A',
    green: '#00D19D',
    green10: '#E5FAF5',
    green40: '#A1DFCF',
    green75: '#007D5E',
    grey1: '#F2F4FF',
    grey2: '#D1D5E4',
    grey3: '#B0B6CA',
    grey4: '#8F97AF',
    grey5: '#6E7894',
    grey6: '#58617A',
    grey7: '#414B61',
    grey8: '#2B3447',
    grey9: '#031A34',
    white: '#FFFFFF',
    black: '#000000',
    darkModeBlack: '#161A24',
    darkModeGrey: '#202735',
    darkModeGrey6: '#2B3447',
};

export const getTuSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: TU_SKIN,
        colors: {
            appBarBackground: palette.white,
            background: palette.white,
            backgroundContainer: palette.white,
            backgroundContainerError: palette.red10,
            backgroundContainerHover: applyAlpha(palette.grey9, 0.05),
            backgroundContainerPressed: applyAlpha(palette.grey9, 0.08),
            backgroundContainerBrand: palette.primary,
            backgroundContainerBrandHover: applyAlpha(palette.grey9, 0.2),
            backgroundContainerBrandPressed: applyAlpha(palette.grey9, 0.4),
            backgroundContainerBrandOverInverse: palette.primary80,
            backgroundContainerAlternative: palette.grey1,
            backgroundBrand: palette.primary,
            backgroundBrandSecondary: palette.blue,
            backgroundOverlay: applyAlpha(palette.primary, 0.8),
            backgroundSkeleton: palette.grey2,
            backgroundSkeletonInverse: palette.primary65,
            navigationBarBackground: palette.primary,
            backgroundAlternative: palette.grey1,
            backgroundBrandTop: palette.primary,
            backgroundBrandBottom: palette.primary,
            skeletonWave: palette.grey2,
            borderLow: palette.grey1,
            border: palette.grey2,
            borderHigh: palette.grey5,
            borderSelected: palette.blue,
            coverBackgroundHover: applyAlpha(palette.grey9, 0.25),
            coverBackgroundPressed: applyAlpha(palette.grey9, 0.35),
            buttonDangerBackground: palette.red,
            buttonDangerBackgroundPressed: palette.red55,
            buttonDangerBackgroundHover: palette.red55,
            buttonLinkDangerBackgroundPressed: palette.red10,
            buttonLinkDangerBackgroundInverse: palette.white,
            buttonLinkDangerBackgroundInversePressed: palette.red10,
            buttonLinkBackgroundPressed: palette.blue10,
            buttonLinkBackgroundInversePressed: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.primary,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundPressed: palette.primary45,
            buttonPrimaryBackgroundHover: palette.primary45,
            buttonPrimaryBackgroundInversePressed: applyAlpha(palette.white, 0.8),
            buttonSecondaryBorder: palette.blue,
            buttonSecondaryBorderPressed: palette.blue70,
            buttonSecondaryBackgroundHover: palette.blue10,
            buttonSecondaryBackgroundPressed: palette.blue10,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBorderInversePressed: palette.white,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.white, 0.1),
            buttonSecondaryBackgroundInversePressed: applyAlpha(palette.white, 0.1),
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.primary,
            textButtonPrimaryInversePressed: palette.primary,
            textButtonSecondary: palette.blue,
            textButtonSecondaryPressed: palette.blue70,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInversePressed: palette.white,
            textLink: palette.blue,
            textLinkInverse: palette.white,
            textLinkDanger: palette.red,
            textLinkSnackbar: palette.white,
            textActivated: palette.primary,
            textBrand: palette.blue,
            control: palette.grey5,
            controlActivated: palette.primary,
            controlInverse: palette.white,
            controlActivatedInverse: palette.white,
            controlError: palette.red,
            barTrack: palette.grey2,
            barTrackInverse: applyAlpha(palette.white, 0.36),
            loadingBar: palette.green40,
            loadingBarBackground: palette.green,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.primary15,
            iosControlKnob: palette.white,
            controlKnobInverse: palette.primary,
            divider: palette.grey2,
            dividerInverse: applyAlpha(palette.white, 0.2),
            navigationBarDivider: palette.primary,
            badge: palette.blue,
            feedbackErrorBackground: palette.red,
            feedbackInfoBackground: palette.primary,
            brand: palette.blue,
            brandHigh: palette.blue70,
            inverse: palette.white,
            neutralHigh: palette.grey9,
            neutralMedium: palette.grey5,
            neutralMediumInverse: palette.grey5,
            neutralLow: palette.grey1,
            neutralLowAlternative: palette.grey2,
            textPrimary: palette.grey9,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey6,
            textSecondaryInverse: palette.grey3,
            error: palette.red,
            textError: palette.red,
            textErrorInverse: palette.white,
            success: palette.green,
            warning: palette.orange,
            promo: palette.blue,
            highlight: palette.red40,
            successLow: palette.green10,
            warningLow: palette.orange20,
            errorLow: palette.red10,
            promoLow: palette.blue10,
            brandLow: palette.blue10,
            successHigh: palette.green75,
            warningHigh: palette.orange70,
            errorHigh: palette.red70,
            promoHigh: palette.blue,
            successHighInverse: palette.green75,
            warningHighInverse: palette.orange70,
            errorHighInverse: palette.red70,
            promoHighInverse: palette.blue,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.grey1,
            textNavigationSearchBarHint: palette.grey1,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey6,
            textAppBarSelected: palette.primary,
            customTabsBackground: palette.white,
            tagTextPromo: palette.blue,
            tagTextActive: palette.blue,
            tagTextInactive: palette.grey5,
            tagTextSuccess: palette.green75,
            tagTextWarning: palette.orange70,
            tagTextError: palette.red70,
            tagBackgroundPromo: palette.blue10,
            tagBackgroundActive: palette.blue10,
            tagBackgroundInactive: palette.grey1,
            tagBackgroundSuccess: palette.green10,
            tagBackgroundWarning: palette.orange20,
            tagBackgroundError: palette.red10,
            tagTextPromoInverse: palette.blue,
            tagTextActiveInverse: palette.blue,
            tagTextInactiveInverse: palette.grey5,
            tagTextSuccessInverse: palette.green75,
            tagTextWarningInverse: palette.orange70,
            tagTextErrorInverse: palette.red70,
            tagBackgroundPromoInverse: palette.blue10,
            tagBackgroundActiveInverse: palette.blue10,
            tagBackgroundInactiveInverse: palette.grey1,
            tagBackgroundSuccessInverse: palette.green10,
            tagBackgroundWarningInverse: palette.orange20,
            tagBackgroundErrorInverse: palette.red10,
            cardContentOverlay: `linear-gradient(180deg, ${applyAlpha(palette.black, 0)} 0%, ${applyAlpha(palette.black, 0.4)} 30%, ${applyAlpha(palette.black, 0.7)} 100%)`,
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
            skeletonWave: palette.grey5,
            borderLow: palette.darkModeBlack,
            border: palette.darkModeGrey,
            borderHigh: palette.grey5,
            borderSelected: palette.blue30,
            coverBackgroundHover: applyAlpha(palette.darkModeBlack, 0.25),
            coverBackgroundPressed: applyAlpha(palette.darkModeBlack, 0.35),
            buttonDangerBackground: palette.red,
            buttonDangerBackgroundPressed: palette.red80,
            buttonDangerBackgroundHover: palette.red80,
            buttonLinkDangerBackgroundPressed: palette.red10,
            buttonLinkDangerBackgroundInverse: applyAlpha(palette.white, 0),
            buttonLinkDangerBackgroundInversePressed: palette.red10,
            buttonLinkBackgroundPressed: applyAlpha(palette.white, 0.08),
            buttonLinkBackgroundInversePressed: applyAlpha(palette.white, 0.08),
            buttonPrimaryBackground: palette.grey2,
            buttonPrimaryBackgroundInverse: palette.grey2,
            buttonPrimaryBackgroundPressed: palette.grey3,
            buttonPrimaryBackgroundHover: palette.grey3,
            buttonPrimaryBackgroundInversePressed: palette.grey3,
            buttonSecondaryBackgroundPressed: applyAlpha(palette.grey2, 0.15),
            buttonSecondaryBorder: palette.grey2,
            buttonSecondaryBackgroundHover: applyAlpha(palette.grey2, 0.15),
            buttonSecondaryBorderPressed: palette.grey2,
            buttonSecondaryBorderInverse: palette.grey2,
            buttonSecondaryBorderInversePressed: palette.grey2,
            buttonSecondaryBackgroundInverseHover: applyAlpha(palette.grey2, 0.15),
            buttonSecondaryBackgroundInversePressed: applyAlpha(palette.grey2, 0.15),
            textButtonPrimary: palette.primary,
            textButtonPrimaryInverse: palette.primary,
            textButtonPrimaryInversePressed: palette.primary,
            textButtonSecondary: palette.grey2,
            textButtonSecondaryPressed: palette.grey2,
            textButtonSecondaryInverse: palette.grey2,
            textButtonSecondaryInversePressed: palette.grey2,
            textLink: palette.blue30,
            textLinkInverse: palette.blue30,
            textLinkDanger: palette.red,
            textLinkSnackbar: palette.blue30,
            textActivated: palette.blue30,
            textBrand: palette.blue30,
            control: palette.darkModeGrey6,
            controlActivated: palette.blue30,
            controlInverse: palette.darkModeGrey6,
            controlActivatedInverse: palette.blue30,
            controlError: palette.red,
            barTrack: palette.darkModeGrey6,
            barTrackInverse: palette.darkModeGrey6,
            loadingBar: palette.green40,
            loadingBarBackground: palette.green,
            toggleAndroidInactive: palette.grey4,
            toggleAndroidBackgroundActive: palette.blue20,
            iosControlKnob: palette.grey2,
            controlKnobInverse: palette.grey2,
            divider: applyAlpha(palette.white, 0.05),
            dividerInverse: applyAlpha(palette.white, 0.05),
            navigationBarDivider: palette.darkModeBlack,
            badge: palette.blue30,
            feedbackErrorBackground: palette.red,
            feedbackInfoBackground: palette.darkModeGrey,
            brand: palette.blue30,
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
            error: palette.red,
            textError: palette.red,
            textErrorInverse: palette.red,
            success: palette.green,
            warning: palette.orange,
            promo: palette.blue,
            highlight: palette.red40,
            successLow: palette.darkModeGrey6,
            warningLow: palette.darkModeGrey6,
            errorLow: palette.darkModeGrey6,
            promoLow: palette.darkModeGrey6,
            brandLow: palette.darkModeGrey6,
            successHigh: palette.green40,
            warningHigh: palette.orange55,
            errorHigh: palette.red40,
            promoHigh: palette.blue30,
            successHighInverse: palette.green75,
            warningHighInverse: palette.orange70,
            errorHighInverse: palette.red70,
            promoHighInverse: palette.blue70,
            textNavigationBarPrimary: palette.grey2,
            textNavigationBarSecondary: palette.grey4,
            textNavigationSearchBarHint: palette.grey4,
            textNavigationSearchBarText: palette.grey2,
            textAppBar: palette.grey5,
            textAppBarSelected: palette.grey2,
            customTabsBackground: palette.darkModeBlack,
            tagTextPromo: palette.blue30,
            tagTextActive: palette.blue30,
            tagTextInactive: palette.grey5,
            tagTextSuccess: palette.green40,
            tagTextWarning: palette.orange55,
            tagTextError: palette.red40,
            tagBackgroundPromo: palette.darkModeGrey6,
            tagBackgroundActive: palette.darkModeGrey6,
            tagBackgroundInactive: palette.darkModeGrey6,
            tagBackgroundSuccess: palette.darkModeGrey6,
            tagBackgroundWarning: palette.darkModeGrey6,
            tagBackgroundError: palette.darkModeGrey6,
            tagTextPromoInverse: palette.blue30,
            tagTextActiveInverse: palette.blue30,
            tagTextInactiveInverse: palette.grey5,
            tagTextSuccessInverse: palette.green40,
            tagTextWarningInverse: palette.orange55,
            tagTextErrorInverse: palette.red40,
            tagBackgroundPromoInverse: palette.darkModeGrey6,
            tagBackgroundActiveInverse: palette.darkModeGrey6,
            tagBackgroundInactiveInverse: palette.darkModeGrey6,
            tagBackgroundSuccessInverse: palette.darkModeGrey6,
            tagBackgroundWarningInverse: palette.darkModeGrey6,
            tagBackgroundErrorInverse: palette.darkModeGrey6,
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
            text5: {lineHeight: {desktop: 32, mobile: 24}, size: {desktop: 28, mobile: 20}, weight: 'medium'},
            text6: {lineHeight: {desktop: 40, mobile: 32}, size: {desktop: 32, mobile: 24}, weight: 'medium'},
            text7: {lineHeight: {desktop: 48, mobile: 32}, size: {desktop: 40, mobile: 28}, weight: 'medium'},
            text8: {lineHeight: {desktop: 56, mobile: 40}, size: {desktop: 48, mobile: 32}, weight: 'medium'},
            text9: {lineHeight: {desktop: 64, mobile: 48}, size: {desktop: 56, mobile: 40}, weight: 'medium'},
            text10: {
                lineHeight: {desktop: 72, mobile: 56},
                size: {desktop: 64, mobile: 48},
                weight: 'medium',
            },
            title1: {weight: 'medium'},
            title2: {weight: 'medium'},
            title3: {
                lineHeight: {desktop: 32, mobile: 24},
                size: {desktop: 28, mobile: 20},
                weight: 'medium',
            },
        },
    };
    return skin;
};
