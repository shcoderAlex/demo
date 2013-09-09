
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , utils = require('../../lib/utils')
  , _ = require('underscore')
  , fs = require('fs')

exports.index = function(req, res){
  data = fs.sync.readFile('./tags.js', 'utf8');
  res.send(data); 
}