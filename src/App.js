import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 2rem;
    background: #000;
    color: #fff;
`;

function App() {
    return (
        <AppWrapper>
            <Flex justify='center'>
                <Title color='#f00'>Hello!</Title>
            </Flex>
            <Flex direction='column'>
                <Console />
                <Button color='#f00' align='flex-end'>
                    Send
                </Button>
            </Flex>
        </AppWrapper>
    );
}

export default App;
