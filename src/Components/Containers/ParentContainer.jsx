import React from 'react'
import Container from "Components/Containers/Container";
import Header from "Components/Header/Header";
import './ParentContainer.scss'

export default function ParentContainer() {
    return (
        <div className="ParentBackground">
             <Header />
             <Container />
        </div>
    )
}
