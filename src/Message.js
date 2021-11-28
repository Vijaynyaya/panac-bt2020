export default function Message({ count, color }) {
    return <div> 
        <p className={color}>{count + 1} bottles of beer on the wall. Take one down pass it around. {count} bottles of beer on the wall. </p>
    </div>
}