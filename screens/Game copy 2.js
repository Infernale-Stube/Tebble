import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DraggablePiece, pieces } from "../components/figures";

const gridSize = 5;
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
      <View style={styles.piecesContainer}>
        {Array.from({ length: Math.ceil(Object.keys(pieces).length / 3) }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Object.keys(pieces).slice(rowIndex * 3, rowIndex * 3 + 3).map((key, colIndex) => (
              <View key={colIndex} style={styles.pieceCell}>
                <DraggablePiece piece={pieces[key]} initialX={(colIndex % 3) * cellSize} initialY={Math.floor(rowIndex * cellSize)} />
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
  piecesContainer: {
    flexDirection: 'column', // Ändere dies in "column", um die Teile in Reihen anzuordnen
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
    flex: 1,
    alignItems: 'center',
  },
});

export default Game;
