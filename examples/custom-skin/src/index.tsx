import '@telefonica/mistica/css/reset.css';
import '@telefonica/mistica/css/roboto.css';
import '@telefonica/mistica/css/mistica.css';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeContextProvider} from '@telefonica/mistica';

import type {Skin} from '@telefonica/mistica';

const skin: Skin = {
    name: 'Custom skin',
    colors: {
        appBarBackground: '#FFFFFF',
        background: '#FFFFFF',
        backgroundContainer: '#FFFFFF',
        backgroundBrand: '#ffe833',
        backgroundOverlay: 'rgba(49,50,53, 0.6)',
        backgroundSkeleton: '#F6F6F6',
        backgroundSkeletonInverse: '#ac9c22',
        navigationBarBackground: '#ffe833',
        backgroundAlternative: '#F6F6F6',
        backgroundFeedbackBottom: '#ffe833',
        skeletonWave: '#EEEEEE',
        borderLow: '#F6F6F6',
        border: '#DDDDDD',
        borderHigh: '#86888C',
        borderSelected: '#f08753',
        buttonDangerBackground: '#FF374A',
        buttonDangerBackgroundSelected: '#D73241',
        buttonDangerBackgroundHover: '#D73241',
        buttonLinkBackgroundSelected: '#E6F5FD',
        buttonPrimaryBackground: '#f08753',
        buttonPrimaryBackgroundInverse: '#FFFFFF',
        buttonPrimaryBackgroundSelected: '#a75e39',
        buttonPrimaryBackgroundHover: '#a75e39',
        buttonSecondaryBorderInverse: '#FFFFFF',
        buttonSecondaryBackgroundSelected: '#a75e39',
        textButtonPrimary: '#FFFFFF',
        textButtonPrimaryInverse: '#ffe833',
        textButtonPrimaryInverseSelected: '#ffe833',
        textButtonSecondary: '#f08753',
        textButtonSecondarySelected: '#a75e39',
        textButtonSecondaryInverse: '#FFFFFF',
        textButtonSecondaryInverseSelected: '#FFFFFF',
        textLink: '#ffe833',
        textLinkInverse: '#FFFFFF',
        textLinkDanger: '#FF374A',
        textLinkSnackbar: '#ffaf86',
        control: '#DDDDDD',
        controlActivated: '#ffe833',
        controlError: '#FF374A',
        loadingBar: '#ffaf86',
        loadingBarBackground: '#ac9c22',
        toggleAndroidInactive: '#EEEEEE',
        toggleAndroidBackgroundActive: '#ffffa2',
        iosControlKnob: '#FFFFFF',
        divider: '#EEEEEE',
        dividerInverse: '#ac9c22',
        navigationBarDivider: '#ffe833',
        badge: '#D73241',
        feedbackErrorBackground: '#FF374A',
        feedbackInfoBackground: '#313235',
        brand: '#ffe833',
        brandHigh: '#ac9c22',
        inverse: '#FFFFFF',
        neutralHigh: '#313235',
        neutralMedium: '#86888C',
        neutralLow: '#DDDDDD',
        promo: '#A13EA1',
        highlight: '#E63780',
        textPrimary: '#313235',
        textPrimaryInverse: '#FFFFFF',
        textSecondary: '#86888C',
        textSecondaryInverse: '#FFFFFF',
        error: '#FF374A',
        success: '#f08753',
        warning: '#F28D15',
        textNavigationBarPrimary: '#FFFFFF',
        textNavigationBarSecondary: '#ffffa2',
        textNavigationSearchBarHint: '#ffffa2',
        textNavigationSearchBarText: '#FFFFFF',
        textAppBar: '#999999',
        textAppBarSelected: '#ffe833',
        successLow: '#EFF8E8',
        warningLow: '#FEF4E8',
        errorLow: '#FFEBED',
        promoLow: '#F6ECF6',
        brandLow: '#E6F5FD',
        successHigh: '#407F0F',
        warningHigh: '#6D3F09',
        errorHigh: '#B22634',
        promoHigh: '#712B71',
        buttonLinkBackgroundSelectedInverse: '#313235',
        buttonPrimaryBackgroundSelectedInverse: '#313235',
        buttonSecondaryBackground: '#313235',
        buttonSecondaryBorderSelectedInverse: '#313235',
    },
};

ReactDOM.render(
    <ThemeContextProvider
        theme={{
            skin,
            i18n: {
                locale: 'es-ES',
                phoneNumberFormattingRegionCode: 'ES',
            },
        }}
    >
        <App />
    </ThemeContextProvider>,
    document.getElementById('root')
);
