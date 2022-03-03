
import React from 'react';
import Square from './components/Square/Square';

const map = [
  ["compass", "desert", ["letter", "g"], "desert", "grass", "grass2"],
  [["letter", "r"], ["image", "tree"], "sea", "sea", "desert", "desert2"],
  ["desert2", "desert", "grass2", ["letter", "y"], "desert2", ["image", "boat"]],
  ["sea", "grass", ["image", "mountain"], "grass2", "grass", "sea"],
  [["image", "castle"], "desert", "sea", "desert", ["letter", "p"], "desert2"],
  ["sea", ["image", "city"], "sea", ["letter", "b"], "sea", "sea"]
];

const Map = () => {
  return (
    <table>
      {map.map(row => {
        return row.map(cell => <Square classes={cell} />)
      })}
    </table>
  );
};

export default Map;
