angular.module('starter.controllers', [])

//.controller('DashCtrl', function ($scope) {})
.controller('DashCtrl', function ($scope, $ionicSlideBoxDelegate, $http) {
	$scope.date = null;

	// $http.get('http://localhost:8082/api/dates')
	// .success(function(res) {
	//   $scope.dates = res;
	//   findCurrentDate();
	// });

	$scope.selectDay = function (obj) {
		console.log(obj);
		setSelection(obj.id);
	}

	$scope.next = function () {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function () {
		$ionicSlideBoxDelegate.previous();
	};

	// Called each time the slide changes
	$scope.slideChanged = function (index) {
		$scope.slideIndex = index;
	};

	function setSelection(id) {
		for (var i = 0; i < $scope.dates.length; i++) {
			for (var j = 0; j < $scope.dates[i].length; j++) {
				if ($scope.dates[i][j].id == id) {
					$scope.dates[i][j].selected = true;
					$scope.date = $scope.dates[i][j].date_string;
				} else {
					$scope.dates[i][j].selected = false;
				}
			}
		}
	}

	function findCurrentDate() {
		for (var i = 0; i < $scope.dates.length; i++) {
			for (var j = 0; j < $scope.dates[i].length; j++) {
				if ($scope.dates[i][j].selected) {
					$scope.date = $scope.dates[i][j].date_string;
				}
			}
		}
	}


	$scope.dates = JSON.parse('[[{"id":0,"date_unix":1428948312071,"date_string":"2015-04-13T18:05:12.071Z","weekday_id":1,"weekday":"Mo","selected":false},{"id":1,"date_unix":1429034712071,"date_string":"2015-04-14T18:05:12.071Z","weekday_id":2,"weekday":"Di","selected":false},{"id":2,"date_unix":1429121112071,"date_string":"2015-04-15T18:05:12.071Z","weekday_id":3,"weekday":"Mi","selected":false},{"id":3,"date_unix":1429207512071,"date_string":"2015-04-16T18:05:12.071Z","weekday_id":4,"weekday":"Do","selected":true},{"id":4,"date_unix":1429293912071,"date_string":"2015-04-17T18:05:12.071Z","weekday_id":5,"weekday":"Fr","selected":false},{"id":5,"date_unix":1429380312071,"date_string":"2015-04-18T18:05:12.071Z","weekday_id":6,"weekday":"Sa","selected":false},{"id":6,"date_unix":1429466712071,"date_string":"2015-04-19T18:05:12.071Z","weekday_id":0,"weekday":"So","selected":false}],[{"id":7,"date_unix":1429553112071,"date_string":"2015-04-20T18:05:12.071Z","weekday_id":1,"weekday":"Mo","selected":false},{"id":8,"date_unix":1429639512071,"date_string":"2015-04-21T18:05:12.071Z","weekday_id":2,"weekday":"Di","selected":false},{"id":9,"date_unix":1429725912071,"date_string":"2015-04-22T18:05:12.071Z","weekday_id":3,"weekday":"Mi","selected":false},{"id":10,"date_unix":1429812312071,"date_string":"2015-04-23T18:05:12.071Z","weekday_id":4,"weekday":"Do","selected":false},{"id":11,"date_unix":1429898712071,"date_string":"2015-04-24T18:05:12.071Z","weekday_id":5,"weekday":"Fr","selected":false},{"id":12,"date_unix":1429985112071,"date_string":"2015-04-25T18:05:12.071Z","weekday_id":6,"weekday":"Sa","selected":false},{"id":13,"date_unix":1430071512071,"date_string":"2015-04-26T18:05:12.071Z","weekday_id":0,"weekday":"So","selected":false}],[{"id":14,"date_unix":1430157912071,"date_string":"2015-04-27T18:05:12.071Z","weekday_id":1,"weekday":"Mo","selected":false},{"id":15,"date_unix":1430244312071,"date_string":"2015-04-28T18:05:12.071Z","weekday_id":2,"weekday":"Di","selected":false},{"id":16,"date_unix":1430330712071,"date_string":"2015-04-29T18:05:12.071Z","weekday_id":3,"weekday":"Mi","selected":false},{"id":17,"date_unix":1430417112071,"date_string":"2015-04-30T18:05:12.071Z","weekday_id":4,"weekday":"Do","selected":false},{"id":18,"date_unix":1430503512071,"date_string":"2015-05-01T18:05:12.071Z","weekday_id":5,"weekday":"Fr","selected":false},{"id":19,"date_unix":1430589912071,"date_string":"2015-05-02T18:05:12.071Z","weekday_id":6,"weekday":"Sa","selected":false},{"id":20,"date_unix":1430676312071,"date_string":"2015-05-03T18:05:12.071Z","weekday_id":0,"weekday":"So","selected":false}],[{"id":21,"date_unix":1430762712071,"date_string":"2015-05-04T18:05:12.071Z","weekday_id":1,"weekday":"Mo","selected":false},{"id":22,"date_unix":1430849112071,"date_string":"2015-05-05T18:05:12.071Z","weekday_id":2,"weekday":"Di","selected":false},{"id":23,"date_unix":1430935512071,"date_string":"2015-05-06T18:05:12.071Z","weekday_id":3,"weekday":"Mi","selected":false},{"id":24,"date_unix":1431021912071,"date_string":"2015-05-07T18:05:12.071Z","weekday_id":4,"weekday":"Do","selected":false},{"id":25,"date_unix":1431108312071,"date_string":"2015-05-08T18:05:12.071Z","weekday_id":5,"weekday":"Fr","selected":false},{"id":26,"date_unix":1431194712071,"date_string":"2015-05-09T18:05:12.071Z","weekday_id":6,"weekday":"Sa","selected":false},{"id":27,"date_unix":1431281112071,"date_string":"2015-05-10T18:05:12.071Z","weekday_id":0,"weekday":"So","selected":false}]]');
	findCurrentDate();

})

.controller('ChatsCtrl', function ($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
