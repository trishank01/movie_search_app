import React from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../images/not-found.png";
import { FlexGrid } from "../Styled";
import { useShow } from "../../misc/custom-hooks";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStaeed] = useShow()
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id)

        const onstarClick =() => {
          if(isStarred){
            dispatchStaeed({type:'REMOVE' , showId:show.id})
          }else{
            dispatchStaeed({type:'ADD' , showId:show.id})
          }
        }

        return (
            <ShowCard
              key={show.id}
              id={show.id}
              image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
              summary={show.summary}
              onStarClick ={onstarClick}
              isStarred ={isStarred}
            /> 
        )
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
