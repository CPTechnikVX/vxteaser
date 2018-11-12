import React           from 'react';
import {storiesOf}     from '@storybook/react';
import {action}        from '@storybook/addon-actions';
import BannerSuite     from '../src/components/BannerSuite';
import {BannerBuilder} from '../src/utils/Builder';
import ProviderMock    from '../src/components/ProviderMock';
import TileSuite       from '../src/components/TileSuite';

const desktopConfigs =
	      [{
		      "id":              1,
		      "name":            "banner1",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "@value":      "Januar 2018 - Ausgabe",
										      "@attributes": {"type": "sub"}
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "VISIT-X  Magazin",
										      "@attributes": {"type": "main"}
									      }
								      }
							      }
						      },
						      "2":           {"row": {"col": {"headline": {"text": "Alles NEU macht 2018 - so auch das VISIT-X-Magazin! Wir haben coole Reviews\n    der Essen Motor Show und der legend\u00e4ren Night of the Nights f\u00fcr Dich uvm."}}}},
						      "3":           {
							      "row": {
								      "col": {
									      "button": {
										      "@value":      "Jetzt online lesen",
										      "@attributes": {
											      "color": "primary",
											      "link":  "https:\/\/www.visit-x.net\/de\/magazin\/aktuelle-ausgabe\/"
										      }
									      }
								      }
							      }
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "55%"}
				      }, "@attributes": {"theme": "light", "link": "https:\/\/www.visit-x.net\/de\/magazin\/aktuelle-ausgabe\/"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/vx-magazin\/vxteaser_092magazin_desktop.jpg",
		      "color1":          "#000000",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/vx-magazin\/vxteaser_092magazin_desktop.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500,
		      "color2":          "#000000"
	      }, {
		      "id":              2,
		      "name":            "banner2",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "\u00dcberrasche Deine Favoritin!",
										      "@attributes": {"type": "sub", "modifier": "-mb-10"}
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "HAPPY VALENTINES DAY!",
										      "@attributes": {"type": "main"}
									      }
								      }
							      }
						      },
						      "2":           {"row": {"col": {"headline": {"text": "Verschenke am 14. Februar eine Rose per Nachricht oder im Chat und mit etwas Gl\u00fcck schickt VISIT-X Deiner Favoritin einen echten Strau\u00df Rosen direkt\n\t               nach Hause! Jede verschenkte Rose erh\u00f6ht Deine Gewinnchancen!"}}}},
						      "3":           {
							      "row": {
								      "col": {
									      "button": {
										      "@value":      "Rose verschenken!",
										      "@attributes": {"color": "white"}
									      }
								      }
							      }
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "55%"}
				      }, "@attributes": {"theme": "special"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser_valentinesday2018.jpg",
		      "color1":          "#000000",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser_valentinesday2018.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500,
		      "color2":          "#000000"
	      }, {
		      "id":               3,
		      "name":             "banner3",
		      "content":          {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "Willkommen zur\u00fcck,",
										      "@attributes": {
											      "type":     "main",
											      "modifier": "-mb-5 -text-align-left"
										      }
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "PETR001",
										      "@attributes": {"type": "sub", "modifier": "-text-align-left"}
									      }
								      }
							      }
						      },
						      "2":           {
							      "row": [{
								      "col": {
									      "row": [{
										      "col": {
											      "icon":           {
												      "@value":      "",
												      "@attributes": {"modifier": "icon -icon-chat-flat h-vertical-align-top h-disp-block h-left -size-md teaser__text-icon"}
											      }, "@attributes": {"width": "12%"}
										      }
									      }, {
										      "col": {
											      "link":            [{
												      "headline": {
													      "text":        "Du hast",
													      "@attributes": {"modifier": "-mb-0 -text-align-left"}
												      }
											      }, {
												      "headline": {
													      "text":           {
														      "@value":      "51 neue Nachrichten",
														      "@attributes": {"color": "description", "modifier": "-font-light"}
													      }, "@attributes": {"modifier": "-mb-0 -text-align-left"}
												      }
											      }], "@attributes": {"width": "88%", "modifier": "-align-center"}
										      }
									      }]
								      }
							      }, {
								      "col": {
									      "row": [{
										      "col": {
											      "icon":           {
												      "@value":      "",
												      "@attributes": {"modifier": "icon -icon-euro-line h-vertical-align-top h-disp-block h-left -size-md teaser__text-icon"}
											      }, "@attributes": {"width": "12%"}
										      }
									      }, {
										      "col": {
											      "link":            [{
												      "headline": {
													      "text":        "Dein Guthaben 47,03\u20ac",
													      "@attributes": {"modifier": "-mb-0 -text-align-left"}
												      }
											      }, {
												      "headline": {
													      "text":           {
														      "@value":      "Jetzt aufladen",
														      "@attributes": {"color": "description", "modifier": "-font-light"}
													      }, "@attributes": {"modifier": "-mb-0 -text-align-left"}
												      }
											      }], "@attributes": {"width": "88%"}
										      }
									      }]
								      }
							      }]
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "50%"}
				      }
			      }
		      },
		      "template":         "fixedHeight",
		      "height1":          260,
		      "backgroundUrl1":   "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-all-welcome-bg.jpg",
		      "backgroundColor1": "#262728",
		      "breakpoint1":      1200,
		      "backgroundUrl2":   "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-all-welcome-bg.jpg",
		      "height2":          500
	      }, {
		      "id":              4,
		      "name":            "banner4",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "0":           {
											      "img": {
												      "@value":      "",
												      "@attributes": {
													      "src":   "https:\/\/www.visit-x.net\/assets\/icons\/icon_whatsapp_logo.svg",
													      "width": "50"
												      }
											      }
										      },
										      "1":           {"text": "18 Jahre BiggiBardot"},
										      "@attributes": {"type": "main"}
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "Die Kultfigur im Erotikbusiness feiert ihr 18. Jubil\u00e4um!",
										      "@attributes": {"type": "sub"}
									      }
								      }
							      }
						      },
						      "2":           {"row": {"col": {"headline": {"text": "Wer die hei\u00dfe Blondine live sehen will, kann sich jetzt zu ihr in den Livechat klicken. Denn BiggiBardot ist heute DEN GANZEN TAG online!"}}}},
						      "3":           {
							      "row": {
								      "col": {
									      "button": {
										      "@value":      "Zur Party",
										      "@attributes": {"color": "primary"}
									      }
								      }
							      }
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "54%"}
				      }, "@attributes": {"theme": "transparent"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-biggibardot-18-years.jpg",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-biggibardot-18-years.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500
	      }, {
		      "id":              5,
		      "name":            "banner5",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "0":           {
						      "panel": {
							      "0":           {
								      "row": {
									      "col": {
										      "headline": {
											      "text":        "Jetzt kennenlernen: Unsere",
											      "@attributes": {"type": "sub"}
										      }
									      }
								      }
							      },
							      "1":           {
								      "row": {
									      "col": {
										      "headline": {
											      "0":           {"text": "KATEGORIE"},
											      "1":           {"br": ""},
											      "2":           {"text": "\u00dcBERSICHT"},
											      "@attributes": {"type": "main"}
										      }
									      }
								      }
							      },
							      "@attributes": {"width": "45%", "valign": "bottom"}
						      }
					      },
					      "1":           {
						      "panelskewbutton": {
							      "@value":      "Hotties",
							      "@attributes": {"link": "https:\/\/www.visit-x.net\/de\/kategorien\/31-hotties\/"}
						      }
					      },
					      "2":           {
						      "panelskewbutton": {
							      "@value":      "Tattos",
							      "@attributes": {"link": "https:\/\/www.visit-x.net\/de\/kategorien\/74-tattoos\/"}
						      }
					      },
					      "3":           {
						      "panelskewbutton": {
							      "@value":      "Reife Frauen",
							      "@attributes": {"link": "https:\/\/www.visit-x.net\/de\/kategorien\/18-reife-frauen\/"}
						      }
					      },
					      "4":           {
						      "panelskew": {
							      "@value":      "",
							      "@attributes": {
								      "src":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-existing-categories-01.jpg",
								      "link": "https:\/\/www.visit-x.net\/de\/kategorien\/31-hotties\/"
							      }
						      }
					      },
					      "5":           {
						      "panelskew": {
							      "@value":      "",
							      "@attributes": {
								      "src":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-existing-categories-02.jpg",
								      "link": "https:\/\/www.visit-x.net\/de\/kategorien\/74-tattoos\/"
							      }
						      }
					      },
					      "6":           {
						      "panelskew": {
							      "@value":      "",
							      "@attributes": {
								      "src":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-existing-categories-03.jpg",
								      "link": "https:\/\/www.visit-x.net\/de\/kategorien\/18-reife-frauen\/"
							      }
						      }
					      },
					      "@attributes": {"skewWidth": "54%"}
				      }
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "",
		      "backgroundSize2": "auto",
		      "height2":         500
	      }, {
		      "id":              6,
		      "name":            "banner6",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "0":           {
						      "panel": {
							      "0":           {
								      "row": {
									      "col": {
										      "headline": {
											      "text":        "Jetzt kennenlernen: Unsere",
											      "@attributes": {"type": "sub"}
										      }
									      }
								      }
							      },
							      "1":           {
								      "row": {
									      "col": {
										      "headline": {
											      "text":        "KATEGORIE\u00dcBERSICHT",
											      "@attributes": {"type": "main"}
										      }
									      }
								      }
							      },
							      "@attributes": {"width": "45%", "valign": "bottom"}
						      }
					      },
					      "1":           {
						      "panelskewbutton": {
							      "@value":      "Hotties",
							      "@attributes": {"link": "https:\/\/www.visit-x.net\/de\/kategorien\/31-hotties\/"}
						      }
					      },
					      "2":           {
						      "panelskewbutton": {
							      "@value":      "Tattos",
							      "@attributes": {"link": "https:\/\/www.visit-x.net\/de\/kategorien\/74-tattoos\/"}
						      }
					      },
					      "3":           {
						      "panelskew": {
							      "@value":      "",
							      "@attributes": {
								      "src":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-existing-categories-01.jpg",
								      "link": "https:\/\/www.visit-x.net\/de\/kategorien\/31-hotties\/"
							      }
						      }
					      },
					      "4":           {
						      "panelskew": {
							      "@value":      "",
							      "@attributes": {
								      "src":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-existing-categories-02.jpg",
								      "link": "https:\/\/www.visit-x.net\/de\/kategorien\/74-tattoos\/"
							      }
						      }
					      },
					      "@attributes": {"skewWidth": "54%"}
				      }
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "",
		      "backgroundSize2": "auto",
		      "height2":         500
	      }, {
		      "id":              7,
		      "name":            "banner7",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {"row": {"col": {"headline": "T\u00e4glich spielen und gewinnen!"}}},
						      "1":           {"row": {"col": {"headline": {"text": "VISIT-X Slotmachine"}}}},
						      "2":           {
							      "row": {
								      "col": [{"headline": {"text": "Knacke den hei\u00dfesten Jackpot ever und gewinne einen"}}, {
									      "headline": {
										      "text": {
											      "@value":      "Bonus von bis zu 50% oder einen hei\u00dfen 18+ Clip!",
											      "@attributes": {"color": "highlight"}
										      }
									      }
								      }]
							      }
						      },
						      "3":           {
							      "row": {
								      "col": {
									      "button": {
										      "@value":      "Jetzt spielen!",
										      "@attributes": {"color": "primary"}
									      }
								      }
							      }
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "55%"}
				      }, "@attributes": {"theme": "light"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/slotmachine\/teaser_slotmachine_2018.jpg",
		      "color1":          "#000000",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/slotmachine\/teaser_slotmachine_2018.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500,
		      "color2":          "#000000"
	      }, {
		      "id":              8,
		      "name":            "banner8",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "Jetzt VIP Gratismonat starten und zus\u00e4tzlich 20\u20ac Startguthaben",
										      "@attributes": {"type": "sub"}
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": [{
								      "col": {
									      "button": {
										      "@value":      "Jetzt einl\u00f6sen",
										      "@attributes": {"color": "green"}
									      }
								      }
							      }, {"col": {"countdown": {"@value": "Nur noch: 11:45:59", "@attributes": {"timer": "120"}}}}]
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "55%"}
				      }, "@attributes": {"theme": "light"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-trial-abo-bg.jpg",
		      "color1":          "#000000",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-trial-abo-bg.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500,
		      "color2":          "#000000"
	      }, {
		      "id":              9,
		      "name":            "banner9",
		      "content":         {
			      "banner": {
				      "skewpanelgroup": {
					      "panel":          {
						      "0":           {
							      "row": {
								      "col": {
									      "headline": {
										      "text":        "Jetzt VIP Gratismonat starten und zus\u00e4tzlich 20\u20ac Startguthaben",
										      "@attributes": {"type": "sub"}
									      }
								      }
							      }
						      },
						      "1":           {
							      "row": [{
								      "col": {
									      "button": {
										      "@value":      "Jetzt einl\u00f6sen",
										      "@attributes": {"color": "green"}
									      }
								      }
							      }, {"col": {"countdown": {"@value": "Nur noch: 11:45:59", "@attributes": {"timer": "120"}}}}]
						      },
						      "@attributes": {"width": "45%"}
					      }, "@attributes": {"skewWidth": "55%"}
				      },
				      "@attributes":    {"theme": "highlight"}
			      }
		      },
		      "template":        "fixedHeight",
		      "height1":         260,
		      "backgroundUrl1":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-trial-abo-bg.jpg",
		      "color1":          "#000000",
		      "breakpoint1":     1200,
		      "backgroundUrl2":  "https:\/\/www.visit-x.net\/assets\/img\/teaser\/teaser-trial-abo-bg.jpg",
		      "backgroundSize2": "auto",
		      "height2":         500,
		      "color2":          "#000000"
	      }];

