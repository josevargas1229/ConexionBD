import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Tank({ initialWaterLevel }) {
  const [waterLevel, setWaterLevel] = useState(initialWaterLevel);

  useEffect(() => {
    setWaterLevel(initialWaterLevel);
  }, [initialWaterLevel]);

  return (
    <View style={styles.tank}>
      <View style={[styles.water, { height: waterLevel + '%' }]} />
      <Text style={styles.percentage}>{waterLevel}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tank: {
    width: 150,
    height: 150,
    minHeight: 100,
    minWidth: 100,
    backgroundColor: '#a7a4a4',
    borderRadius: 75,
    position: 'relative',
    overflow: 'hidden',
  },
  water: {
    width: '100%',
    height: 0,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  percentage: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    fontSize: 34,
    transform: [{ translateX: -20 }, { translateY: 20 }],
  },
});

export default Tank;
