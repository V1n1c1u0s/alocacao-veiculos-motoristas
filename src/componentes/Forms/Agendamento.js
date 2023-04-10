import styles from '@/styles/Forms/Agendamento.module.css';

export default function Agendamento(){
  return(
    <>
      <form className={styles.form}>
        <h1>Sistema Para Locação de Veículo da Universidade</h1>
        <input type='text' placeholder='Data' min="2023-04-05" max="2023-12-31"></input>
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
