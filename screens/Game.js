import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DraggablePiece } from "../components/figures";
import { pieces } from "../components/figures";

const gridSize = 15;
const cellSize = 30;

const Game = () => {
  const renderGrid = () => {
    let rows = [];
    for (let i = 0; i < gridSize; i++) {
      let cols = [];
      for (let j = 0; j < gridSize; j++) {
        cols.push(
          <View key={j} style={styles.cell} />
        );
      }
      rows.push(
        <View key={i} style={styles.row}>{cols}</View>
      );
    }
    return rows;
  };

  const pieceKeys = Object.keys(pieces);

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {renderGrid()}
      </View>
      <View style={styles.puzzleContainer}>
  {Array.from({ length: Math.ceil(pieceKeys.length / 3) }, (_, rowIndex) => (
    <View key={rowIndex} style={styles.puzzleRow}>
      {pieceKeys.slice(rowIndex * 3, rowIndex * 3 + 3).map((key, colIndex) => (
        <View key={colIndex} style={styles.pieceCell}>
        <DraggablePiece piece={pieces[key]} />
        </View>
      ))}
    </View>
  ))}
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  gridContainer: {
    flex: 3,
    padding: 10,
  },
  puzzleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
  },
  puzzleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cell: {
    width: cellSize,
    height: cellSize,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  pieceCell: {
    width: cellSize,
    height: cellSize,
    borderWidth: 0.5,
    borderColor: 'transparent',
    margin: 10,
  },
});


export default Game;