(function () {
    AmpCa.utils = new AmpCa.Utils();

    AmpCa.config = {
        idFromQuery: AmpCa.helpers.getQueryVar('c') // 476e3ddb-61b5-4c49-a5f4-db3e37f21f05
    };


    AmpCa.initRender = function () {
        var accountTagName = 'csdemo';
        if (AmpCa.config.idFromQuery) {

            AmpCa.utils.getHtmlServiceData({
                auth: {
                    baseUrl: 'https://c1.adis.ws',
                    id: AmpCa.config.idFromQuery,
                    store: accountTagName,
                    templateName: 'wireframe_detail'
                },
                callback: function (data) {
                    document.querySelectorAll("#js_wireframe_detail")[0].innerHTML = data;
                    var type = window.location.href.split('&type=')[1].replace('.json', '');

                    for(var dep in AmpCa.utils.postProcessing.htmlServiceDependencies) {
                        if(type.toLowerCase() === dep.toLowerCase()){
                            AmpCa.utils.postProcessing.execHtmlService(dep);
                        }
                    }

                    loryHelpers.initSliders(document.querySelectorAll(".js_slider"));
                }
            });

            //
            // AmpCa.utils.getCaData({
            //     auth: {
            //         baseUrl: 'https://c1.adis.ws',
            //         id: AmpCa.config.idFromQuery,
            //         store: accountTagName
            //     },
            //     callback: function (data) {
            //         console.log(data[0]);
            //     },
            //
            //     formatData: function (data) {
            //         return amp.inlineContent(JSON.parse(data));
            //     }
            //
            // });

        } else {
            console.log('No page id in address line');
        }
    };

    AmpCa.initRender();
}());

