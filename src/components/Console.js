import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: #000;
    font-size: 24px;
    border: none;
    resize: none;
    /* color: ${({ color }) => color || '#fff'}; */
    color: ${(props) => props.color || props.theme.colors.secondary};
    &:focus {
        outline: none;
    }
    @media ${(props) => props.theme.media.phone} {
        border: 1px solid #f00;
    }
    @media ${(props) => props.theme.media.tablet} {
        border: 1px solid #fff;
    } ;
`;

const Console = ({ color, ...props }) => {
    const [lines, setLines] = useState(['C:/user/admin/']);

    const onKeyPress = (e) => {
        if (e.charCode == 13) {
            setLines([...lines, 'C:/user/admin/']);
        }
    };

    return (
        <Flex>
            <Flex direction='column'>
                {lines.map((line) => (
                    <Line color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole
                onKeyPress={onKeyPress}
                color={color}
                {...props}
            />
        </Flex>
    );
};

export default Console;
