import React from 'react';

interface ModalProps {
    text: string;
    type: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ text, type, onClose }) => {
    const typeStyles = {
        success: 'bg-green-100 text-green-700 border-green-400',
        error: 'bg-red-100 text-red-700 border-red-400',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
        info: 'bg-blue-100 text-blue-700 border-blue-400',
    } as const;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className={`p-6 border rounded-lg shadow-lg max-w-md w-full ${typeStyles[type]}`}>
                <h2 className="text-xl font-semibold mb-4 capitalize">{type}</h2>
                <p>{text}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
