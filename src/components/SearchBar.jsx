import { useState } from "react";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        alert(`Searching for: ${searchTerm}`);
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-group">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Search
                </button>

            </div>

        </form>
    );
}

export default SearchBar;