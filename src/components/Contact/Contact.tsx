import Loader from 'react-loaders';
import './Contact.scss';
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

    emailjs
      .sendForm(
        'service_3tidsr3',
        'template_qz285on',
        refForm.current!,
        '9TyJaEhYaftWKpLO_'
      )
      .then(
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={10}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
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
        <div className="info-map">
          Jakub Drągowski,
          <br />
          Poland,
          <br />
          Warsaw, 01-808
          <br />
          ul. Lesznowolska 5, 01-808
          <br />
          <span>kuba.dragowski@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[52.284209, 20.952465]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.284209, 20.952465]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="cube-transition" active />
    </>
  );
};
