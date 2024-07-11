import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const Hero = () => {

    const { id } = useParams();

    const hero = getHeroById( id )

    console.log( hero )

    return <h1>Hero</h1>
}