import React from 'react';
import './style.css';
import Accordion from './components/accordion';
import { jsonData } from '../data/jsonData';

export default function App() {
  return <Accordion jsonData={jsonData} />;
}
