'use client';

import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setFormSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10 min-h-screen flex items-center justify-center py-8">
            <div className="bg-gray-100  p-2 dark:bg-white/10 max-w-lg w-full p-6 rounded-lg shadow-lg">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">Contact Us</h1>
                </header>
                {formSubmitted ? (
                    <p className="text-green-500 text-center">Thank you for reaching out!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-left text-gray-700 dark:text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-left text-gray-700 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-left text-gray-700 dark:text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
