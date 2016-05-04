angular.module('application', ['ui.scroll', 'ui.scroll.jqlite', 'ui.scroll.grid'])
	.controller('mainController', [
		'$scope', '$log', '$timeout', function ($scope, console, $timeout) {
			var datasource = {};
			var layout;

			datasource.get = function (index, count, success) {
				$timeout(function () {
					var result = [];
					for (var i = index; i <= index + count - 1; i++) {
						result.push({col1: "item #" + i, col2: "item #" + i});
					}
					success(result);
				}, 100);
			};

			$scope.datasource = datasource;

			$scope.expand=function() {
				$scope.adapter.gridAdapter.columns[0].css('width', '200px');
				console.log(layout[0].layout.css);
			}

			$scope.collapse=function() {
				$scope.adapter.gridAdapter.columns[0].css('width', '100px');
				console.log(layout[0].layout.css);
			}

			$scope.getLayout=function() {
				layout = $scope.adapter.gridAdapter.getLayout();
				console.log(layout[0].layout.css);
			}

			$scope.applyLayout=function() {
				$scope.adapter.gridAdapter.applyLayout(layout);
				console.log(layout[0].layout.css);
			}
		}
	]);
