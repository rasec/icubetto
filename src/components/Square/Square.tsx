import React from 'React';
import theme from './square.scss';

const Square = ({ classes }: { classes: string | string[] }) => {
  let className = theme.square;
  if (typeof classes !== 'string') {
    classes.forEach(classNameItem => {
      className = `${className} ${theme[classNameItem]}`;
    });
  } else {
    className = `${theme[classes]}`;
  }
  return <div className={className} />
}

export default Square;
