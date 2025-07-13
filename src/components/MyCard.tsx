import styles from "./MyCard.module.css"

export default function MyCard() {
  return (
    <div className={styles.card}>
      <h2>CSS Modules Card</h2>
      <p>Ini styling menggunakan CSS Modules</p>
    </div>
  )
}
