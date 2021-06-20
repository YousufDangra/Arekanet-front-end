import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Know About Arekanet',
  };
    const sectionHeader1 = {
    paragraph: "AREKANET is a community-based cryptocurrency financial services network.As traditional finance has lost its vitality, the emerging and fast-growing blockchain industry has brought rapid development and high returns to the sector and its customers "
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}/>
          <SectionHeader data={sectionHeader1} className="center-content feature-content-para"   />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/name.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}
                  >
                    Token Name
                    </h4>
                  <p className="m-0 text-sm">
                  Name is the identity for a Token &
               <span className="text-color-primary"> Arekanet </span> is the best name to define our project.

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/17b.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}>
                    Token Supply
                    </h4>
                  <p className="m-0 text-sm">
                    Supply matters for Token Value. <span className="text-color-primary"> Arekanet</span> 17 Billions supply make it remarkeble in Token Market!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/symbol.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}>
                    Token Symbol
                    </h4>
                  <p className="m-0 text-sm">
                   Symbol is the identity of anything , &  <span className="text-color-primary"> Arekanet</span> Symbol <span className="text-color-primary">AKA</span>  is the best to standout.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/erc20.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}>
                    Token Type
                    </h4>
                  <p className="m-0 text-sm">
                  <span className="text-color-primary"> Arekanet</span> token type is ERC20 & ERC20 is an official protocol for proposing improvements to the Ethereum (ETH) network
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/decimals.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}>
                    Decimals
                    </h4>
                  <p className="m-0 text-sm">
                  Decimals are the pillars of any ERC20 coins &<span className="text-color-primary"> Arekanet</span> have 18 decimals
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/unique.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8"  style={{fontFamily: "'Noto Sans JP', sans-serif",fontWeight:"1000"}}>
                    Why we are Unique?
                    </h4>
                  <p className="m-0 text-sm">
                  No annual, transaction & other account fees. Fee free, for real.                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;