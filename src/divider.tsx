'use client';
import * as React from 'react';
import {useIsInverseVariant} from './theme-variant-context';
import * as styles from './divider.css';

const Divider = (): JSX.Element => {
    const isInverse = useIsInverseVariant();
    return <div className={styles.variants[isInverse ? 'inverse' : 'default']} />;
};

export default Divider;
