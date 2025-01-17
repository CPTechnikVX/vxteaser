import React                           from 'react';
import BannerSuite                     from '../src/components/BannerSuite';
import TileSuite                       from '../src/components/TileSuite';
import Constants                       from '../src/utils/Constants';
import {desktopConfigs, mobileConfigs} from './configs';

function DesktopWrapper({children}) {
    const style = {
        width:    '1300px',
        maxWidth: '100%',
    };

    return <div style={style}>{children}</div>;
}

function MobileWrapper({children}) {
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

    return (
            <div style={styleBody}>
                <div style={styleOuter}>
                    <div style={styleInner}>{children}</div>
                </div>
            </div>
    );
}

const onHook = (hookType) => {
    const {type} = hookType;

    switch (type) {
        case Constants.HookType.RenderBottomRight:
            return <div style={{padding: '10px', backgroundColor: 'yellow', margin: '10px'}}>Bottom right</div>;
        default:
            return null;
    }
};

export default {
    title:     'BannerSuite',
    component: BannerSuite,
};

export const Banner = () => {
    const config = {};

    return (
            <DesktopWrapper>
                <BannerSuite
                        configs={desktopConfigs}
                        className={config.bannerSuiteClassName || ''}
                        arrows={true}
                        dots={true}
                />
            </DesktopWrapper>
    );
};

export const BannerStandalone = () => {
    const config = {};

    return (
            <DesktopWrapper>
                <BannerSuite
                        configs={desktopConfigs.slice(0, 1)}
                        className={config.bannerSuiteClassName || ''}
                        arrows={true}
                        dots={true}
                />
            </DesktopWrapper>
    );
};

export const BannerStandaloneWithAddon = () => {
    const config = {};

    return (
            <DesktopWrapper>
                <BannerSuite
                        configs={desktopConfigs.slice(0, 1)}
                        className={config.bannerSuiteClassName || ''}
                        arrows={true}
                        dots={true}
                        onHook={onHook}
                />
            </DesktopWrapper>
    );
};

export const Tile = () => {
    return (
            <MobileWrapper>
                <TileSuite configs={mobileConfigs.slice(1, 2)} />
            </MobileWrapper>
    );
};

export const TileStandalone = () => {
    const customSuiteFn = (elements) => <MobileWrapper>{elements}</MobileWrapper>;

    return (
            <div>
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(3, 4)} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(0, 1)} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(1, 2)} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(2, 3)} />
            </div>
    );
};

export const TileStandaloneWithAddon = () => {
    const customSuiteFn = (elements) => <MobileWrapper>{elements}</MobileWrapper>;

    return (
            <div>
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(3, 4)} onHook={onHook} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(0, 1)} onHook={onHook} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(1, 2)} onHook={onHook} />
                <TileSuite customSuiteFn={customSuiteFn} configs={mobileConfigs.slice(2, 3)} onHook={onHook} />
            </div>
    );
};
