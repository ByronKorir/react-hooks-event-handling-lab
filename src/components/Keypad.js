// Code Keypad Component Here
function handleChange(e){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <h2>hello</h2>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;