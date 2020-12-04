var myStarApp=angular.module('myStarApp', ['ngRoute', 'ngAnimate']);

myStarApp.config(['$routeProvider', function($routeProvider){


    $routeProvider
    .when('/home',{
        templateUrl:'views/home.html',
        controller:'StarController'
    })
    .when('/dire',{
        templateUrl:'views/dire.html',
        controller:'StarController'
    })
    .when('/contact',{
        templateUrl:'views/contact.html',
        controller:'ContactController'
    })
    .when('/send-form',{
        templateUrl:'views/send-form.html',
        controller:'ContactController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}]);

myStarApp.directive('randomStar', [function(){
    return {
        restrict:'E',
        scope:{
            title:'=',
            stars:'='
        },
        templateUrl:'views/random.html',
         transclude: true,
         replace:true,
        controller: function($scope){
            $scope.random=Math.floor(Math.random() * 3);
        }
        
    };
}]);

myStarApp.controller('StarController', ['$scope','$http', function($scope, $http){

    $scope.removeStar=function(star){
        var removedStar=$scope.stars.indexOf(star);
        $scope.stars.splice(removedStar, 1);
    };

    $scope.addStar= function(){
        $scope.stars.push({
            name: $scope.newstar.name,
            band: $scope.newstar.band,
            worth: parseInt($scope.newstar.worth),
            available: true
        });
        $scope.newstar.name="";
        $scope.newstar.band="";
        $scope.newstar.worth="";
    };

    $scope.deleteAll=function(){
        $scope.stars=[];
    };

    $scope.stars=[
        {
            name:"Sharon",
            band:"Red",
            worth:200000,
            available:true,
            pic:"content/images/shirlyne.jpg"
        },
        {
            name:"Adrian",
            band:"Blue",
            worth:500000,
            available:true,
            pic:"content/images/adrian.jpg"
        },
        {
            name:"Joshua",
            band:"Green",
            worth:700000,
            available:true,
            pic:"content/images/joshua.jpg"
        }
    ];

    // This code links stars.json to this controller
    //$http.get('data/stars.json').success(function(data){
     //   $scope.stars=data;
   // });

}]);

myStarApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMsg=function(){
        $location.path('/send-form');
    };
}]);
