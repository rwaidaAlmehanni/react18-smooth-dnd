import React, { Component } from 'react';
import PropTypes from 'prop-types';
export interface DraggableProps {
    render?: () => React.ReactElement;
    className?: string;
    children?: React.ReactNode;
}
declare class Draggable extends Component<DraggableProps> {
    static propsTypes: {
        render: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
    };
    render(): React.JSX.Element;
}
export default Draggable;
