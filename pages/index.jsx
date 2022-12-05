import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import SpellCard from './SpellCard'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      spells: []
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
      <div className={styles.container}>
        <ul>
          {spells.map(spell => <SpellCard key={spell.slug} spellData={spell} />)}
        </ul>
      </div>
    )
  }
}
