/* ----------------------------------- *\
 [Route] HOME
\* ----------------------------------- */
    Finch.route('/', {
        setup: function(bindings) {
            // Add favicon
            //window.onload = favicon.load_favicon();
            //section = "home";
        },
        load: function(bindings) {
            //This code will be no-f temt used it's only example, remove it later
            var data, post;
            data = COM.getInternalJSON(urlsApi.get_test);
            post = COM.postalService(urlsApi.post_test);
            post.success(function(data){
                console.log(data);
            });
            post.error(function(data){
                console.log("suerte para la proxima, sigue participando...")
            });
            COM.loadTemplate(tempsNames.tmp_demo, domEl.div_recurrent, data)
        },
        unload: function(bindings) {
            section = "";
            COM.setHTML(domEl.div_recurren, '');
        }
    });
Finch.listen();