const mobileConfigs = [
	{
		backgroundUrl1: "https://m.visit-x.net/assets/img/teaser_mobile/vx-magazin/vxteaser_101magazin_mobile.jpg",
		content:        {
			"tile": [
				{
					"panel": {
						"@attributes": {
							"theme": "transparent",
						},
						"row":         {
							"button": {
								"@value": "Zum Profil",
							}
						},
					}
				},
				{
					"panel": {
						"@attributes": {
							"theme": "light",
						},
						"0":           {
							"row": [
								{
									"headline": {
										"@value":      "Promo Aktion - bis 10.12.2018",
										"@attributes": {
											"type": "main",
										},
									}
								},
							]
						},
						"1":           {
							"row": [
								{
									"headline": {
										"@value": "This is a subtext",
									}
								},
							]
						},
					},
				},
			],
		},
		id:             1,
		name:           "tile1",
		template:       "aspectRatio"
	},
	{
		backgroundUrl1: "https://m.visit-x.net/assets/img/teaser_mobile/wiesn_gaudi_2018/wiesn-gaudi_mobile_login.jpg",
		content:        {
			"tile": [
				{
					"panel": {
						"@attributes": {
							"theme": "light",
						},
						"0":           {
							"row": [
								{
									"headline": {
										"@value":      "This is a headline",
										"@attributes": {
											"type": "main",
										},
									}
								},
							]
						},
						"1":           {
							"row": [
								{
									"headline": {
										"@value": "This is a subtext",
									}
								},
							]
						},
					},
				},
			],
		},
		id:             2,
		name:           "tile2",
		template:       "aspectRatio"
	},
	{
		backgroundUrl1: "https://m.visit-x.net/assets/img/teaser_mobile/wiesn_gaudi_2018/wiesn-gaudi_mobile_login.jpg",
		content:        {
			"tile": [
				{
					"panel": {
						"@attributes": {
							"theme": "light",
						},
						"0":           {
							"row": [
								{
									"headline": {
										"@value":      "This is a headline",
										"@attributes": {
											"type":     "main",
											"modifier": "-mb-0",
										},
									}
								},
							]
						},
					},
				},
			],
		},
		id:             3,
		name:           "tile3",
		template:       "aspectRatio"
	},
	{
		content:  {
			"tile": {
				"@attributes": {
					"theme": "special",
				},
				"panelgroup":  [
					{
						"panel": {
							"@attributes": {
								"modifier": "-mb-0",
							},
							"0":           [
								{
									"row": {
										"headline": {
											"@value":      "50% auf die erste Aufladung",
											"@attributes": {
												"type": "sub",
											},
										}
									},

								},
								{
									"row": {
										"headline": {
											"@value":      "Jetzt aufladen + bis zu",
											"@attributes": {
												"type": "main",
											},
										}
									},
								},
								{
									"row": {
										"headline": {
											"@value":      "75€ geschenkt",
											"@attributes": {
												"modifier": "-mb-5",
											},
										}
									},
								},
								{
									"row": {
										"headline": {
											"@value":      "bekommen",
											"@attributes": {
												"type": "main",
											},
										}
									},
								},
							],
						},
					},
					{
						"panel": {
							"@attributes": {},
							"0":           {
								"row": [
									{
										"button": {
											"@value":      "Gutschein einlösen",
											"@attributes": {
												"theme": "light",
											},
										}
									},
								]
							},
						},
					}
				],
			},
		},
		id:       4,
		name:     "tile4",
		template: "aspectRatio"
	},
];

