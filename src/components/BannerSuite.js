import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BannerBuilder from '../utils/BannerBuilder';

class BannerSuite extends React.PureComponent {

	constructor(props) {
		super(props);

		this.timerInterval = null;
		this.banners       = {};
		this.itemRefs      = [];
		this.pointRefs     = [];
		this.state         = this.getInitialState();
	}

	getInitialState() {
//		const vxqlEndpoint = 'https://pu.vxnextgen.x/vxql';
		const vxqlEndpoint = 'http://ph.vxteaser.x/banner.php';
		const vxqlWebToken = '';
		const query        = 'query{model(name:"pus001"){id,name}}';

		fetch(
			vxqlEndpoint,
			{
//				method:  'get',
				method:  'post',
				headers: {
					'Authorization': 'Bearer ' + vxqlWebToken,
				},
//				body:    JSON.stringify({query})
			}
		)
			.then((res) => res.json())
			.then((data) => { /*this.setState({config: data}); */
			});

		this.startInterval();

		return {
			visibleIndex: 0,
			mouseOver:    false,
			config:       [
				{
					id:            '123456-1111',
					typeId:        'banner',
					template:      'fixedHeight',
					fixedHeights:  [
						{
							greaterThan:        0,
							height:             500,
							backgroundPosition: 'initial',
							backgroundSize:     'auto',
						},
						{
							greaterThan:        1200,
							height:             260,
							backgroundPosition: 'right 90%',
							backgroundSize:     'contain',
						},
					],
					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/teaser-all-welcome-bg.jpg',
					htmlText:      `
		<div class="teaser__container-content">
			<div class="row">
				<div class="col-xs-12">
					<VXHeadline>
						EXKLUSIV AUF VISIT-X!
					</VXHeadline>
					<VXText>
						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
					</VXText>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C;">Zum Profil</VXButton>
					</div>
				</div>
			</div>
		</div>`,
				},
				{
					id:            '123456-2222',
					typeId:        'banner',
					template:      'fixedHeight',
					fixedHeights:  [
						{
							greaterThan:        0,
							height:             500,
							backgroundPosition: 'initial',
							backgroundSize:     'contain',
						},
						{
							greaterThan:        1200,
							height:             260,
							backgroundPosition: 'right 90%',
							backgroundSize:     '71%',
						},
					],
					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/teaser_nologin_02_02.jpg?v=2017-04-27',
					htmlText:      `
		<div class="teaser__container-content">
			<div class="row">
				<div class="col-xs-12">
					<VXHeadline>
						EXKLUSIV AUF VISIT-X!
					</VXHeadline>
					<VXText>
						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
					</VXText>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem; background-color: #43B31C; border-color: #43B31C;">Zum Profil</VXButton>
					</div>
				</div>
			</div>
		</div>`,
				},
				{
					id:            '123456-3333',
					typeId:        'banner',
					template:      'fixedHeight',
					fixedHeights:  [
						{
							greaterThan:        0,
							height:             500,
							backgroundPosition: 'top right',
							backgroundSize:     'cover',
						},
						{
							greaterThan: 1200,
							height:      260,
						},
					],
					backgroundUrl: 'https://www.visit-x.net/assets/img/teaser/sexyvany/teaser-sexyvany.jpg',
					htmlText:      `
		<div class="teaser__container-content">
			<div class="row">
				<div class="col-xs-12">
					<VXCaption>
						<span style="color: #FF4D3C;">SexyVany</span> - Deutschlands jüngstes Camgirl
					</VXCaption>
					<VXHeadline>
						EXKLUSIV AUF VISIT-X!
					</VXHeadline>
					<VXText>
						Schau Dir hier unzensierte Bilder und Videos von der süßen 18 jährigen<br>
						an oder besuche sie bis zu 17 Stunden am Tag im Livechat.
					</VXText>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12">
					<div class="teaser__sexyvany-buttoncontainer" style="margin-top: 2em;">
						<VXButton style="padding: 0.7em 5em 0.65em; font-size: 1.7rem;">Zum Profil</VXButton>
					</div>
				</div>
			</div>
		</div>`,
				},
			],
		};
	}

