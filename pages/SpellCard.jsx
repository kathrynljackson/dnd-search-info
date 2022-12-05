import styles from '../styles/SpellCard.module.css' ;
import { Chip } from '@mui/material';

export default function spellCard({ spellData }) {
    const name = spellData.name;
    const description = spellData.desc;
    const higherDesc = spellData.higher_level;
    const concentration = spellData.concentration;
    const school = spellData.school;
    const classes = spellData.dnd_class;
    const range = spellData.range;
    const level = spellData.level;
    const time = spellData.casting_time;
    const duration = spellData.duration;
    const ritual = spellData.ritual;
    const material = spellData.material;
    const components = spellData.components;

    const spellConcentrationChip = (con) => {
        if(con === "yes"){
            return (
                <Chip className={styles.chip} label="Concentration" />
            )
        }
    }

    const spellRitualChip = (rit) => {
        if(rit === "yes"){
            return (
                <Chip className={styles.chip} label="Ritual" />
            )
        }
    }

    const spellMaterialsChip = (materials) => {
        if(materials !== ""){
            return (
                <Chip className={styles.chip} label={materials} />
            )
        }
    }


    return(
        <section className={styles.container}>
            <section className={styles.top}>
                <div className={styles.topLeft}>
                    <p>{school}</p>
                </div>
                <div className={styles.topCenter}>
                    <h2>{name}</h2>
                    <p>{level} {school}</p>
                </div>
                <div className={styles.topRight}>
                    <p>{classes}</p>
                </div>
            </section>
            <div className={styles.tagsContainer}>
                <Chip className={styles.chip} label={time} />
                <Chip className={styles.chip} label={range} />
                <Chip className={styles.chip} label={duration} />
                {spellConcentrationChip(concentration)}
                {spellRitualChip(ritual)}
                {spellMaterialsChip(material)}
                <Chip className={styles.chip} label={components} />
            </div>
            <section className={styles.descriptions}>
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
                <div className={styles.higherDesc}>
                    <p className={styles.higherLevelTitle}>At Higher Levels:</p>
                    <p>{higherDesc}</p>
                </div>
            </section>
        </section>
    )
}