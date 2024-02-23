// import { count } from 'console'
// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const [message, setMessage] = useState('data')
//     useEffect(() => {
//         const timer = setInterval(() => {
//             console.log(message)
//         }, 20000)
//         return () =>
//             clearInterval(timer)
//     }, [message])

//     return (
//         <div className='gap-5'>
//             <span className='mr-5'>
//                 {/* {count} */}
//             </span>
//             {/* <button onClick={() => { setCount(count + 1) }} className='bg-red w-[100px] rounded-full'>Data</button> */}
//             <input
//                 type='text'
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}

//             />
//         </div>
//     )
// }

// export default Counter
import React from 'react'

const Count = () => {
    return (
        <div>Count</div>
    )
}

export default Count