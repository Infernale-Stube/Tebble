import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet, Animated } from 'react-native';
import { Pieces } from "../components/Pieces";
import { Grids } from "../components/Grids";

export default function Game() {
  const pieceNames = ['piece1', 'piece2', 'piece4']; // define the pieces to be spawned
  const [currentGrid, setCurrentGrid] = useState('grid2'); // define the grid to be displayed
  const [activePieces, setActivePieces] = useState(pieceNames.map(name => ({
    piece: Pieces[name],
    pan: useRef(new Animated.ValueXY()).current,
    lastTap: null,
  })));

  const rotatePiece = (index) => {
    setActivePieces(Pieces => Pieces.map((p, i) => {
      if (i !== index) return p;
      return {
        ...p,
        piece: p.piece.map((row, rowIndex) => p.piece.map((col) => col[rowIndex])).reverse()
      };
    }));
  };

  const renderPiece = (currentPiece) => (
    currentPiece.map((row, rowIndex) => (
      <View key={rowIndex} style={{ flexDirection: 'row' }}>
        {row.map((cell, colIndex) => (
          <View
            key={colIndex}
            style={{
              width: 30,
              height: 30,
              backgroundColor: cell ? 'red' : 'transparent', // define color of pieces
            }}
          />
        ))}
      </View>
    ))
  );

  const renderGrid = () => (
    Grids[currentGrid].map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((cell, colIndex) => (
          <View
            key={colIndex}
            style={[
              styles.cell,
              {
                backgroundColor: cell ? 'transparent' : 'transparent',
                opacity: cell ? 1 : 0,
              },
            ]}
          />
        ))}
      </View>
    ))
  );

  // dynamic calculation of gridsize
  const gridWidth = 30 * Grids[currentGrid][0].length;
  const gridHeight = 30 * Grids[currentGrid].length;

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { width: gridWidth, height: gridHeight }]}>
        {renderGrid()}
        {activePieces.map((p, index) => {
          const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
              const now = Date.now();
              if (p.lastTap && (now - p.lastTap) < 200) {
                rotatePiece(index);
              }
              p.pan.setOffset({ x: p.pan.x._value, y: p.pan.y._value });
              p.pan.setValue({ x: 0, y: 0 });
              p.lastTap = now;
            },
            onPanResponderMove: Animated.event([null, { dx: p.pan.x, dy: p.pan.y }], {
              useNativeDriver: false,
            }),
            onPanResponderRelease: () => {
              p.pan.flattenOffset();
              const snapToValue = {
                x: Math.round(p.pan.x._value / 30) * 30,
                y: Math.round(p.pan.y._value / 30) * 30,
              };
              Animated.spring(p.pan, {
                toValue: snapToValue,
                useNativeDriver: false,
              }).start();
            },
          });
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={[p.pan.getLayout(), styles.pieceContainer]}
            >
              {renderPiece(p.piece)}
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pieceContainer: {
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: 300,
    height: 300,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});