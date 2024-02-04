import React from 'react'
import serachIcon from "../assets/icons/search.svg"
function Search() {
  return (
    <div className='searchbox'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <button className='btn srch__btn' type='submit'>
                <img src={serachIcon} alt="search" />
            </button>
            <input className='srch__input' type='text' placeholder='Search here...' />
        </form>
    </div>
  )
}

export default Search;
