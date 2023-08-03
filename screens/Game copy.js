import React from 'react';
import { View, StyleSheet } from 'react-native';

const gridSize = 20;

export default function Game() {
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
  }

  return (
    <View style={styles.container}>
      {renderGrid()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 15,
    height: 15,
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
