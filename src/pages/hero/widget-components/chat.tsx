"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User } from "lucide-react"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

export default function ChatWidget() {
    const generateId = () => Math.random().toString(36).substring(2, 15)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: generateId(),
            role: "assistant",
            content: 'Hey, I\'m Shane\'s AI assistant.'
        },
        {
            id: generateId(),
            role: "assistant",
            content: 'How can I help you?'
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const getRandomLorem = () => {
        const sentences = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
            "Phasellus nec sem in justo pellentesque facilisis.",
            "Etiam imperdiet imperdiet orci. Nunc nec neque."
        ];
        const randomIndex = Math.floor(Math.random() * sentences.length);
        return sentences[randomIndex];
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        const userMessage: Message = {
            id: generateId(),
            role: "user",
            content: input.trim(),
        }

        // add user message
        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)


        // fake delay lol TODO add openai api
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const assistantMessage: Message = {
            id: generateId(),
            role: "assistant",
            content: getRandomLorem(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);

    }

    return (

        <div className="w-full h-full flex flex-col border-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {message.role === "assistant" && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                        )}

                        <div
                            className={`max-w-[75%] p-3 rounded-lg text-sm ${message.role === "user"
                                ? "bg-blue-500 text-white rounded-br-sm"
                                : "bg-white border text-black border-gray-200 rounded-bl-sm shadow-sm"
                                }`}
                        >
                            {message.content}
                        </div>

                        {message.role === "user" && (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-gray-600" />
                            </div>
                        )}
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-2 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg rounded-bl-sm shadow-sm p-3">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                ></div>
                                <div
                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t rounded-b-lg">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                        ref={inputRef}
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask about Shane..."
                        disabled={isLoading}
                        className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        size="icon"
                        className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
