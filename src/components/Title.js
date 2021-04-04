import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: ${(props) => props.color};
`;

// const Title = ({ children, color }) => {
//     return <StyledTitle color={color}>{children}</StyledTitle>
// };
const Title = (props) => {
    return <StyledTitle {...props} />;
};

export default Title;
