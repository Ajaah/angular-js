var myStarApp=angular.module('myStarApp', []);

myStarApp.controller('StarController', ['$scope', function($scope){

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

    $scope.stars=[
        {name:"Alma",
        band:"Pink",
        worth:100000,
        available:true,
        pic: "content\images\alma.jpg"
        },
        {name:"Shirlyne",
         band:"Purple",
         worth:200000,
         available:true,
         pic: "content\images\shirlyne.jpg"
         },
         {name:"Watson",
         band:"Green",
         worth:300000,
         available:true,
         pic: "content\images\watson.jpg"
         },
         {name:"Ryan",
         band:"Yellow",
         worth:400000,
         available:true,
         pic: "content\images\rian.jpg"
         },
         {name:"Adrian",
          band:"Blue",
          worth:500000,
          available:true,
          pic: "content\images\adrian.jpg"
         },
         {name:"Seth",
         band:"Red",
         worth:600000,
         available:true,
         pic: "content\images\seth.jpg"
         },
         {name:"Joshua",
         band:"Black",
         worth:700000,
         available:true,
         pic: "content\images\joshua.jpg"
         }
    ];

}]);
