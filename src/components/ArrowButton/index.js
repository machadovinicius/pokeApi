import React from 'react';

import { Button } from './styles';

export default function ArrowButton(props) {
    const { func, label } = props;
    return (
        <Button onClick={func}>{label}</Button>
    );
}
