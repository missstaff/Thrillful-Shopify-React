import React, { useEffect, useState } from 'react';

const Banner = ({ image, text }) => {

    const [fetched, setFetched] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/img`)
            .then(res => res.json())
            .then(data => {
                console.log('K', data)
                setFetched({ image: data.items[data.items.length - 1].img, text: data.items[data.items.length - 1].text })
            }).catch((err) => console.log(err))

    }, [])
    return (
        <div style={{
            width: '100%',
            height: "20%",
            backgroundImage: `url(${fetched.image})`
        }}>
            <h2 style={{ color: "#fff", textAlign: "center" }}>{fetched.text}</h2>
        </div>
    )
}

export default Banner;