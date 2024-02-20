import { useState, useEffect } from 'react';
import { InfiniteScrollCustomEvent, IonAvatar, IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList, IonSpinner } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleIonInfinite = (event: InfiniteScrollCustomEvent) => {
    setTimeout(() => {
      generateItems();
      event.target.complete();
    }, 2000);
  }

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll disabled={items.length >= 200} onIonInfinite={handleIonInfinite}>
        <div className="infinite-scroll-content">
          <IonSpinner></IonSpinner>
          My Custom Content
        </div>
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default Home;
