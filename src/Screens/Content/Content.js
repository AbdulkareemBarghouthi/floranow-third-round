import React, { useEffect, useState } from 'react';
import './contentStyle.css';
import { getDummyUsers } from '../../helpers/api/index';
import Card from '../../Components/Card/Card';

const Content = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const [choosenPosts, setChoosenPosts] = useState([]);

    const handlePosts = () => {
        getDummyUsers()
            .then(res => {

                // i iterated the index by 50 because i didn't like the first
                // pictures in picsum :p
                let tempPosts = res.data.map((item, index) => {
                    return {
                        ...item,
                        image: `https://picsum.photos/id/${index + 500}/500/300`,
                        offer: parseInt(index) % 2 === 0 ? true: false
                    }
                });
                setAllPosts(tempPosts);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        handlePosts();
    }, [])
    return (
        <div className="content">
            {allPosts.map(item => {
                return (
                    <Card {...item} />
                )
            })}
        </div>
    )
}

export default Content;