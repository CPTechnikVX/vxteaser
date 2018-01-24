import React          from 'react';
import ElementFactory from './ElementFactory';

if (typeof Object.assign !== 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (let index = 1; index < arguments.length; index++) {
			const source = arguments[index];
			if (source != null) {
				for (let key in source) {
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

function renderNode({...args}) {
	return ElementFactory.getForName.call(this, args);
}

function traverse(o, func, config, props, counter = 0) {
	const children = [];
	let n          = 0;

	for (let i in o) {
		n++;
		if (o.hasOwnProperty(i)) {
			let subchildren;
			if (o[i] !== null && typeof o[i] === 'object' && i[0] !== '@') {
				//going one step down in the object tree!!
				subchildren = traverse(o[i], func, config, props, counter);
			}

			if (!isNumeric(i) && i[0] !== '@') {
				let child;
				const params = {
					attrs:        {key: 'vxk-' + n},
					name:         i,
					renderNodeFn: renderNode,
					config,
					props,
				};

				if (typeof o[i] === 'object') {
					params.attrs    = {...params.attrs, ...o[i]['@attributes']};
					params.children = o[i]['@value'] ? o[i]['@value'] : subchildren;
				} else {
					params.children = o[i];
				}

				child = func.call(this, params);
				children.push(child);
			}
			else if (isNumeric(i)) {
				children.push(subchildren);
			}
		}
	}

	return children;
}

export default class Processor {
	static processJSONToReact(json, config = {}, props = {}, renderFn = renderNode) {
		const result = traverse(json, renderFn, config, props);

		return result;
	}
}
