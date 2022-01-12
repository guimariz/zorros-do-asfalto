import React, { Component } from 'react';
import '../App.css'
import FormTempo from '../components/FormTempo'

const AdicionarTempo = () => {
  return (
    <div className='row'>
      <h2>Adicionar Tempo</h2>
      <FormTempo />
    </div>
  )
}

export default AdicionarTempo;