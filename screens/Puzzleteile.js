import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PuzzlePiece } from "../components/figures";
import { pieces } from "../components/figures";

export default function Puzzleteile() {
  const pieceKeys = Object.keys(pieces);
  return (
    <View style={styles.container}>
      {Array.from({ length: Math.ceil(pieceKeys.length / 3) }, (_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {pieceKeys.slice(rowIndex * 3, rowIndex * 3 + 3).map((key, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <PuzzlePiece piece={pieces[key]} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
  },
});
