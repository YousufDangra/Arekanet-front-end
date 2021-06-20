import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/cdn-clients-other-use.appspot.com/o/images%2Fei_1619280329211-removebg-preview.png?alt=media&token=8a2a37ba-9be5-443f-9360-2c9eab939464"
            alt="Open"
            width={70}
            height={32} 
            style={{marginTop: "10px"}}/>
      </h1>
    </div>
  );
}

export default Logo;