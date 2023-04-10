import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Forms/Agendamento.module.css';

export default function Agendamento(){
  const [formData, setFormData] = useState({
    Date: '',

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
        <input type='text' placeholder='Horário de Ida'></input>
        <input type='text' placeholder='Horário de Volta'></input>
        <input type='text' placeholder='CEP'></input>
        <input type='text' placeholder='Endereço'></input>
        <input type='text' placeholder='Bairro'></input>
        <input type='text' placeholder='Cidade'></input>
        <input type='number' placeholder='N° Do Estabelecimento'></input>
        <input type='number' placeholder='N° de Pessoas'></input>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
