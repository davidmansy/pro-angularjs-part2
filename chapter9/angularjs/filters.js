angular.module('exampleApp.Filters', [])
.filter('dayname', function() {
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                  'Friday', 'Saturday'];
  return function(dayNum) {
    return angular.isNumber(dayNum) ? dayNames[dayNum] : dayNum;
  };
});