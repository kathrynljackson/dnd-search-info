import Head from 'next/head'
import Icon from '@mui/material/Icon';
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import SpellCard from './SpellCard'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      spells: [],
      count: 0,
      next: ''
    };
  }

  getSpells = () => {
    return fetch('https://api.open5e.com/spells/')
      .then(response => response.json())
      .then(response => this.updateSpells(response))
  }

  updateSpells = (response) => {
    this.setState({
      spells: response.results,
      count: response.count,
      next: response.next
    });
  }

  componentDidMount() {
    this.getSpells();
  }

  render() {
    const spells = this.state.spells;

    return (
      <section className={styles.container}>
        <Head>
        <link
            rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        </Head>
        <section className={styles.header}>
          <h1 className={styles.title}>Spell Database</h1>
        </section>
        <main className={styles.main}>
          <section className={styles.inputContainer}>
          <Icon className={styles.searchIcon}>search</Icon>
        <input type="search" placeholder="Search spells by title..." className={styles.input} />
          </section>
          <section className={styles.grid}>
            {spells.map(spell => <SpellCard key={spell.slug} spellData={spell} />)}
          </section>
        </main>
      </section>
    )
  }
}
