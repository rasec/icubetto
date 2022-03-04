import React from 'react';
import theme from './square.scss';

const Square = ({ classes }: { key: string, classes: string | string[] }) => {
  let className = theme.square;
  if (typeof classes !== 'string') {
    classes.forEach(classNameItem => {
      className = `${className} ${theme[classNameItem]}`;
    });
  } else {
    className = `${className} ${theme[classes]}`;
  }
  return <td className={className} />
}

export default Square;
