"use client"

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, Toaster } from 'sonner'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA  from "react-google-recaptcha"
import { useRef, useState } from 'react'

const formsResponse = z.object({
  nome: z.string().nonempty().min(2, {message: 'Porfavor entre com seu nome'}),
  email: z.string().nonempty().email({message: 'Porfavor entre com um email válido'}),
  cargo: z.string().nonempty().min(2, {message: 'Porfavor entre com seu cargo'}),
  mensagem: z.string().nonempty().min(10, {message: 'Porfavor entre com uma mensagem de no mínimo 10 caracteres'}),
})

type FormsResponse = z.infer<typeof formsResponse>

export default function Contact(){
  const {register, handleSubmit, reset, formState} = useForm<FormsResponse>({
    resolver: zodResolver(formsResponse),
  })

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (error) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  }

  function handleExpired() {
    setIsVerified(false);
  }

  const { t } = useTranslation();

  const isLoading = formState.isSubmitting
  const onSubmit = async (data: FormsResponse) => {
    const mailText = 
      `Nome: ${data.nome}\n 
       Email: ${data.email}\n 
       Cargo: ${data.cargo}\n 
       Mensagem: ${data.mensagem}`;
  
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.email,
        subject: 'Contato do site',
        text: mailText,
      }),
    });
  
    if (response.ok) {
      toast.success(t("contact.form.success"));
      reset();
    } else {
      toast.error(t("contact.form.error"));
    }
  };

  return (
    <div id="contact">
      <div className="bg-sky-900 flex items-center justify-center h-32">
        <span className="text-3xl text-white">{t("contact.t1")}</span>
      </div>  
      <div className="flex py-8 px-8 gap-14 justify-center items-center relative top-[80px]">
        <div className="flex flex-col md:flex-row md:w-[70%] gap-4 bg-white shadow-2xl rounded-[8px]">
          <div className="flex flex-col md:max-w-[50%] gap-8 items-center md:items-start justify-between p-6">
            <span className="text-sky-900 font-bold text-4xl">{t("contact.p1")}</span>
            <span className="text-sky-900 text-3xl">{t("contact.p2")}</span>
            <div className="flex gap-10">
              <div className="w-10 h-10 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
              <div className="w-10 h-10 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              <div className="w-10 h-10 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.8)]" />
            </div>
          </div>
          <div className="p-6 w-full rounded-lg">
            <form 
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-sky-900">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={t("contact.form.name.placeholder")}
                  required
                  {...register('nome')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sky-900">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={t("contact.form.email.placeholder")} 
                  required
                  {...register('email')}
                />
              </div>

              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-sky-900">
                  {t("contact.form.role")}
                </label>
                <input
                  type="text"
                  id="cargo"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={t("contact.form.role.placeholder")}
                  required
                  {...register('cargo')}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-sky-900">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="resize-none mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[8px] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder={t("contact.form.message.placeholder")}
                  required
                  {...register('mensagem')}
                />
              </div>

              <div className="flex flex-col justify-center w-full items-center gap-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={"6LeoqvQrAAAAAKoqc0bh1NZgrTWFJadYp5NSiwQE"}
                  onChange={handleChange}
                  onExpired={handleExpired} 
                />
                <button
                  type="submit"
                  className={`px-10 py-2 text-white bg-[#4FA6C0] w-full rounded-[8px] shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${(isLoading || !isVerified) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading || !isVerified}
                >
                  {isLoading ? t("contact.form.button.sending") : t("contact.form.button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}