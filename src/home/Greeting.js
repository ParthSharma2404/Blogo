
import welcome from '../photos/welcome.jpg';
function Greeting(){
    return(
        <>
            <img src={welcome} className='w-[350px] m-10 dark:shadow-sm dark:shadow-white rounded-xl md:m-20 md:w-[450px] lg:w-[650px]'/>
        </>
    );
}

export default Greeting;
