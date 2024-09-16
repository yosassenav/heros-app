import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";
import { useEffect, useState } from "react";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // Parse the query string from the URL
    const searchParams = new URLSearchParams(location.search);

    const q = searchParams.get('q') || '';

    // Use state to keep track of the query
    const [query, setQuery] = useState(q);

    const [heroes, setHeroes] = useState( [] );

    // Update heroes list whenever the query changes
    useEffect(()=>{
        setHeroes( getHeroesByName(query) );

    },[query])
    

    // Update query state when location changes
    useEffect(()=>{
        setQuery(q);
    },[location.search]);


    const {searchText, onInputChange} = useForm({
        searchText: query,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if(searchText.trim().length <= 1) return;

        // Set the query parameter using URLSearchParams
        navigate(`?q=${ searchText.trim() }`);

    }

    return (
    <>
        <h1>Search</h1>
        <hr/>

        <div className="row">
            <div className="col-5">
                <form onSubmit={ onSearchSubmit }>
                    <input type="text"
                    className="form-control"
                    placeholder="Search a hero"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                    />
                </form>
                <button
                className="btn btn-outline-primary mt-2"
                >
                    Search
                </button>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>

                {query.trim().length === 0 && (
                    <div className="alert alert-primary">
                        Search a hero
                    </div>
                )}
                {query.trim().length > 0 && heroes.length === 0 && (
                    <div className="alert alert-danger">
                        No hero with <b>{query}</b>
                    </div>
                )}
                {heroes.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                ))}

            </div>
        </div>
        
        
    </>
)
}