var myStarApp=angular.module('myStarApp', []);

myStarApp.controller('StarController', ['$scope', function($scope){
    $scope.stars=[
        {name:"Alma",
        band:"Pink",
        worth:100000,
        available:true
        },
        {name:"Shirlyne",
         band:"Purple",
         worth:200000,
         available:true
         },
         {name:"Watson",
         band:"Green",
         worth:300000,
         available:true
         },
         {name:"Ryan",
         band:"Yellow",
         worth:400000,
         available:false
         },
         {name:"Adrian",
          band:"Blue",
          worth:500000,
          available:true
         },
         {name:"Seth",
         band:"Red",
         worth:600000,
         available:false
         },
         {name:"Joshua",
         band:"Black",
         worth:700000,
         available:true
         }
    ];

}]);
