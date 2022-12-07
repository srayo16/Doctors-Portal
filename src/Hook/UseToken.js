import React, { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://doctor-portal-server-nekx.onrender.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const accessToken = data.token;
                    // console.log(accessToken);
                    localStorage.setItem('AccessToken', accessToken);
                    setToken(accessToken);
                })
        }


    }, [user])
    return [token];
};

export default UseToken;