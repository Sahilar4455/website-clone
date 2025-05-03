/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.',
                    acceptAllBtn: 'Accept All Cookies',
                    acceptNecessaryBtn: 'Reject all',
                    footer: `
                        <a href="/privacy-policy.php" target="_blank">Privacy Policy</a>
                        <a href="/cookie-policy.php" target="_blank">Cookie Policy</a>
                    `,
                }
            }
        }
    }
});