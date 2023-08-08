import React from 'react';
import { View } from 'react-native';
import { globalStyles, overviewStyles } from "../styles"
import { Pieces } from "../components/Pieces";

export default function Overview() {
  const pieceKeys = Object.keys(Pieces);
  const piecesInRows = splitIntoRows(pieceKeys, 5);

  return (
    <View style={[globalStyles.container, overviewStyles.container]}>
      {piecesInRows.map((row, rowIndex) => (
        <View key={rowIndex} style={overviewStyles.row}>
          {row.map((key) => (
            <View key={key} style={overviewStyles.piece}>
              {renderPiece(Pieces[key])}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const splitIntoRows = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const renderPiece = (currentPiece) => {
  return currentPiece.map((row, rowIndex) => (
    <View key={rowIndex} style={{ flexDirection: 'row' }}>
      {row.map((cell, colIndex) => (
        <View
          key={colIndex}
          style={{
            width: 25,
            height: 25,
            backgroundColor: cell ? 'red' : 'transparent',
          }}
        />
      ))}
    </View>
  ));
};
