import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pieces } from "../components/Pieces";

export default function Overview() {
  const pieceKeys = Object.keys(Pieces);
  const piecesInRows = splitIntoRows(pieceKeys, 5);

  return (
    <View style={styles.container}>
      {piecesInRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <View key={key} style={styles.piece}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  piece: {
    marginRight: 10,
  },
});
