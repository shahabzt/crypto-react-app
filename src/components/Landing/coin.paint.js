//Styles
import { Container, Image, Name , Symbol, CurrentPrice 
, GreenPrice , RedPrice , Span
} from "./index.styled"

export function CoinPaint({ name, image, symbol, price, marketCap, priceChange }) {
    return (
        <Container >
            <Image src={image} alt={name}  />
            <Name  >{name}</Name>
            <Symbol  >{symbol}</Symbol>
            <CurrentPrice  >$ {price.toLocaleString()}</CurrentPrice>

            {priceChange > 0 ? (<GreenPrice> {priceChange.toFixed(2)} % </GreenPrice>) : (<RedPrice> {priceChange} %</RedPrice>)}
             
            <Span >$ {marketCap.toLocaleString()}</Span>

        </Container>
    )
}