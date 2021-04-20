import React, { useEffect, useState } from 'react';
import Circle from 'react-circle';

const Loading = props => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(100);
    }, [setProgress]);

    return (
        <Circle
            progress={progress}
            animate={true}
            animationDuration="2s"
            responsive={true}
            size="100"
            lineWidth="25"
            progressColor="#53D7FF"
            bgColor="#FAFBFC"
            showPercentage={false}
        />
    );
};

export default Loading;