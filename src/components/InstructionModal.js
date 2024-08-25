import React from 'react';
import './InstructionModal.css';

function InstructionModal({ onClose }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Welcome to Find College Parking!</h2>
                <ul>
                    <li>
                        Click on a &nbsp;
                          <img src="/img/FCP-circle.png" alt="Custom Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} /> to see details about the space
                    </li>
                    <li>
                        Follow the link to apply for that space.
                    </li>
                    <li>Respond when you get an email or text from the tenant!</li>
                </ul>
                <button onClick={onClose}>Got it!</button>
            </div>
        </div>
    );
}

export default InstructionModal;