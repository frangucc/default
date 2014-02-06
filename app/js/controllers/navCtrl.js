'use strict';

four51.app.controller('NavCtrl', function ($location, $route, $scope, $451, User) {
    $scope.Logout = function(){
        User.logout();
        if ($scope.isAnon) {
            $location.path("/catalog");
            User.login();
        }
    };

	$scope.refreshUser = function() {
		store.clear();
	}

    // http://stackoverflow.com/questions/12592472/how-to-highlight-a-current-menu-item-in-angularjs
    $scope.isActive = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if (path instanceof Array) {
            angular.forEach(path, function(p) {
                if (p == cur_path && !result)
                    result = true;
            });
        }
        else {
            if (cur_path == path)
                result = true;
        }
        return result;
    };
    // extension of above isActive in path
    $scope.isInPath = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if(cur_path.indexOf(path) > -1) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };

	$scope.Clear = function() {
		localStorage.clear();
		$route.reload();
	}

    $scope.myAccountDropdown = [
        {text: 'User Information', href: '#/admin'},
        {text: 'Addresses', href: '#/addresses'},
        {text: 'Messages', href: '#/message'},
        {"divider":true},
        {text: '<i class="fa fa-power-off text-danger"></i> Logout', click: 'Logout()'},
        {text: '<i class="fa fa-archive text-danger"></i> Clear Cache', click: 'Clear()'}
    ]
//TODO -- implement permissions based on user for hiding and showing items in the dropdown --
//    if(!User.Permissions.contains('ViewSelfAdmin')){$scope.myAccountDropdown.splice(index, 0)}

	$scope.$on('event:orderUpdate', function(event, order) {
		$scope.cartCount = order ? (order.Status == 'Unsubmitted' || order.Status == 'AwaitingApproval') ? order.LineItems.length : null : null;
	});
});