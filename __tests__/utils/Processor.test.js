import React     from 'react';
import Processor from '../../src/utils/Processor';
import Constants from "../../src/utils/Constants";

describe('JSON2React', () => {
	let html = '';

	const tree = Processor.processJSONToReact({
		"banner": {
			"skewpanelgroup": {
				"panel":       {
					"0":           {
						"row": {
							"col": {
								"headline": {
									"@value":      "Januar 2018 - Ausgabe",
									"@attributes": {"size": "2.6rem"},
								},
							},
						},
					},
					"1":           {
						"row": {
							"col": {
								"headline": {
									"text":           {
										"@value":      "VISIT-X Community Magazin",
										"@attributes": {"type": "headline"},
									}, "@attributes": {"size": "4rem", "fontWeight": "700"},
								},
							},
						},
					},
					"2":           {
						"row": {
							"col": {
								"headline": {
									"text":        "Alles NEU macht 2018 - so auch das VISIT-X-Magazin! Wir haben coole Reviews\n    der Essen Motor Show und der legend\u00e4ren Night of the Nights f\u00fcr Dich uvm.",
									"@attributes": {"size": "1.8rem"},
								},
							},
						},
					},
					"3":           {
						"row": {
							"col": {
								"link": {
									"@value":      "Jetzt kostenlos online lesen",
									"@attributes": {"type": "button", "color": "primary", "url": "link:OnlineMag"},
								},
							},
						},
					},
					"@attributes": {"width": "45%"},
				},
				"@attributes": {
					"skewWidth":           "55%",
					"skewColor":           "#000000",
					"skewBackgroundColor": "#FFFFFF",
				},
			},
		},
	}, {}, {}, (args) => {
		html = args.name + html;
		return args;
	});

	it('check serialized', () => {
		expect(html).toBe('bannerskewpanelgrouppanelrowcollinkrowcolheadlinetextrowcolheadlinetextrowcolheadline');
	});
	it('check single elements', () => {
		expect(tree[0].name).toBe(Constants.Element.Banner);
		expect(tree[0].children[0].name).toBe(Constants.Element.SkewPanelGroup);
	});
});
