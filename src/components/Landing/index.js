//service
import { getCoin } from "../../service/api";

//Hooks
import { useEffect, useState } from "react";

//Components
import { CoinPaint } from "./coin.paint";
import { Loading } from "./loading";

//styles
import styles from "./landing.module.css";
import { Input } from "./index.styled";



export function Landing() {
    const [search, setSearch] = useState("");
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin()
            setCoins(data)
        }
        fetchApi()

    }, [])
    
    function searchHandler(e) {
        setSearch(e.target.value)
    }
    const searchCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    const sortedCoins = searchCoins.sort((b,a)=> a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h

    )
    return (
        <>

            <Input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            {coins.length ? <div className={styles.coinContainer}>

                {sortedCoins.map((coin) => {
                    return <CoinPaint key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.market_cap_change_percentage_24h}
                    />
                })}
            </div> : <Loading/> }


        </>
    )
}