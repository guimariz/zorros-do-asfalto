import React, { useState, useEffect } from 'react'
import { DadosForm } from '../database/DadosForm';
import Select from 'react-select'
import '../App.css'


const FormTempo = () => {
  const initialValues = { 
    pista: '',
    minTime: 0, 
    secTime: 0,
    milTime: 0,
    carro: '',
    tipoCorrida: '',
    tipoControle: '',
    tipoMarcha: '',
    tipoTracado: '',
    controleTracao: false,
    freioAbs: false
  }

  const [ formValues, setFormValues] = useState(initialValues)
  const [ formErrors, setFormErrors] = useState({})
  const [ isSubmit, setIsSubmit ] = useState(false)
  
  const { pistas, carros, tiposCorrida, tiposControle, tiposMarcha, tiposTracado, opcoesCorrida, prints } = DadosForm



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }
  
  const handleChangeSelect = (e, element) => {
    const { label } = e;
    setFormValues({ ...formValues, [element.name]: label })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const handleChangeCheck = (e) => {
    const { name, checked } = e.target
    setFormValues({ ...formValues, [name]: checked })
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}

    if(!values.pista) errors.pista = "Selecione uma pista!"
    if(values.minTime < 0 || values.minTime > 59) errors.minTime = "Informe um tempo válido!"
    if(values.secTime < 0 || values.secTime > 59) errors.minTime = "Informe um tempo válido!"
    if(values.milTime < 0 || values.milTime > 999) errors.minTime = "Informe um tempo válido!"
    if(!values.carro) errors.carro = "Selecione um carro!"
    if(!values.tipoCorrida) errors.tipoCorrida = "Selecione o tipo de corrida!"
    if(!values.tipoControle) errors.tipoControle = "Selecione o tipo de controle!"
    if(!values.tipoMarcha) errors.tipoMarcha = "Selecione o tipo marcha!"
    if(!values.tipoTracado) errors.tipoTracado = "Selecione o tipo de traçado!"

    return errors
  }
  
  return (
    <>
      <div className="row">

        <form onSubmit={handleSubmit}>
          <label>Pista:</label> 
          <Select name="pista" className="w-50" value={formValues.pistas} options={pistas} placeholder="Selecione a pista" onChange={handleChangeSelect} />
          {formErrors.pista ? <div className="w-50 alert alert-danger" role="alert">{ formErrors.pista }</div> : ""}
          
          <label>Tempo:</label> 
          <br />
          <div className="d-flex align-items-center">
            <div className="wTime me-1 min50">
                <input type="number" className="form-control" value={formValues.minTime} label="Minutos" name="minTime" onChange={handleChange} />
            </div>
            <div>
                <span> : </span> 
            </div>
            <div className="wTime mx-1 min50">
                <input type="number" className="form-control" value={formValues.secTime} label="Segundos" name="secTime" onChange={handleChange} />
            </div>
            <div>
                <span> : </span> 
            </div>
            <div className="wTime ms-1 min50">
                <input type="number" className="form-control" value={formValues.milTime} label="Milésimos" name="milTime" onChange={handleChange} />
            </div>
          </div>
          { formErrors.minTime || formErrors.secTime || formErrors.milTime ? <div className="alert alert-danger w-25" role="alert">  </div> : "" }
          <label>Carro:</label>
          <Select name="carro" className="w-50" value={formValues.carros} options={carros} placeholder="Selecione a pista"  onChange={handleChangeSelect} />
          {formErrors.carro ? <div className="w-50 alert alert-danger" role="alert">{ formErrors.carro }</div> : "" }
          <label>Tipo de Corrida:</label>
          <Select name="tipoCorrida" className="w-50" value={formValues.tiposCorrida} options={tiposCorrida} placeholder="Selecione a pista"  onChange={handleChangeSelect} />
          {formErrors.tipoCorrida ? <div className="w-50 alert alert-danger" role="alert">
            { formErrors.tipoCorrida }
          </div> : "" }

          <label>Tipo de Controle:</label>
          <Select name="tipoControle" className="w-50" value={formValues.tiposControle} options={tiposControle} placeholder="Selecione a pista"  onChange={handleChangeSelect} />
          {formErrors.tipoControle ? <div className="w-50 alert alert-danger" role="alert">
            { formErrors.tipoControle }
          </div> : "" }

          <label>Tipo de Marcha:</label>
          <Select name="tipoMarcha" className="w-50" value={formValues.tiposMarcha} options={tiposMarcha} placeholder="Selecione a pista"  onChange={handleChangeSelect} />
          {formErrors.tipoMarcha ? <div className="w-50 alert alert-danger" role="alert">
            { formErrors.tipoMarcha }
          </div> : "" }

          <label>Tipo de traçado:</label>
          <Select name="tipoTracado" className="w-50" value={formValues.tiposTracado} options={tiposTracado} placeholder="Selecione a pista"  onChange={handleChangeSelect} />
          {formErrors.tipoTracado ? <div className="w-50 alert alert-danger" role="alert">
            { formErrors.tipoTracado }
          </div> : "" }

          <div className="radioOpcoesCorrida">
            <label>Controle de Tração</label>
            <input className="ms-2" type="checkbox" name="controleTracao" value={formValues.controleTracao} onChange={handleChangeCheck} />
            <br />
            <label>Freio ABS</label>
            <input className="ms-2" type="checkbox" name="freioAbs" value={formValues.freioAbs} onChange={handleChangeCheck} />
          </div>
          
          <button className="btn btn-outline-dark mt-1">Enviar</button>
        </form>

        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="alert alert-success w-50 m-1">Tempo enviado com sucesso!</div>) : ""}
        </div>

    </>
  )
}

export default FormTempo
