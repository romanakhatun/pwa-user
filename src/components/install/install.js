import React from 'react';
import { useReactPWAInstall } from 'react-pwa-install';
import './install.css';
import logo from '../../images/logo.png'

const Install = () => {

  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "Install User App",
      logo: logo,
      features: (
        <ul className="features">
          <li>Camera access</li>
          <li>Installable</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "It's PWA App. It's working offline. You can install your browser 🙌️",
    })
  };


  return (
    <div className="install">
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>Install</button>
      )}
    </div>
  );
};

export default Install;