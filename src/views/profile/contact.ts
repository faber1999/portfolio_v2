export const CONTACT_EMAIL = 'fabergrajales1999@gmail.com'
export const WHATSAPP_NUMBER = '573146310397'
export const WHATSAPP_DISPLAY = '(+57) 314 631 0397'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/faber1999/'
export const GITHUB_URL = 'https://github.com/faber1999'

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
