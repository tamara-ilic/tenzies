export default function Die(props) {
    return (
        <div className={`dice ${props.isHeld ? `dice--held` : ``}`} onClick={props.holdDice}>
            {props.value}
        </div>
    )
}