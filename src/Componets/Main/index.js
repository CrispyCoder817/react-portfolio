import React from 'react';
import { projectList } from '../../project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../Container';
import './styles.css'

function Main() {
    console.log(projectList);
    return (

        <main>
            {
                projectList.map((project,index) => (
                    <Container project = {project} key = {index}/>
                ))
            }
    </main>
    )
}

export default Main;