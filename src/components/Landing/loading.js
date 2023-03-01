import ReactLoading from 'react-loading';
import { Container } from './index.styled';

export function Loading() {
    return (

        <Container>
            <ReactLoading type={"spin"} color={"#3498db"} height={'5%'} width={'5%'} />
        </Container>
    )
}