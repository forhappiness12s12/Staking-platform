// components/ClipboardLink.js

import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ClipboardLink = ({ text, className }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy} >
      <img className='w-10' src='./copy1.png'/>
    </CopyToClipboard>
  );
};

export default ClipboardLink;
