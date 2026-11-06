import { station } from '../data.js'

// Floating WhatsApp button — always visible, sits above the page content
// and lifts up when the live radio player is open so they don't overlap.
export default function WhatsAppButton({ lift }) {
  const message = encodeURIComponent(
    "Hi VMC Planet Radio, I'd like to know more."
  )
  const href = `https://wa.me/${station.whatsapp}?text=${message}`

  return (
    <a
      className={`whatsapp-fab ${lift ? 'is-lifted' : ''}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with VMC Planet Radio on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.3.6 4.5 1.8 6.4L3 29l7.3-1.9c1.8 1 3.7 1.5 5.7 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3zm0 22.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.3 1.1 1.2-4.2-.2-.4a10.3 10.3 0 0 1-1.5-5.2c0-5.7 4.6-10.3 10.3-10.3S26.3 9.8 26.3 15.5 21.7 25.8 16 25.8zm5.7-7.7c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5s0-.4 0-.6c-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H11c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.7 5.9 5.2.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.3-.5-.4z" />
      </svg>
    </a>
  )
}