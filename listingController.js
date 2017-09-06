/*
  DEFINE CONTROLLER LISTINGS  CONTRILLER
  FUNCTION GETS THE CONTOLLER READY TO USE WITH PARAMETERS
  DEPENDENCY INJECTION IS USING PARAMETERS

*/


angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;



    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
    $scope.listings.push(new objItem($scope.code, $scope.name, $scope.longitude, $scope.latitude, $scope.address ));
      window.alert("Listing Succesfuly Added");

    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);


    };
    $scope.showDetails = function(index) {

    };
    function objItem(code, name, longitude, latitude, address)
    {
      this.code = code;
      this.name = name;
      var cord =[{"longitude": longitude,"latitude": latitude}];
      this.coordinates=cord[0];
      this.address = address;

    }
    $scope.selectObj = function(currentObj, check)
    {
      $scope.currentObj = currentObj;
      if(check == 'd')
      {
        if(confirm("Would you like to delete the listing"))
        {
        var index = $scope.listings.indexOf(currentObj);
        $scope.deleteListing(index);
        }
      }
      $scope.selName = "";
      $scope.selCode = "";
      $scope.selLong = "";
      $scope.selLat = "";
      $scope.selAddy = "";
      if(check == 's')
      {

        $scope.selName = currentObj.name;
        $scope.selCode = currentObj.code;
        $scope.selLong = currentObj.coordinates.longitude;
        $scope.selLat = currentObj.coordinates.latitude;
        $scope.selAddy = currentObj.address;

      }

    }
  }
]);
