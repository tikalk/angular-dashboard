'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('TopnavCtrl', ['$scope', 'TopnavbarService', function ($scope, TopnavbarService) {
     $('#side-menu').metisMenu();

      //Loads the correct sidebar on window load,
      //collapses the sidebar on window resize.
      // Sets the min-height of #page-wrapper to window size
     $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        var height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

  	TopnavbarService.getDashboardName().then(function(res){
  		  $scope.name = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopnavbarService.getMessages().then(function(res){
    		$scope.messages = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopnavbarService.getTasks().then(function(res){
    		$scope.tasks = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopnavbarService.getAlerts().then(function(res){
    		$scope.alerts = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});
  }]);