/**
 * Cybersecurity & Privacy Utilities
 * - Bot-proof runtime email assembly
 * - Input sanitization for contact form
 * - Honeypot anti-bot validation
 * - Safe encoded mailto generation
 */

// Runtime JS email assembler: static scrapers cannot harvest from plain HTML
export const getAssembledEmail = (): string => {
  const parts = ['roy.subhadeep042', 'gmail.com'];
  return parts.join('@');
};

// Input sanitization: strips potentially malicious tags, brackets, control characters
export const sanitizeInput = (val: string, maxLength: number = 1000): string => {
  if (!val) return '';
  // Trim and enforce length limit
  let cleaned = val.trim().slice(0, maxLength);
  // Strip HTML tags & angle brackets
  cleaned = cleaned.replace(/[<>]/g, '');
  // Strip ASCII control characters except standard newlines and tabs
  // eslint-disable-next-line no-control-regex
  cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  return cleaned;
};

// Email format validation (basic RFC 5322 regex check)
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

// Generate strictly encoded mailto link
export const createSafeMailto = (
  subject: string,
  body: string
): string => {
  const recipient = getAssembledEmail();
  const safeSubject = encodeURIComponent(subject.trim());
  const safeBody = encodeURIComponent(body.trim());
  return `mailto:${recipient}?subject=${safeSubject}&body=${safeBody}`;
};

// Honeypot validator: ensures bot trap field is empty
export const isHoneypotClean = (honeypotValue: string): boolean => {
  return honeypotValue === '';
};
