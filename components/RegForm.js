import styles from './Form.module.css'

export default function RegForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="registration"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="registration" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />
          
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
