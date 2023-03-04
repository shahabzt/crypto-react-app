//services
import { getCoin } from "../../service/api";

//Hooks
import { useEffect, useState } from "react";

//Components
import { CoinPaint } from "./coin.paint";
import { Loading } from "./loading";

//styles
import { CoinContainer, Input } from "./index.styled";
import { Flex } from "@mantine/core";
import { MenuButton } from "../Menu";


export function Landing() {
    const [search, setSearch] = useState("");
    const [coins, setCoins] = useState([]);
    //Watchers
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin()
            setCoins(data)
        }
        fetchApi()

    }, [])
    //handlers
    function searchHandler(e) {
        setSearch(e.target.value)
    }
    const searchCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    function handleOnIncrease() {
        const sortedCoins = searchCoins.sort((b, a) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h
        )
        setCoins(sortedCoins)
    }

    function handleOnDecrease(){
        const sortedCoins = searchCoins.sort((a, b) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h
        )
        setCoins(sortedCoins)
    }
    function handleOnName(){
        const sortedCoins = searchCoins.sort((a, b) => a.name > b.name ? 1 : -1)
        setCoins(sortedCoins)
    }


    return (
        <>
            {coins.length ? 
            <Flex
            direction="column"
            justify="center"
            align="center"
            >
            <Input  type="text" placeholder="Search" value={search} onChange={searchHandler} />          
            <MenuButton  title= "Sorted" onClick1 = {handleOnIncrease} 
            onClick2 = {handleOnDecrease}
            onClick3 = {handleOnName}
            />
              
            <CoinContainer >
                {searchCoins.map((coin) => {
                    return <CoinPaint key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.market_cap_change_percentage_24h}
                    />
                })}
            </CoinContainer> 
            </Flex>
            :
            <Loading />}
        </>
    )
}