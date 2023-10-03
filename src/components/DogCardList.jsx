import React from "react";
import DogCard from "./DogCard";

const DogCardList = ({dogcards}) => {
    return (
        <div className= "dogcard-list">
            {dogcards.map( dogcard => {
                return <DogCard dogcard ={dogcard} key={dogcard.id} />
            })}
        </div>

    )

}

export default DogCardList; 