import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { getInitialData } from './utils/index';
import './styles/style.css';

const initialData = getInitialData();

const root = createRoot(document.getElementById('root'));
root.render(<App initialData={initialData} />);
