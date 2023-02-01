import styles from "./coin.module.css"

export function CoinPaint({ name, image, symbol, price, marketCap, priceChange }) {
    return (
        <div className={styles.container}>
            <img src={image} alt={name} className={styles.image} />
            <span className={styles.name} >{name}</span>
            <span className={styles.symbol} >{symbol}</span>
            <span className={styles.currentPrice} >$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >

                {priceChange} %</span>
            <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>

        </div>
    )
}