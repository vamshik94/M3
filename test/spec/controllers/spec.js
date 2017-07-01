describe('filters',function() {
    beforeEach(module('M3'));

    describe('reverse',function(){
        var reverse;
        beforeEach(inject(function(filters) {
            reverse = $filters('reverse',{});
        }));
        it('should reverse a string',function() {
            expect(reverse('madam').tobe('madam'));  // expecting pass
            expect(reverse('vamshi').tobe('vamshi'));   //expecting fail
        });
    });
});