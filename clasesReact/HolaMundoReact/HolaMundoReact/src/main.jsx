
import React from 'react';
import { createRoot } from 'react-dom/client'
import TwiterFollowCard from './TwiterFollowCard';
import "/src/style.css";


createRoot(document.getElementById('app')).render(
  <>
  <TwiterFollowCard></TwiterFollowCard>
  </>
);
 