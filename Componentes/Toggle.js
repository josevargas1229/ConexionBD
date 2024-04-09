import React, { useEffect, useState } from 'react';
import { Switch, StyleSheet } from 'react-native';

function Toggle({ initialState = false, onChange }) {
  const [isChecked, setIsChecked] = useState(initialState);

  useEffect(() => {
    setIsChecked(initialState);
  }, [initialState]);

  const handleToggle = (value) => {
    setIsChecked(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Switch
      value={isChecked}
      onValueChange={(value) => handleToggle(value)}
      style={styles.switch}
      trackColor={{ false: "#ccc", true: "#2196F3" }}
      thumbColor={isChecked ? "#ffffff" : "#ffffff"}
    />
  );
}

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }] // Ajusta el tamaño del interruptor
  }
});

export default Toggle;
