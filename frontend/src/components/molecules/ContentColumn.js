import React from 'react';
import { Col } from 'react-bootstrap';
import { Text } from '../atoms/Text';

export const ContentColumn = (props) => {
    return (
        <Col md>
            <Text text={props.header} color="textMuted" />
            {props.children}
        </Col>
    );
};
