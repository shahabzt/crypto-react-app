import spinner from '../../gif/spinner.gif'

export function Loading (){
    return (
        <div>
            <img src={spinner} alt="loading" />

            <h1>Wait a Moment...</h1>
        </div>
    )
}