'use strict';

var chai = require('chai');
chai.use(require('chai-datetime'));

var expect = chai.expect;
var dfs = require('../dist/index.js');

describe('dateFromString function test', () => {
    it('"2013-11-14" should return November 14th, 2013', () => {
        var date = dfs.parse('2013-11-14');
        var expectedDate = new Date(2013, 10, 14);
        expect(date).to.equalDate(expectedDate);
    });

    it('"2013-1-1" should return January 1st, 2013', () => {
      var date = dfs.parse('2013-1-1');
      var expectedDate = new Date(2013, 0, 1);
      expect(date).to.equalDate(expectedDate);
    });

    it('"2013-01-01" should return January 1st, 2013', () => {
      var date = dfs.parse('2013-1-1');
      var expectedDate = new Date(2013, 0, 1);
      expect(date).to.equalDate(expectedDate);
    });

    it('"2013-11-14T00:00:00.000Z" should return a new Date()', () => {
      var date = dfs.parse('2013-11-14T00:00:00.000Z');
      var expectedDate = new Date('2013-11-14T00:00:00.000Z');
      expect(date).to.equalDate(expectedDate);
    });

    it('"2013-11-14T00:00:00.000Z" and defined hours should return a new Date()', () => {
      var date = dfs.parse('2013-11-14T00:00:00.000Z', 15);
      var expectedDate = new Date(2013, 10, 14, 15);
      expect(date).to.equalDate(expectedDate);
    });

    it('"2013" should return an Invalid Date', () => {
      var date = dfs.parse('2013');
      var invalidDate = dfs.isValid(date);
      expect(invalidDate).to.equal(false);
    });

    it('"2013-11" should return an Invalid Date', () => {
      var date = dfs.parse('2013-11');
      var invalidDate = dfs.isValid(date);
      expect(invalidDate).to.equal(false);
    });

    it('123 should return an Invalid Date', () => {
      var date = dfs.parse(123);
      var invalidDate = dfs.isValid(date);
      expect(invalidDate).to.equal(false);
    });

    it('Valid date with invalid hours should return a date at 0 hours', () => {
      var date = dfs.parse('2013-11-14', 'test');
      var expectedDate = new Date(2013, 10, 14, 0);
      expect(date).to.equalDate(expectedDate);
    });
});