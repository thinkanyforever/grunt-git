'use strict';

var command = require('../lib/command_tag');
var Test = require('./_common');

describe('tag', function () {
    it('should create tag', function (done) {
        var options = {
            tag: '0.0.1'
        };

        new Test(command, options)
            .expect(["tag", "0.0.1"])
            .run(done);
    });

    it('should tag with message', function (done) {
        var options = {
            tag: '0.0.1',
            message: 'Test'
        };

        new Test(command, options)
            .expect(["tag", "-m", "Test", "0.0.1"])
            .run(done);
    });
});
