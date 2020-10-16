var myStarApp=angular.module('myStarApp', []);

myStarApp.controller('StarController', ['$scope', function($scope){
    $scope.stars=[
        {name:"Alma",
        band:"pink",
        worth:10
        },
        {name:"Shirlyne",
         band:"purple",
         worth:20
         },
         {name:"Watson",
         band:"green",
         worth:30
         },
         {name:"Ryan",
         band:"yellow",
         worth:40
         },
         {name:"Adrian",
          band:"blue",
          worth:50 
         },
         {name:"Seth",
         band:"red",
         worth:60
         },
         {name:"Joshua",
         band:"Black",
         worth:70
         }
    ];

}]);
