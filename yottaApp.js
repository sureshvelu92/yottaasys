'use strict';
var app = angular.module('yottaApp', ['ngDraggable','ngMaterial']);
app.controller('yottaController', ['$scope','$http', function($scope,$http) {

$scope.droppedOptions=[];
$scope.clickedOption=[];
$scope.showRightTab=false;
$scope.idCounter=0;
$scope.dataOptions = [
  
 {
    "itemId": 1,
    "name": "Thesis 1",
    "imagePath": "icon1.png"
  }, {
    "itemId": 2,
    "name": "Thesis 2",
    "imagePath": "icon2.png"
  }, {
    "itemId": 3,
    "name": "Thesis 3",
    "imagePath": "icon3.png"
  }, {
    "itemId": 4,
    "name": "Thesis 4",
    "imagePath": "icon4.png"
  }, {
    "itemId": 5,
    "name": "Thesis 5",
    "imagePath": "icon5.png"
  }
  
]
$scope.dropOnCanvas=function(data,event){
debugger;



if(data.isCanvas==false) 
{var temp=[];
temp.X=event.tx;
temp.Y=event.ty;
temp.name=data.name;
temp.itemId=data.itemId;
temp.imagePath=data.imagePath;
temp.id=++$scope.idCounter;


$scope.droppedOptions.push(temp);
}
else if(data.isCanvas==true){
var ind=$scope.droppedOptions.indexOf(data.option);
$scope.droppedOptions[ind].X=event.tx;
$scope.droppedOptions[ind].Y=event.ty;


}
}

$scope.showDetails=function(opt){
$scope.showRightTab=true;
$scope.clickedOption=opt;




}




    }
]);

