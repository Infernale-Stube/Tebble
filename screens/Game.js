import React, { useRef, useState, useEffect } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import { Grids } from '../components/Grids';
import { globalStyles, gameStyles } from '../styles';

export default function Game() {
  const [currentGrid, setCurrentGrid] = useState('grid1');

  const [activePieces, setActivePieces] = useState(
    Grids[currentGrid].pieces.map(piece => ({
      piece,
      pan: useRef(new Animated.ValueXY()).current,
      lastTap: null,
    }))
  );

  const rotatePiece = (index) => {
    setActivePieces(activePieces.map((p, i) => {
      if (i !== index) return p;
      return {
        ...p,
        piece: p.piece.map((row, rowIndex) =>
          p.piece.map((col) => col[rowIndex])
        ).reverse()
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
              backgroundColor: cell ? '#FF5733' : 'transparent',
            }}
          />
        ))}
      </View>
    ))
  );

  const renderGrid = () => (
    Grids[currentGrid].grid.map((row, rowIndex) => (
      <View key={rowIndex} style={gameStyles.row}>
        {row.map((cell, colIndex) => (
          <View
            key={colIndex}
            style={[
              gameStyles.cell,
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

  const checkIfGridIsFilled = () => {
    const activePiecesGridCells = activePieces.flatMap(p =>
      p.piece.flatMap((row, rowIndex) =>
        row.map((cell, cellIndex) => cell && ({
          x: Math.round(p.pan.x._value / 30) + cellIndex,
          y: Math.round(p.pan.y._value / 30) + rowIndex,
        }))
      ).filter(Boolean)
    );

    const isGridFilled = Grids[currentGrid].grid.every((row, rowIndex) =>
      row.every((cell, cellIndex) =>
        !cell || activePiecesGridCells.some(p => p.x === cellIndex && p.y === rowIndex)
      )
    );

    return isGridFilled;
  };

  useEffect(() => {
    if (checkIfGridIsFilled()) {
      console.log('Grid is filled');
    } else {
      console.log('Grid is not filled');
    }
  }, [activePieces]);

  const gridWidth = 30 * Grids[currentGrid].grid[0].length;
  const gridHeight = 30 * Grids[currentGrid].grid.length;

  return (
    <View style={[globalStyles.container, gameStyles.container]}>
      <View style={[gameStyles.grid, { width: gridWidth, height: gridHeight }]}>
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
              if (checkIfGridIsFilled()) {
                console.log('Grid is filled');
              } else {
                console.log('Grid is not filled');
              }
            },
          });
          return (
            <Animated.View
              key={index}
              {...panResponder.panHandlers}
              style={[p.pan.getLayout(), gameStyles.pieceContainer]}
            >
              {renderPiece(p.piece)}
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}
