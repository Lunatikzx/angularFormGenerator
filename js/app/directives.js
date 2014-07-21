Proof.directive('contenuItem', function($compile, $http, $templateCache){
    var formBuilder,
        getTemplate;

    getTemplate = function(contentType){
        var templateLoader,
            templateUrl,
            baseUrl='js/app/partials/',
            templateMap = {
                text :'text.html',
                list: 'list.html'
            }
        templateUrl = baseUrl + templateMap[contentType];
        templateLoader = $http.get(templateUrl,{cache:$templateCache});
        return templateLoader;
    }

    formBuilder = function(scope, el, attrs){
        var loader = getTemplate(scope.content.fieldType);

        loader.success(function(html){
            el.html(html);
        }).then(function(res){
            el.replaceWith($compile(el.html())(scope));
        });
    }
    return{
        restrict : "E",
        replace: true,
        link:formBuilder,
        scope:{
            content:'='
        }
    }
});

