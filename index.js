/**
 * @fileoverview 
 * @author kpmTest<kpmTest@abc.com>
 * @module kpm-demo
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class KpmDemo
     * @constructor
     * @extends Base
     */
    function KpmDemo(comConfig) {
        var self = this;
        //调用父类构造函数
        KpmDemo.superclass.constructor.call(self, comConfig);

        console.log('I\'m KPM-DEMO');

    }
    S.extend(KpmDemo, Base, /** @lends KpmDemo.prototype*/{

    }, {ATTRS : /** @lends KpmDemo*/{

    }});
    return KpmDemo;
}, {requires:['node', 'base']});



