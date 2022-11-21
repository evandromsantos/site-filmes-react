import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './Nav.css'

const Nav = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`, {replace: true})
        setSearch("")
    }

    return (
        <nav id='navbar' className='nav'>
            <h2>
                <Link to="/"><BiCameraMovie /> VLFilmes</Link>
            </h2>
            <form onSubmit={handleSubmit} action="">
                <input type="text"
                    placeholder="Pesquisar..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search} />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}

export default Nav