	getBannerByConfig(config) {
		let bannerDOM;
		// get banner from cache
		if (typeof this.banners[config.id] !== 'undefined') {
			bannerDOM = this.banners[config.id];
		}
		// render banner
		else {
			this.banners[config.id] = bannerDOM = BannerBuilder(config);
		}

		return bannerDOM;
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.visibleIndex !== this.state.visibleIndex) {
			return false;
		} else {
			return true;
		}
	}

	setVisible(i) {
		if (this.itemRefs && typeof this.itemRefs[i] !== 'undefined') {
			const oldIndex = this.state.visibleIndex;

			this.setState({visibleIndex: i}, () => {
				if (oldIndex !== i) {
					const el = ReactDOM.findDOMNode(this.itemRefs[oldIndex]);
					el.classList.remove('is-active');

					const point = ReactDOM.findDOMNode(this.pointRefs[oldIndex]);
					point.classList.remove('is-active');
				}

				const el = ReactDOM.findDOMNode(this.itemRefs[i]);
				el.classList.add('is-active');

				const point = ReactDOM.findDOMNode(this.pointRefs[i]);
				point.classList.add('is-active');
			});
		}
	}

	startInterval() {
		if (this.timerInterval) {
			window.clearInterval(this.timerInterval);
		}

		this.timerInterval = window.setInterval(() => {
			const cnt = this.state.config.length;

			if (cnt > 0 && !this.state.mouseOver) {
				this.setVisible((this.state.visibleIndex + 1) % cnt);
			}
		}, 10000);
	}

	render() {
		console.log('render');
		const config = this.state.config;

		let bannerDOM, pointsDOM = [];
		let fixedHeights;

		if (config && config.length > 0) {
			const TeaserPointElement = styled.div`
			    border: 1px solid #F1F1F1;
			    border-radius: 100%;
			    cursor: pointer;
			    display: block;
			    height: 8px;
			    opacity: 1;
			    width: 8px;
			    z-index: 9999;
			    margin-bottom: 10px;
			`;

			bannerDOM = config.map((config, i) => {
				const setVisible = () => {
					this.startInterval();
					this.setVisible(i);
				};

				pointsDOM.push(<TeaserPointElement className={'teaser-point' + (i === 0 ? ' is-active' : '')}
				                                   onClick={setVisible}
				                                   key={i}
				                                   ref={(ref) => {
					                                   this.pointRefs.push(ref)
				                                   }} />);

				if (!fixedHeights) {
					fixedHeights = config.fixedHeights;
				}

				const ListItemElement = styled.div`
					position: absolute;
					left: 0;	
					top: 0;
					width: 100%;
				`;

				return <ListItemElement key={i} className={'teaser-item' + (i === 0 ? ' is-active' : '')} ref={(ref) => {
					this.itemRefs.push(ref)
				}}>{this.getBannerByConfig(config)}</ListItemElement>;
			});
		}

		const ListElement = styled.div`
			position: relative;
			margin: 0;
			padding: 0;
			width: 1300px;
			max-width: 100%;
			height:     ${fixedHeights[1]['height']}px;

			.teaser-item {
				visibility: hidden;
				opacity: 0;
				z-index: 0;
				transition: opacity 2s;
			}

			.teaser-item.is-active {
				visibility: visible;
				opacity: 1;
				z-index: 9999;
				transition: opacity 1.2s;
			}

			@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
                height: ${fixedHeights[0]['height']}px;
            }
		`;

		let PointsElement;
		if (pointsDOM.length > 0) {
			PointsElement = styled.div`
				font-size: 2rem;
				position: absolute;
				transform: translateY(-50%);
				top: 50%;
				right: 1em;
				color: red;
				z-index: 9999;
				
				.teaser-point {
					background-color: transparent;			    
				}
	
				.teaser-point.is-active {
					background-color: #F1F1F1; 				
				}
				
				@media (max-width: ${fixedHeights[1]['greaterThan']}px) {
                    width: 100%;
	                top: auto;
					right: auto;
	                bottom: -10px;
	                text-align: center;
	                margin-bottom: 0;
	                
	                .teaser-point {
	                    display: inline-block;
	                    margin-right: 10px;
	                }
	            }
			`;
		}

		// hover actions
		const onMouseOver = () => {
			if (this.timerInterval) {
				window.clearInterval(this.timerInterval);
			}
		};
		const onMouseOut  = () => {
			this.startInterval();
		};

		return (
			<ListElement onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
				{bannerDOM}
				{PointsElement && <PointsElement>{pointsDOM}</PointsElement>}
			</ListElement>
		);
	}
}

export default BannerSuite;