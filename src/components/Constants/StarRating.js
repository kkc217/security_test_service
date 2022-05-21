import React from "react";
import ReactStars from 'react-stars';

const StarRating = (props) => {
    return (
        <>
            <div className="star_rating_container">
                <ReactStars
                    count={props.count}
                    value={props.value}
                    size={props.size}
                    color1={'#efefef'}
                    color2={'#393e46'}
                    edit={false}
                />
            </div>
        </>
    )
}

export default StarRating;