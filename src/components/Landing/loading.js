import ReactLoading from 'react-loading';
import { Container } from './index.styled';

export function Loading() {
    return (

        <Container >
            <ReactLoading type={"spin"} color={"#212529"} height={'5%'} width={'5%'} />
        </Container>
    )
}