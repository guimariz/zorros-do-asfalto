import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>
        Home 
      </h1>
      <div>
        <Link to="#">Download F1 2020</Link>
      </div>
      <div className="card m-3" style={{width: '18rem'}}>
        <div className="card-header">
          Top 5 Voltas Gerais
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <div className="card m-3" style={{width: '18rem'}}>
        <div className="card-header">
          Top 5 Voltas Top 5 Voltas Volante
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
      <div className="card m-3" style={{width: '18rem'}}>
        <div className="card-header">
          Top 5 Voltas Top 5 Voltas Volante
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>

    </div>
  )
}

export default Home;