function DesktopWrapper(children) {
	const style = {
		width:    '1300px',
		maxWidth: '100%',
	};

	return <div style={style}>{children}</div>;
}

function MobileWrapper(children) {
	const styleBody  = {
		width:    '320px',
		maxWidth: '100%',
		margin:   '0 auto 20px',
	};
	const styleOuter = {
		width:      '100%',
		position:   'relative',
		paddingTop: '75%',
	};
	const styleInner = {
		position: 'absolute',
		top:      0,
		left:     0,
		bottom:   0,
		right:    0,
		overflow: 'hidden',
	};

	return <div style={styleBody}>
		<div style={styleOuter}>
			<div style={styleInner}>{children}</div>
		</div>
	</div>;
}

storiesOf('BannerSuite', module)
	.add('banner', () => {

		const config = {};

		return DesktopWrapper(<BannerSuite configs={desktopConfigs} className={config.bannerSuiteClassName ? config.bannerSuiteClassName : ''} />);
	})
	.add('tile', () => {
		return MobileWrapper(<TileSuite configs={mobileConfigs} />);
	})
	.add('tile standalone', () => {
		const customSuiteFn = function(elements) {
			return MobileWrapper(elements);
		};

		return <div>
			<TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(3, 4)} />
			<TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(0, 1)} />
			<TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(1, 2)} />
			<TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(2, 3)} />
		</div>;
	})
;
