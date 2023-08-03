import React, { useState, useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles, aboutStyles } from '../styles';

const cellSize=30

export const DraggablePiece = ({ piece }) => {
  const [angle, setAngle] = useState(0);
  const pan = useState(new Animated.ValueXY())[0];

  const rotate = () => {
    setAngle((prevAngle) => (prevAngle + 90) % 360);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gestureState) => {
      const snapX = Math.round(gestureState.dx / cellSize) * cellSize;
      const snapY = Math.round(gestureState.dy / cellSize) * cellSize;

      Animated.spring(pan, {
        toValue: { x: snapX, y: snapY },
        useNativeDriver: false,
      }).start();

      pan.flattenOffset();
    },
    onPanResponderTerminate: (e, gestureState) => {
      pan.flattenOffset();
    },
    onPanResponderTerminationRequest: (e, gestureState) => true,
  });

  return (
    <Animated.View
    {...panResponder.panHandlers}
    style={{
      transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: `${angle}deg` }],
      width: cellSize,
      height: cellSize
    }}
  >
      <TouchableOpacity onPress={rotate}>
        <PuzzlePiece piece={piece} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export const PuzzlePiece = ({ piece }) => {
  const scaledCellSize = cellSize /* / Math.max(piece.length, ...piece.map(row => row.length)); */
  
  return (
    <View style={styles.piece}>
      {piece.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={[styles.cell, cell && styles.filledCell]} />
          ))}
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  piece: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: cellSize,
    height: cellSize,
    borderWidth: 0.5,
    borderColor: 'transparent',
  },
  filledCell: {
    backgroundColor: 'red',
  },
});

export const pieces = {
  piece1: [
    [1],
    [1],
    [1],
    [1, 1]
  ],
  piece2: [
    [1],
    [1],
    [1, 1]
  ],
  piece3: [
    [1, 1],
    [1, 1]
  ],
  piece4: [
    [1],
    [1, 1],
    [1]
  ],
  piece5: [
    [1],
    [1, 1],
    [1, 1]
  ],
  piece6: [
    [1],
    [1, 1],
    [1, 1],
    [1]
  ],
  piece7: [
    [1],
    [1],
    [1, 1],
    [1]
  ],
  piece8: [
    [1],
    [1],
    [1]
  ],
  piece9: [
    [1],
    [1]
  ],
  piece10: [
    [1, 1],
    [0, 1],
    [0, 1, 1]
  ],
  piece11: [
    [0, 1],
    [1, 1],
    [1],
    [1]
  ],
  piece12: [
    [0, 1],
    [0, 1, 1],
    [1, 1]
  ],
  piece13: [
    [1, 1],
    [1]
  ],
  piece14: [
    [1],
    [1],
    [1],
    [1]
  ],
  piece15: [
    [0, 1],
    [0, 1],
    [1, 1, 1]
  ],
  piece16: [
    [1, 1],
    [0, 1, 1]
  ],
  piece17: [
    [1, 1, 1],
    [1, 0, 1]
  ],
  piece18: [
    [0, 1],
    [1, 1, 1],
    [1, 0, 1, 1]
  ]
};
