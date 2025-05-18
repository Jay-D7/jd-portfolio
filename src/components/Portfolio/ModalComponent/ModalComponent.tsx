import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import './ModalComponent.scss';

export interface ModalPropsInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  ModalProps: ModalPropsInterface;
}
Modal.setAppElement('#root'); // Set the app element for accessibility

export const ModalComponent = ({
  isOpen,
  onClose,
  ModalProps,
}: PortfolioModalProps) => {
  if (!ModalProps) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="portfolio-modal"
      overlayClassName="portfolio-modal-overlay"
      closeTimeoutMS={1000}
    >
      <h2>{ModalProps.title}</h2>
      <p>{ModalProps.description}</p>
      {ModalProps.url && (
        <Link to={ModalProps.url} target="_blank">
          Link to Project
        </Link>
      )}
      <img src={ModalProps.image} alt={ModalProps.title} />
      <button onClick={onClose} aria-label="Close Modal">
        Close
      </button>
    </Modal>
  );
};
