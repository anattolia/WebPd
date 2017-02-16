/*
 * Copyright (c) 2011-2017 Chris McCormick, Sébastien Piquemal <sebpiq@gmail.com>
 *
 *  This file is part of WebPd. See https://github.com/sebpiq/WebPd for documentation
 *
 *  WebPd is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WebPd is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with WebPd.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var corePortlets = require('../core/portlets')
var engine = require('./dsp-engine')

exports.DspInlet = engine.DspInlet
exports.DspOutlet = engine.DspOutlet
exports.Inlet = corePortlets.Inlet
exports.Outlet = corePortlets.Outlet
exports.UnimplementedInlet = corePortlets.UnimplementedInlet
exports.UnimplementedOutlet = corePortlets.UnimplementedOutlet

exports.declareObjects = function(library) {
  library['outlet'] = function() {}
  library['outlet~'] = function() {}
  library['inlet'] = function() {}
  library['inlet~'] = function() {}
}