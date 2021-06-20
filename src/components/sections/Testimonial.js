import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Token Distribution Ratio',
  };

  const sectionHeader1 = {
    paragraph: 'Particpation Incentive 51% Arekanet allocates 51% of the total supply of AKA tokens to incentivize its users to participate in public sales actively, inviting friends to join Arekanet, investment, savings, lending, & contribute high-quality content'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{fontFamily: "'Noto Sans JP', sans-serif"}}/>
          <SectionHeader data={sectionHeader1} className="center-content feature-content-para" />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                   20% of the total AKA will be allocatetd to Arekanet early supporters through Public Sale & released on the day before AKA's first exchange listing
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Public Sale</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a > 20%</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Arekanet allocated 15% of AKA tokens to reward it's team members. it will be unlocked at the same time as the participation incentives
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Team </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a > 15%</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    4% was allocated to reward advisors & early investors. Maintenance of the Arekanet platform ecosystem & operators will account for 10% of AKA Tokens, also both will be unlocked witt participants incentives.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Advisors & Early Investors</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a >4%</a>
                  </span>
                  <span className="testimonial-item-name text-color-high"> Operations</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a >10%</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;