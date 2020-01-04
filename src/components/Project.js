import React, { Component } from 'react';
import ProjectCard from '@lekoarts/gatsby-theme-cara/src/components/project-card'

class Project extends Component {
    render() {
        return (
            <div>
            <ProjectCard title={this.props.title} link={this.props.link} bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            QRSMS -  QR based Student Management System. built using React, Python Django, PostgreSQL.
            </ProjectCard> 
            
           
            </div>
        );
    }
}

export default Project;