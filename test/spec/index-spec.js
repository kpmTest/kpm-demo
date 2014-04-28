KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('kpm-demo', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/kpm-demo/1.0/']});