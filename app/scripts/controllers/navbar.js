'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:TopnavCtrl
 * @description
 * # TopnavCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('TopnavCtrl', ['$scope', 'TopNavDataService', function ($scope, TopNavDataService) {
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

  	TopNavDataService.getDashboardName().then(function(res){
  		  $scope.name = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopNavDataService.getMessages().then(function(res){
    		$scope.messages = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopNavDataService.getTasks().then(function(res){
    		$scope.tasks = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});

  	TopNavDataService.getAlerts().then(function(res){
    		$scope.alerts = res;
    	}
    	,function(reason){
  		console.log(reason);
  	});
  }]).
  service('TopNavDataService', ['$http', '$q', function($http, $q){
  	this.getDashboardName = function(){
  		var deferred = $q.defer();
  		deferred.resolve('TIKAL DASHBOARD');

		return deferred.promise;
  	}

  	this.getMessages = function(){
  		var deferred = $q.defer();
  		deferred.resolve([
  			{name:'John Smith', received:'Yesterday', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'},
  			{name:'Tal Cohen', received:'11/11/14', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'},
  			{name:'Lital Dahan', received:'10/11/14', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'}
  		]);

		  return deferred.promise;

  	}

  	this.getTasks = function(){
  		var deferred = $q.defer();
  		deferred.resolve([
  			{name: 'task 1', complete:'40', class:'progress-bar-success'},
  			{name: 'task 2', complete:'20', class:'progress-bar-info'},
  			{name: 'task 3', complete:'60', class:'progress-bar-warning'},
  			{name: 'task 4', complete:'80', class:'progress-bar-danger'}
  		]);

  		return deferred.promise;

  	}

  	this.getAlerts = function(){
  		var deferred = $q.defer();
  		deferred.resolve([
  			{name: 'New Comment', received:'4 minutes ago', class:'fa-comment'},
  			{name: 'New Followers', received:'12 minutes ago', class:'fa-twitter'},
  			{name: 'Message Sent', received:'4 minutes ago', class:'fa-envelope'},
  			{name: 'New Task', received:'4 minutes ago', class:'fa-tasks'},
  			{name: 'Server Rebooted', received:'4 minutes ago', class:'fa-upload'}
  		]);

  		return deferred.promise;

  	}

  }]);

