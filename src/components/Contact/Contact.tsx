import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';

import emailjs from '@emailjs/browser';

import { serviceId, templateId, userId } from '../../config/emailjsConfig.ts';
import { dictionary } from '../../dictionary/dictionary.ts';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef<HTMLFormElement | null>(null); // Specify the type here

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.init(userId);

    emailjs.sendForm(serviceId, templateId, refForm.current!, userId).then(
      () => {
        alert('Message successfully sent!');
        window.location.reload();
      },
      () => {
        alert('Failed to send the message, please try again.');
      }
    );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...dictionary.contactTitle]}
              idx={7}
            />
          </h1>
          <p>{dictionary.contactDescription}</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div
          className="info-map"
          dangerouslySetInnerHTML={{ __html: dictionary.infoMap }}
        />
        <div className="map-wrap">
          <MapContainer
            center={[52.284209, 20.952465]}
            zoom={14}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.284209, 20.952465]}>
              <Popup>
                <p>
                  Jacob welcomes you! <br />
                  Come over for a cup of coffee or tea;)
                </p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" active />
    </>
  );
};
