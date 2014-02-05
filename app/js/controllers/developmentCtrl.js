'use strict';

four51.app.controller('DevelopmentCtrl', function ($routeParams, $sce, $scope, $http) {
    $scope.alert = {
        "title": "Holy guacamole!",
        "content": "Best check yo self, you're not looking too good.",
        "type": "info"
    };

    $scope.popover = {
        "title": "Title",
        "content": "Hello Popover<br />This is a multiline message!"
    };

    $scope.selectedIcon = '';
    $scope.selectedIcons = ['Globe', 'Heart'];
    $scope.icons = [
        {value: 'Gear', label: '<i class="fa fa-gear"></i> Gear'},
        {value: 'Globe', label: '<i class="fa fa-globe"></i> Globe'},
        {value: 'Heart', label: '<i class="fa fa-heart"></i> Heart'},
        {value: 'Camera', label: '<i class="fa fa-camera"></i> Camera'}
    ];

    $scope.selectedDate = new Date();

    $scope.tooltip = {title: 'Hello Tooltip<br />This is a multiline message!', checked: false};

    $scope.selectedAddress = '';
    $scope.getAddress = function(viewValue) {
        var params = {address: viewValue, sensor: false};
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
            .then(function(res) {
                return res.data.results;
            });
    };
    $scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
});