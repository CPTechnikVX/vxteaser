import ElementFactory from './ElementFactory';

/**
 * If the key is numeric
 * @param n
 * @returns {boolean}
 */
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Render node
 * @param args
 * @returns {*}
 */
export function renderNode({...args}) {
	return ElementFactory.getForName.call(this, args);
}

/**
 * Traverse recursively the object und process each node via fnc()
 * @param o
 * @param func
 * @param config
 * @param props
 * @param counter
 * @returns {Array}
 */
function traverse(o, func, config, props, counter = 0) {
	const children = [];
	let n          = 0;

	if (!config.stats) {
		config.stats = {};
	}

	if (!config.stats[counter]) {
		config.stats[counter] = [];
	}

	for (const i in o) {
		n++;
		if (o.hasOwnProperty(i)) {
			let subchildren;

			if (o[i] !== null && typeof o[i] === 'object' && i[0] !== '@') {
				//going one step down in the object tree!!
				subchildren = traverse(o[i], func, config, props, !isNumeric(i) ? counter + 1 : counter);
			}

			if (!isNumeric(i) && i[0] !== '@') {
				if (!config.stats[counter][i]) {
					config.stats[counter][i] = 1;
				} else {
					config.stats[counter][i] += 1;
				}

				const params = {
					attrs:        {key: 'vxk-' + n},
					name:         i,
					stats:        {nthOfType: config.stats[counter][i], level: counter},
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

				const child = func.call(this, params);
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
	/**
	 * Convert given JSON configuration into react elements tree
	 * @param json
	 * @param config
	 * @param props
	 * @param renderFn
	 */
	static processJSONToReact(json, config = {}, props = {}, renderFn = renderNode) {
		return traverse(json, renderFn, config, props);
	}
}
