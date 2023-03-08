import { useEffect } from "react";
function Filter({ setActiveGenre, activeGenre, setFilter, popular }) {
    useEffect(() => {
        if (activeGenre === 0) {
            setFilter(popular);
            return;
        }
        const filtered = popular.filter((movie) => {
            return movie.genre_ids.includes(activeGenre);
        });
        setFilter(filtered);
    },[activeGenre])
    return (
        <div className="container">
            <button className={activeGenre===0?"active":""} onClick={() =>setActiveGenre(0)}>All</button>
            <button className={activeGenre===35?"active":""} onClick={() =>setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre===28?"active":""} onClick={() =>setActiveGenre(28)}>Action</button>

        </div>
    )
}

export default Filter;