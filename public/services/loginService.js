redditclone.factory('loginService', ['$http', function($http) {
    return {
        loggedIn: false,
        user: { username: "", password: "" },
        login: function(username, password, callback) {
            $http.post('/login', { "name": name, "password": password })
            .success(function(data, status, headers, config) {
                console.log("User " + username + " logged in");
                this.loggedIn = true;
                this.user = { username: username, password: password };
                callback();
            }.bind(this))
            .error(function(data, status, headers, config) {
                this.loggedIn = false;
            }.bind(this));
        },
        register: function(username, password, callback) {
            $http.post('/register', { "name": name, "password": password })
            .success(function(data, status, headers, config) {
                console.log("User " + username + " registered");
                this.login(name, pasword);
                callback();
            }.bind(this))
            .error(function(data, status, headers, config) {
                this.loggedIn = false;
            }.bind(this));
        }
    };
}]);
