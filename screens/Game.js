import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { pieces } from "../components/figures";

export default function Game() {
  const [piece, setPiece] = useState(pieces.piece2);
  const pan = useRef(new Animated.ValueXY()).current;

  const rotatePiece = (currentPiece) => {
    const newPiece = currentPiece.map((row, rowIndex) =>
      currentPiece.map((col) => col[rowIndex])
    ).reverse();
    setPiece(newPiece);
  };
  const renderPiece = (currentPiece) => {
    return currentPiece.map((row, rowIndex) => (
      <View key={rowIndex} style={{ flexDirection: 'row' }}>
        {row.map((cell, colIndex) => (
          <View
            key={colIndex}
            style={{
              width: 30,
              height: 30,
              backgroundColor: cell ? 'red' : 'transparent',
            }}
          />
        ))}
      </View>
    ));
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      rotatePiece(piece); // Stück drehen, wenn berührt
      pan.setOffset({ x: pan.x._value, y: pan.y._value });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      pan.flattenOffset();
      const snapToValue = {
        x: Math.round(pan.x._value / 30) * 30,
        y: Math.round(pan.y._value / 30) * 30,
      };
  
      Animated.spring(pan, {
        toValue: snapToValue,
        useNativeDriver: false,
      }).start();
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {[...Array(10).keys()].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {[...Array(10).keys()].map((_, colIndex) => (
              <View key={colIndex} style={styles.cell} />
            ))}
          </View>
        ))}
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.pieceContainer]}
        >
          {renderPiece(piece)}
        </Animated.View>
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
  square: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});