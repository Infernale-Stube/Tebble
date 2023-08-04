import React, { useState, useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles, aboutStyles } from '../styles';

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
