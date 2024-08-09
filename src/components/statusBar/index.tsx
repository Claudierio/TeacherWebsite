import { useState, useEffect } from 'react';
import styles from './statusBar.module.scss'

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return null; 
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>❌ Sem internet :/</h1>
      </div>
    </div>
  );
}
