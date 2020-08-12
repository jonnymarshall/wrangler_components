AmpCa.helpers = {
    getQueryVar: function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        return false;
    }, renderHeader: function (settings) {
        if (!settings || !settings.length || settings.length === 0) return;
        var template = Handlebars.template(Handlebars.partials.header);
        document.querySelectorAll("#js_top_menu")[0].innerHTML = template(settings[0]);
    }, applyPageStyleSettings: function (styleSettings) {
        if (!styleSettings || !styleSettings.length || styleSettings.length === 0) return;
        styleSettings = styleSettings[0];
        var logoEl = document.getElementsByClassName('logo-image')[0];
        if (logoEl) {
            logoEl.src = 'https://' + styleSettings.logo.defaultHost + '/i/' + styleSettings.logo.endpoint + '/' + styleSettings.logo.name + '?h=40';
            logoEl.srcset = 'https://' + styleSettings.logo.defaultHost + '/i/' + styleSettings.logo.endpoint + '/' + styleSettings.logo.name + '?h=40 1x, ' + 'https://' + styleSettings.logo.defaultHost + '/i/' + styleSettings.logo.endpoint + '/' + styleSettings.logo.name + '?h=80 2x';
            document.getElementsByClassName('logo')[0].setAttribute('href', styleSettings.logoUrl)
        }
        var primaryColorEls = document.getElementsByClassName('primary-color');
        var secondaryColorEls = document.getElementsByClassName('secondary-color');
        for (var el in primaryColorEls) {
            if (primaryColorEls.hasOwnProperty(el)) {
                primaryColorEls[el].style.color = styleSettings.primaryColor;
            }
        }
        for (el in secondaryColorEls) {
            if (secondaryColorEls.hasOwnProperty(el)) {
                secondaryColorEls[el].style.backgroundColor = styleSettings.secondaryColor;
            }
        }
    }
};