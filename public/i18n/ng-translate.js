
redditclone.config(function($translateProvider) {
    $translateProvider.translations('en', {
        newRedditButton: 'New Reddit!'
    })
        .translations('de', {
            newRedditButton: 'Neuer Reddit!'
        });
    $translateProvider.preferredLanguage('en');
});


redditclone.controller('i18nController', ['$scope', '$translate', function($scope, $translate) {
    $scope.setLanguageDE = function () {
        $translate.use('de');
        console.log("Language is set to DE");
    };
    $scope.setLanguageEN = function () {
        $translate.use('en');
        console.log("Language is set to EN");
    };
}]);