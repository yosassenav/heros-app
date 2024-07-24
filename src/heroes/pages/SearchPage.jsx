import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"

export const SearchPage = () => {

    const navigate = useNavigate();

    const {searchText, onInputChange} = useForm({
        searchText: '',
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        if(searchText.trim().length <= 1) return;
        navigate(`?q=${ searchText }`);


        console.log({searchText})
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
                <button className="btn btn-outline-primary mt-2">
                    Search
                </button>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>

                <div className="alert alert-primary">
                    Search a hero
                </div>
                <div className="alert alert-danger">
                    Hero not found!
                </div>

                <HeroCard/>

            </div>
        </div>
        
        
    </>
)
}