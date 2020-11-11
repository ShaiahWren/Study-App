import React from 'react'

const JobSearch = () => {
    return (
        <div className='search-bar ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
            <div className='field'>
                <label htmlFor="video-search">Video Search</label>
                <input onChange={this.handleChange} name='video-search' type='text' placeholder='Search..'/>
            </div>
        </form>
    </div>
    )
}

export default JobSearch;
