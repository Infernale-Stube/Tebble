import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { pieces } from "../components/figures";
import { gridData } from "../components/Grids";


export default function Game() {
  const [piece, setPiece] = useState(pieces.piece2); //change the piece to be used here, goal is to spawn in multiple pieces at once, logic for that is still missing
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
              backgroundColor: cell ? 'red' : 'transparent', //define color of pieces
            }}
          />
        ))}
      </View>
    ));
  };

  const [lastTap, setLastTap] = useState(null); //to recognize doubletaps

//responding on touch for dragging and rotating
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (e, gestureState) => {
      const now = Date.now();
      if (lastTap && (now - lastTap) < 200) {
        rotatePiece(piece);
      }
      setLastTap(now);
  
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
  const renderGrid = () => {
    return gridData.grid1.map((row, rowIndex) => ( //change grid1
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
    ));
  };
  

  //dynamic calculation of gridsize
  const gridWidth = 30 * gridData.grid1[0].length; //change grid1
  const gridHeight = 30 * gridData.grid1.length; //change grid1

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { width: gridWidth, height: gridHeight }]}>
        {renderGrid()}
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
});
