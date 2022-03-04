
import React from 'react';
import Square from './components/Square/Square';

const map = [
  ["compass", "desert", ["letter", "g"], "desert2", "grass", "grass2"],
  [["letter", "r"], ["image", "tree"], "sea", "sea", "desert2", "desert"],
  ["desert", "desert2", "grass2", ["letter", "y"], "desert", ["image", "boat"]],
  ["sea", "grass", ["image", "mountain"], "grass2", "grass", "sea"],
  [["image", "castle"], "desert2", "sea", "desert2", ["letter", "p"], "desert"],
  ["sea", ["image", "city"], "sea", ["letter", "b"], "sea", "sea"]
];

const Map = () => {
  return (
    <table>
      <tbody>
        {map.map((row, indexRow) => {
          return <tr key={`${indexRow}`}>{row.map((cell, indexCell) => <Square key={`${indexRow}-${indexCell}`} classes={cell} />)}</tr>;
        })}
      </tbody>
    </table>
  );
};

export default Map;
