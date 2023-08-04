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

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {renderGrid()}
      </View>
      {Object.keys(pieces).map((key, index) => (
        <View key={index} style={styles.pieceCell}>
          <DraggablePiece piece={pieces[key]} initialX={(index % 3) * cellSize} initialY={Math.floor(index / 3) * cellSize} />
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
  gridContainer: {
    flex: 3,
    padding: 10,
  },
  piecesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
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
    borderColor: 'blue', //change to transparent again after debugging
    margin: 10,
  },
});

export default Game;