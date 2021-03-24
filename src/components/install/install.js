import React from 'react';
import './install.css'

const Install = () => {

  let deferredPrompt;
  const buttonInstall = document.querySelector('.add-to-btn');

  window.addEventListener('beforeInstallPrompt', (e) => {
    e.preventDefault();
    // deferredPrompt = e;
    // showInstallPromotion();
    console.log(`'beforeInstallPrompt' event was fired.`);
  });
  // buttonInstall.addEventListener('click', async () => {
  //   // hideInstallPromotion();
  //   deferredPrompt.prompt();
  //   // const { outcome } = await deferredPrompt.userChoice;
  //   // console.log(`User response to the install prompt: ${outcome}`);
  //   deferredPrompt = null;
  // });
  // window.addEventListener('appInstalled', () => {
  //   // hideInstallPromotion();
  //   deferredPrompt = null;
  //   console.log('PWA was installed');
  // });

  return (
    <div className="add-to">
      <button className="add-to-btn">Add to home screen</button>
    </div>
  );
};

export default Install;