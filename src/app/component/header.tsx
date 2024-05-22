"use client"

import { useState } from 'react';
import ConnectButton from '@/components/shared/ConnectButton';
export default function Header() {


  return (
    <div>
      <header className="h-24 bg-[#071619] flex items-center justify-between p-12">
        <img src="/logo.png" alt="Logo" className="h-15" />
        <ConnectButton/>
      </header>
      
    </div>
  );
  } 