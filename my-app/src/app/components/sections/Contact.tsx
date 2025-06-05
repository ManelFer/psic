'use client';
import Image from "next/image";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
}