// import React, { useState } from 'react'

// export default function Header() {
//     const [isLogin, setIsLogin] = useState<boolean>(false);

//     const _logout = () => {
//         setIsLogin(false)
//     }
    
//     const _login = () => {
//         setIsLogin(true)
//     }

//     return (
//         <div>
//             {isLogin ? <p>You have logined in!</p> : <p>welcome, guest!</p>}
//             {isLogin ? <button onClick={_logout}>退出</button> : <button onClick={_login}>登录</button>}
//         </div>
//     )
// }


import React, { useState } from 'react'

export default function Header() {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    const _logout = () => {
        setIsLogin(false);
        setText('welcome, guest!');
    }
    
    const _login = () => {
        setIsLogin(true);
        setText('You have logined in!');
    }

    return (
        <div>
            <p>{ text }</p>
            {isLogin ? <button onClick={_logout}>退出</button> : <button onClick={_login}>登录</button>}
        </div>
    )
}
