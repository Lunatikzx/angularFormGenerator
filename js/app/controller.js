
Proof.controller('MainMenu',['$scope','$http', function($scope,$http){
    $scope.url = 'content.json';
    $scope.content =[];

    $scope.fetchContent = function(){
        $http.get($scope.url).then(function(result){
           $scope.content = result.data.sections.section;
        });
    }
    $scope.fetchContent();
}]);

Proof.controller('Main',['$scope','$http', function($scope,$http){
    $scope.url = 'content.json';
    $scope.content = [];

    $scope.fetchContent = function(){
        $http.get($scope.url).then(function(result){
            $scope.content = result.data.sections.section;
        });
    }
    $scope.save = function(){
        for(var item in $scope.content){
            for(var items in $scope.content[item].questions){
                console.log($scope.content[item].questions[items].defaultValue);
                console.log($scope);
            }
        }
    }
    $scope.fetchContent();
}]);
