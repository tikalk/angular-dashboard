'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:FlotCtrl
 * @description
 * # FlotCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('FlotCtrl', ['$scope', '$interval', 'FlotService', function ($scope, $interval, FlotService) {
    //Flot Line Chart
    

    var offset = 0;
    plot();

    function plot() {
        var sin = [],
            cos = [];
        for (var i = 0; i < 12; i += 0.2) {
            sin.push([i, Math.sin(i + offset)]);
            cos.push([i, Math.cos(i + offset)]);
        }

        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        };

        $scope.lineChartData = [{
            data: sin,
            label: "sin(x)"
        }, {
            data: cos,
            label: "cos(x)"
        }];

        $scope.lineChartOptions = options;

    }
    //End - Flot Line Chart

	//Flot Pie Chart
	FlotService.getPieChartData().then(function(data){
        $scope.pieChartData = data;
        $scope.pieChartOptions = {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                    x: 20,
                    y: 0
                },
                defaultTheme: false
            }
        };

	},function(reason){
  		console.log(reason);
  	})
  	//End - Flot Pie Chart

    
	//Flot Multiple Axes Line Chart
    FlotService.getMultipleAxesLineChartData().then(function(data){
		function euroFormatter(v, axis) {
	        return v.toFixed(axis.tickDecimals) + "€";
	    }

	    function doPlot(position) {
            $scope.mulLineChartData = [{
                data: data.oilPrices,
                label: "Oil price ($)"
            }, {
                data: data.exchangeRates,
                label: "USD/EUR exchange rate",
                yaxis: 2
            }];

            $scope.mulLineChartOptions = {
                xaxes: [{
                    mode: 'time'
                }],
                yaxes: [{
                    min: 0
                }, {
                    // align if we are to the right
                    alignTicksWithAxis: position == "right" ? 1 : null,
                    position: position,
                    tickFormatter: euroFormatter
                }],
                legend: {
                    position: 'sw'
                },
                grid: {
                    hoverable: true //IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s for %x was %y",
                    xDateFormat: "%y-%0m-%0d",

                    onHover: function(flotItem, $tooltipEl) {
                        // console.log(flotItem, $tooltipEl);
                    }
                }

            };
	    }

    	doPlot("right");
		
	    /*$("button").click(function() {
	        doPlot($(this).text());
	    });*/

    },function(reason){
  		console.log(reason);
  	})
	//End - Flot Multiple Axes Line Chart

	//Flot Moving Line Chart
    var container = $("flot");

    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.

    var maximum = container.outerWidth() / 2 || 300;

    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    //

    $scope.movingLineChartData = [{
        data: getRandomData(),
        lines: {
            fill: true
        }
    }];

    $scope.movingLineChartOptions = {
        grid: {
            borderWidth: 1,
            minBorderMargin: 20,
            labelMargin: 10,
            backgroundColor: {
                colors: ["#fff", "#e4f4f4"]
            },
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
            markings: function(axes) {
                var markings = [];
                var xaxis = axes.xaxis;
                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                    markings.push({
                        xaxis: {
                            from: x,
                            to: x + xaxis.tickSize
                        },
                        color: "rgba(232, 232, 255, 0.2)"
                    });
                }
                return markings;
            }
        },
        xaxis: {
            tickFormatter: function() {
                return "";
            }
        },
        yaxis: {
            min: 0,
            max: 110
        },
        legend: {
            show: true
        }
    };

    // Update the random dataset at 25FPS for a smoothly-animating chart

    $interval(function() {
        $scope.movingLineChartData[0].data = getRandomData();
    }, 40);
    //End - Flot Moving Line Chart


	//Flot Bar Chart
	FlotService.getBarChartData().then(function(data){
		var barOptions = {
	        series: {
	            bars: {
	                show: true,
	                barWidth: 43200000
	            }
	        },
	        xaxis: {
	            mode: "time",
	            timeformat: "%m/%d",
	            minTickSize: [1, "day"]
	        },
	        grid: {
	            hoverable: true
	        },
	        legend: {
	            show: false
	        },
	        tooltip: true,
	        tooltipOpts: {
	            content: "x: %x, y: %y"
	        }
	    };
	    var barData = {
	        label: "bar",
	        data: data 
	    };

        $scope.barChartData = [barData];
        $scope.barChartOptions = barOptions;
	});

	//End - Flot Bar Chart

}]);