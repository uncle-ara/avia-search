import styles from "./Ticket.module.scss";

const Ticket = () => {
  return (
    <div className={styles.base}>
      <div className={styles.header}>
        <div className={styles.carrier}>
          Name Carrier
          {/* <img src="" /> */}
        </div>
        <div className={styles.right}>
          <div className={styles.price}>21 000 Р</div>
          <div className={styles.description}>
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.title}>
            Москва, Шереметьево(SVO) - Лондон, Лондон ,Хитроу(LHR)
          </div>
          <div className={styles.column}>
            <div className={styles.time}>07:05 18 августа</div>
            <div className={styles.travelTime}>4 ч 25 мин</div>
            <div className={styles.time}>07:05 18 августа</div>
          </div>
        </div>
      </div>
      <button className={styles.select}>Выбрать</button>
    </div>
  );
};

export default Ticket;
