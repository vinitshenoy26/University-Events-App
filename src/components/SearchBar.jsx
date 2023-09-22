import React, {useState} from 'react'
import SearchIcon from './searchicon.png'



const SearchBar = ( {placeholder, data} ) => {

   
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter);
    };

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className='searchIcon'>
                    <img className='icon'src={SearchIcon} alt='none'/>
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return (
                    <button className='dataItem'>
                        <p>{value.name}</p>
                        
                    </button>
                    );
                })}
            </div>
            )}
        </div>    
    )
}

export default SearchBar;