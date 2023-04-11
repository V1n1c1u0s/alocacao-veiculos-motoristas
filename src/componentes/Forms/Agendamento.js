import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Forms/Agendamento.module.css';

export default function Agendamento(){
  const [formData, setFormData] = useState({
    Date: '',
    HorarioIda: '',
    HorarioVolta: '',
    CEP: '',
    endereco: '',
    bairro: '',
    cidade: '',
    nDoLocal: '',
    quantidadePessoas: ''
  })

  const [error, setError] = useState('')

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name] : event.target.value,
    })
  }

  const handleForm = async (event) => {
    try{
      event.preventDefault()
      console.log(formData)
      const response = await fetch(`/api/mail/sendMail`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()

      if(response.status == 400) throw new Error(json)

    } catch(err) {
      setError(err.message)
    }
  }
  return(
    <>
      <form className={styles.form} onSubmit={ handleForm }>
        <h1>Sistema Para Locação de Veículo da Universidade</h1>

        <input type='text' placeholder='Data' /*min="2023-04-05" max="2023-12-31"*/
        autoFocus required value={formData.Date}
        onChange= { (e) => {handleFormEdit(e, 'Date') }} />

        <input type='text' placeholder='Horário de Ida'
        required value={formData.HorarioIda}
        onChange= { (e) => {handleFormEdit(e, 'HorarioIda') }}/>

        <input type='text' placeholder='Horário de Volta'
        required value={formData.HorarioVolta}
        onChange= { (e) => {handleFormEdit(e, 'HorarioVolta') }}/>

        <input type='text' placeholder='CEP'
        required value={formData.CEP}
        onChange= { (e) => {handleFormEdit(e, 'CEP') }}/>

        <input type='text' placeholder='Endereço'
        required value={formData.endereco}
        onChange= { (e) => {handleFormEdit(e, 'endereco') }}/>

        <input type='text' placeholder='Bairro'
        required value={formData.bairro}
        onChange= { (e) => {handleFormEdit(e, 'bairro') }}/>

        <input type='text' placeholder='Cidade'
        required value={formData.cidade}
        onChange= { (e) => {handleFormEdit(e, 'cidade') }}/>

        <input type='number' placeholder='N° Do Estabelecimento'
        required value={formData.nDoLocal}
        onChange= { (e) => {handleFormEdit(e, 'nDoLocal') }}/>

        <input type='number' placeholder='N° de Pessoas'
        required value={formData.quantidadePessoas}
        onChange= { (e) => {handleFormEdit(e, 'quantidadePessoas') }}/>

        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
