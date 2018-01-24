import React          from 'react';
import ElementFactory from "./ElementFactory";

if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

//called with every property and its value
function process(key, children, attrs, config, props) {
	console.log('node', key, attrs, children);
	if (!isNumeric(key)) {
		return ElementFactory.getForName(key, attrs, children, config, props);
	}
}

function traverse(o, func, config, props) {
	const children = [];
	for (let i in o) {
		let subchildren;
		console.log('iter', i, o[i]);
		if (o[i] !== null && typeof o[i] === 'object' && i[0] !== '@') {
			//going one step down in the object tree!!
			subchildren = traverse(o[i], func, config, props);
		}

		if (!isNumeric(i) && i[0] !== '@') {
			let child;
			if (typeof o[i] === 'object') {
				const {'@attributes': attrs, '@value': value} = o[i];
				child                                         = func.apply(this, [i, value ? value : subchildren, attrs, config, props]);
			} else {
				child = func.apply(this, [i, o[i], null, config, props]);
			}
			children.push(child);
		}
		else if (isNumeric(i)) {
			children.push(subchildren);
		}
	}

	return children;
}

export default class Processor {
	static processJSONToReact(config = {}, props = {}) {
		const result = traverse(config.json, process, config, props);

		return result;
	}

	static processNode(key, node) {
		const children = [];

		if (typeof node === 'object') {
			const {'@attributes': attrs, '@value': value, ...childArrObj} = node;

			const children = [];
			for (let key in childArrObj) {
				console.log(key, childArrObj);
				if (childArrObj.hasOwnProperty(key) && isNumeric(key)) {
					for (let keyName in childArrObj[key]) {
						if (childArrObj[key].hasOwnProperty(keyName)) {
							console.log('recur', keyName, childArrObj[key][keyName]);
							children.push(Processor.processNode(keyName, childArrObj[key][keyName]));
						}
					}
				} else {
					console.log('stop', key, childArrObj[key]);
					children.push(Processor.processNode(key, childArrObj[key]));
				}
			}
			console.log(children);

		} else {
			children.push(Processor.processNode(key, childArrObj[key]));
		}

		return ElementFactory.getForName(key, attrs, children);
	}
}
