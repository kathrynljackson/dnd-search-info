import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import styles from '../styles/Home.module.css'
import { get } from 'http'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {
      spells: {}
    }
  }

  getSpells = () => {
    return fetch('https://api.open5e.com/spells/')
      .then(response => response.json())
      .then(response => this.updateSpells(response))
  }

  updateSpells = (response) => {
    this.setState({
      spells: response
    })
  }

  componentDidMount() {
    this.getSpells()
  }

  render() {
    return (
      <div className={styles.container}>
       
      </div>
    )
  }
}
