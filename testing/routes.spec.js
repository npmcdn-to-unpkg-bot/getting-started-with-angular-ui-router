describe('routes', function() {
    var $state;

    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        $state = $injector.get('$state');
    }));

    describe('movie', function() {
        var state;
    
        it('should have the correct URL', function() {
            state = $state.get('movie');
            expect(state.url).toEqual('/movie');
        });
    
        it('should use the correct template', function() {
            expect(state.templateUrl).toEqual('views/movie.html');
        });
    
    });

    describe('movie.cast', function() {
        var state;
    
        it('should have the correct URL', function() {
            state = $state.get('movie.cast');
            expect(state.url).toEqual('/cast');
        });
    
        it('should use the correct template', function() {
            expect(state.templateUrl).toEqual('views/movie-cast.html');
        });
    
    });

    describe('movie.description', function() {
        var state;
    
        it('should have the correct URL', function() {
            state = $state.get('movie.description');
            expect(state.url).toEqual('/description');
        });
    
        it('should use the correct template', function() {
            expect(state.templateUrl).toEqual('views/movie-description.html');
        });
    
    });

    describe('movie.trailer', function() {
        var state;
    
        it('should have the correct URL', function() {
            state = $state.get('movie.trailer');
            expect(state.url).toEqual('/trailer');
        });
    
        it('should use the correct template', function() {
            expect(state.templateUrl).toEqual('views/movie-trailer.html');
        });
    
    });
});