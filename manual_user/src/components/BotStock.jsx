import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mistral } from '@mistralai/mistralai';
import ReactMarkdown from 'react-markdown';

const BotStock = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "¡Hola! 👋 Soy **BotStock**, tu asistente experto en el **Sistema POS & Gestión de Inventario**.\n\n¿En qué puedo ayudarte hoy?\nPuedes preguntarme sobre:\n- **POS y Ventas** (Caja, deudas, anulaciones).\n- **Logística** (Kardex, stock, proveedores).\n- **Cocina** (Monitor de comandas y tiempos).\n- **Reportes IA** (Estado de resultados y métricas)."
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
            
            if (!apiKey) {
                setMessages(prev => [...prev, { 
                    role: "assistant", 
                    content: "⚠️ **Error de Configuración:** No se encontró la API Key de Mistral." 
                }]);
                setIsLoading(false);
                return;
            }

            const client = new Mistral({ apiKey });

            // Llamada al agente entrenado de Luis (Versión 2)
            const response = await client.agents.complete({
                agentId: 'ag_019cde92347d715e94ebff256073fc1e',
                agentVersion: 2, // Aseguramos que use tu última versión
                messages: [...messages, userMessage].map(m => ({
                    role: m.role,
                    content: m.content
                })),
            });

            const botResponse = response.choices[0].message.content;
            setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);
        } catch (error) {
            console.error("Error calling Mistral:", error);
            setMessages(prev => [...prev, { 
                role: "assistant", 
                content: "❌ Lo siento, hubo un error al conectar con mis servidores. Por favor, intenta de nuevo más tarde." 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[calc(100vw-2rem)] sm:w-[360px] h-[65vh] sm:h-[500px] max-h-[600px] bg-white rounded-[2rem] shadow-2xl border border-secondary-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary-500 p-4 pb-5 flex items-center justify-between text-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                            <div className="flex items-center gap-2.5 relative z-10">
                                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm leading-none tracking-tight">BotStock</h3>
                                    <span className="text-[9px] text-primary-100 flex items-center gap-1 mt-1 uppercase font-black tracking-widest">
                                        <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
                                        En Línea
                                    </span>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/10 p-1.5 rounded-lg transition-colors relative z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary-50/20 scrollbar-none">
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={i}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                                        m.role === 'user' 
                                        ? 'bg-primary-500 text-white rounded-tr-none shadow-sm' 
                                        : 'bg-white text-secondary-800 rounded-tl-none border border-secondary-100 shadow-sm'
                                    }`}>
                                        <div className="prose prose-sm prose-inherit max-w-none prose-p:my-1 prose-headings:text-inherit prose-strong:text-inherit prose-ul:my-1 prose-li:my-0.5">
                                            <ReactMarkdown>{m.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-none border border-secondary-100 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-secondary-300 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-secondary-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 bg-secondary-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white border-t border-secondary-50 flex gap-2">
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-1 bg-secondary-50/50 border border-secondary-100 rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading}
                                className={`bg-primary-500 text-white p-2.5 rounded-xl shadow-md transition-all hover:bg-primary-600 active:scale-95 disabled:opacity-50`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary-500 text-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center relative group overflow-hidden"
            >
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 bg-white/20 rounded-full blur-lg" />
                <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full z-20"></div>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <div className="relative z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default BotStock;
