'use strict';

/**
 * @ngdoc service
 * @name angularDashboardApp.Tables
 * @description
 * # Tables
 * Service in the angularDashboardApp.
 */
angular.module('angularDashboardApp')
  .service('TablesService', ['$http', '$q', function($http, $q){
	this.getAdvancedTableData = function(){
		var deferred = $q.defer();
		deferred.resolve([
		{
			renderingEngine: 'Trident',
            browser: 'Internet Explorer 4.0',
            platform: 'Win 95+',
            engineVersion: 4,
            CSSgrade: 'X' 
		},
		{
			renderingEngine: 'Trident',
            browser: 'Internet Explorer 5.0',
            platform: 'Win 95+',
            engineVersion: 5,
            CSSgrade: 'C'
		},
		{
			renderingEngine: 'Trident',
            browser: 'Internet Explorer 5.5',
            platform: 'Win 95+',
            engineVersion: 5.5,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Trident',
            browser: 'Internet Explorer 6',
            platform: 'Win 98+',
            engineVersion: 6,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Trident',
            browser: 'Internet Explorer 7',
            platform: 'Win XP SP2+',
            engineVersion: 7,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Trident',
            browser: 'AOL browser (AOL desktop)',
            platform: 'Win XP',
            engineVersion: 6,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Firefox 1.0',
            platform: 'Win 98+ / OSX.2+',
            engineVersion: 1.7,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Firefox 1.5',
            platform: 'Win 98+ / OSX.2+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Firefox 2.0',
            platform: 'Win 98+ / OSX.2+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Firefox 3.0',
            platform: 'Win 2k+ / OSX.3+',
            engineVersion: 1.9,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Camino 1.0',
            platform: 'OSX.2+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Camino 1.5',
            platform: 'OSX.3+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Netscape 7.2',
            platform: 'Win 95+ / Mac OS 8.6-9.2',
            engineVersion: 1.7,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Netscape Browser 8',
            platform: 'Win 98SE+',
            engineVersion: 1.7,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Netscape Navigator 9',
            platform: 'Win 98+ / OSX.2+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.0',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1,
            CSSgrade:'A' 
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.1',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.1,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.2',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.2,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.3',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.3,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.4',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.4,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.5',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.5,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.6',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: 1.6,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.7',
            platform: 'Win 98+ / OSX.1+',
            engineVersion: 1.7,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Mozilla 1.8',
            platform: 'Win 98+ / OSX.1+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Seamonkey 1.1',
            platform: 'Win 98+ / OSX.2+',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Gecko',
            browser: 'Epiphany 2.20',
            platform: 'Gnome',
            engineVersion: 1.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'Safari 1.2',
            platform: 'OSX.3',
            engineVersion: 125.5,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'Safari 1.3',
            platform: 'OSX.3',
            engineVersion: 312.8,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'afari 2.0',
            platform: 'OSX.4+',
            engineVersion: 419.3,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'Safari 3.0',
            platform: 'OSX.4+',
            engineVersion: 522.1,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'OmniWeb 5.5',
            platform: 'OSX.4+',
            engineVersion: 420,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'iPod Touch / iPhone',
            platform: 'iPod',
            engineVersion: 420.1,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Webkit',
            browser: 'S60',
            platform: 'S60',
            engineVersion: 413,
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Presto',
            browser: 'Opera 7.0',
            platform: 'Win 95+ / OSX.1+',
            engineVersion: '-',
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Presto',
            browser: 'Opera 7.5',
            platform: 'Win 95+ / OSX.2+',
            engineVersion: '-',
            CSSgrade: 'A'
		},{
			renderingEngine: 'Presto',
            browser: 'Opera 8.0',
            platform: 'Win 95+ / OSX.2+',
            engineVersion: '-',
            CSSgrade: 'A'
		},
		{
			renderingEngine: 'Presto',
            browser: 'Opera 8.5',
            platform: 'Win 95+ / OSX.2+',
            engineVersion: '-',
            CSSgrade: 'A'
		},{
			renderingEngine: 'Presto',
            browser: 'Opera 9.0',
            platform: 'Win 95+ / OSX.3+',
            engineVersion: '-',
            CSSgrade: 'A' 
		},{
			renderingEngine: 'Presto',
            browser: 'Opera 9.2',
            platform: 'Win 95+ / OSX.3+',
            engineVersion: '-',
            CSSgrade: 'A' 
		},
		{
			renderingEngine: 'Presto',
            browser: 'Opera 9.5',
            platform: 'Win 95+ / OSX.3+',
            engineVersion: '-',
            CSSgrade:'A'
		},
		{
			renderingEngine: 'Presto',
            browser: 'Opera for Wii',
            platform: 'Wii',
            engineVersion: '-',
            CSSgrade: 'A'
		},{
			renderingEngine: 'Presto',
            browser: 'Nokia N800',
            platform: 'N800',
            engineVersion: '-',
            CSSgrade: 'A'
		},{
			renderingEngine: 'Presto',
            browser: 'Nintendo DS browser',
            platform: 'Nintendo DS',
            engineVersion: 8.5,
            CSSgrade: 'C/A'
		},{
			renderingEngine: 'KHTML',
            browser: 'Konqureror 3.1',
            platform: 'KDE 3.1',
            engineVersion: 3.1,
            CSSgrade: 'C'
		},{
			renderingEngine: 'KHTML',
            browser: 'Konqureror 3.3',
            platform: 'KDE 3.3',
            engineVersion: 3.3,
            CSSgrade: 'A'
		},{
			renderingEngine: 'KHTML',
            browser: 'Konqureror 3.5',
            platform: 'KDE 3.5',
            engineVersion: 3.5,
            CSSgrade: 'A'
		},{
			renderingEngine: 'Tasman',
            browser: 'Internet Explorer 4.5',
            platform: 'Mac OS 8-9',
            engineVersion: '-',
            CSSgrade:'X' 
		},{
			renderingEngine: 'Tasman',
            browser: 'Internet Explorer 5.1',
            platform: 'Mac OS 7.6-9',
            engineVersion: 1,
            CSSgrade: 'C'
		},{
			renderingEngine: 'Tasman',
            browser: 'Internet Explorer 5.2',
            platform: 'Mac OS 8-X',
            engineVersion: 1,
            CSSgrade: 'C'
		},{
			renderingEngine: 'Misc',
            browser: 'NetFront 3.1',
            platform: 'Embedded devices',
            engineVersion: '-',
            CSSgrade: 'C'
		},{
			renderingEngine: 'Misc',
            browser: 'NetFront 3.4',
            platform: 'Embedded devices',
            engineVersion: '-',
            CSSgrade: 'A'
		},{
			renderingEngine: 'Misc',
            browser: 'Dillo 0.8',
            platform: 'Embedded devices',
            engineVersion: '-',
            CSSgrade: 'X'
		},{
			renderingEngine: 'Misc',
            browser: 'Links',
            platform: 'Text only',
            engineVersion: '-',
            CSSgrade: 'X'
		},{
			renderingEngine: 'Misc',
            browser: 'Lynx',
            platform: 'Text only',
            engineVersion: '-',
            CSSgrade: 'X'
		},{
			renderingEngine: 'Misc',
            browser: 'IE Mobile',
            platform: 'Windows Mobile 6',
            engineVersion: '-',
            CSSgrade: 'C'
		},{
			renderingEngine: 'Misc',
            browser: 'PSP browser',
            platform: 'PSP',
            engineVersion: '-',
            CSSgrade: 'C'
		},{
			renderingEngine: 'Other browsers',
            browser: 'All others',
            platform: '-',
            engineVersion: '-',
            CSSgrade: 'U'
		}]);


		return deferred.promise;
	}

	this.getTablesData = function(){
		var deferred = $q.defer();
		deferred.resolve([{
			num:1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo'
		},{
			num:2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat'
		},{
			num:3,
            firstName: 'Larry',
            lastName: 'the Bird',
            username: '@twitter'
		}
		]);

		return deferred.promise;
	}

	this.getClassTablesData = function(){
		var deferred = $q.defer();
		deferred.resolve([{
			num:1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            class: 'success'
		},{
			num:2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            class: 'info'
		},{
			num:3,
            firstName: 'Larry',
            lastName: 'the Bird',
            username: '@twitter',
            class: 'warning'
		},{
			num:4,
            firstName: 'John',
            lastName: 'Smith',
            username: '@jsmith',
            class: 'danger'
		}
		]);

		return deferred.promise;
	}
  }]);
