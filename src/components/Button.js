import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0deg);
}
100%{
    transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button.attrs((props) => ({
    outlined: true,
}))`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        animation: ${rotateAnimation} 2s infinite linear;
    }
    align-self: ${({ align }) => align || 'stratch'};

    ${(props) =>
        props.outlined &&
        css`
            color: ${(props) => props.color || '#fff'};
            border: 1px solid ${props.color || '#fff'};
            background: transparent;
        `}
`;

const LargeButton = styled(StyledButton)`
    font-size: '32px';
`;

const Button = (props) => {
    return <LargeButton {...props} />;
};

export default Button;
