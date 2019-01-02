'use strict'

const PRELOAD = ['./core', './commands'],
	subMod = require('./require')

for(let name of PRELOAD) require(name)

module.exports = function SkillPrediction(mod) {
	for(let name of PRELOAD) subMod(mod, name)
}