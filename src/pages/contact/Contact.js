import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Contact from 'components/Contact';

export function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfNLYEUAAAAALBb-YAmK8a-sEgo8cTJZOQweU30">
      <Contact />
    </GoogleReCaptchaProvider>
  );
}
