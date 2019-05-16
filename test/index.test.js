var msg = require('../index.js')
var expect = require('chai').expect

describe('测试First-pkg模块', function() {
    it('打印出信息', function() {
        expect(msg.showMsg()).to.be.equal(2)
    })
})