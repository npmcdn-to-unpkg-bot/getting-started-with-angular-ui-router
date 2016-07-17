angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('movie', {
                url: '/movie',
                templateUrl: 'views/movie.html'
            })
            .state('movie.cast', {
                url: '/movie/cast',
                templateUrl: 'views/movie-cast.html'
            })
            .state('movie.description', {
                url: '/movie/description',
                templateUrl: 'views/movie-description.html'
            })
            .state('movie.trailer', {
                url: '/movie/trailer',
                templateUrl: 'views/movie-trailer.html'
            })
    });