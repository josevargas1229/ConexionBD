import { Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Canvas, Circle, LinearGradient, vec, sub, mix, add, BackdropFilter, Fill, Blur } from '@shopify/react-native-skia';
import { useDerivedValue, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const c = vec(width / 2, (height / 2) * 1.5);
const r = c.x - 32;

const MyBlur = () => {
    const progress = useSharedValue(0);
    const radius = useSharedValue(r); // Valor compartido para el radio del círculo

    useEffect(() => {
        radius.value = withRepeat(
            withSequence(
                withTiming(r / 2, { duration: 2500 }),
                withTiming(r, { duration: 2500 })
            ),
            -1
        );

    }, [radius, r]);


    const start = useDerivedValue(() => sub(c, vec(0, mix(progress.value, r, r))), [progress]);
    const end = useDerivedValue(() => add(c, vec(0, mix(progress.value, r, r / 2))), [progress]);
    return (
        <Canvas style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Circle c={c} r={radius} >
                <LinearGradient
                    start={start}
                    end={end}
                    colors={['#FFBBC2', '#CDC5FF']}
                />
            </Circle>
            <BackdropFilter filter={<Blur blur={30} />}>
                <Fill color="rgba(255, 255, 255, 0.3)" />
            </BackdropFilter>
        </Canvas>
    );
};

export default MyBlur;
