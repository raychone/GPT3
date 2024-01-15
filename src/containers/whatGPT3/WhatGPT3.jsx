import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text='The possibilities are beyoind your imagination!The possibilities are beyoind your imagination!The possibilities are beyoind your imagination!The possibilities are beyoind your imagination!The possibilities are beyoind your imagination!' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyoind your imagination!</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='What is that?What is that?What is that?What is that?What is that?' />
        <Feature title='Knowledgebase' text='What is that?What is that?What is that?What is that?'/>
        <Feature title='Education' text='What is that?What is that?What is that?What is that?'/>
      </div>
    </div>
  );
}

export default WhatGPT3;
