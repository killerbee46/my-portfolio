import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../views/HomePage'
import Projects from '../views/Projects'
import Resume from '../views/Resume'
import Works from '../views/Works'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/works' element={<Works />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
    )
}

export default MainRoutes