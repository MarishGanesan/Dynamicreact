export default function Events()
{
    const Cfunc=()=>{
        return( document.write("I Clicked"));
    
    
    }
    return(<div><button onClick={Cfunc}> Clicking</button></div>);
}