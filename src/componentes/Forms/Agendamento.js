import styles from '@/styles/Forms/Agendamento.module.css';

export default function Agendamento(){
  return(
    <>
      <form className={styles.form}>
        <input type='text' placeholder='Hora'></input>
        <input type='text' placeholder='Local'></input>
        <input type='datetime-local' placeholder='Data'></input>
        <input type='number' placeholder='N° de Pessoas'></input>
      </form>
    </>
  )
}
