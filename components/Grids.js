import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles, aboutStyles } from '../styles';

const cellSize = 30;

export const gridData = {
  grid1: [
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 0],
  ],
};