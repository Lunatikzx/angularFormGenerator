Proof.filter('translate', function($http){
    var lang = [];
    $http.get('lang.json').then(function(result){
        lang =  result.data.lang;
    });

    function translation(input){
        var regexp = /(lang.)/g;
        if(regexp.test(input)){
           return lang[input];
        }
    }

    return function(input){
        return translation(input);
    }
});