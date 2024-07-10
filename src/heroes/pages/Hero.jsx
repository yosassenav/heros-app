import { useParams } from "react-router-dom"

export const Hero = () => {

    const {id} = useParams();
    console.log("url params:",id);

    return <h1>Hero</h1>
}