/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_API_KEY: string;
  readonly VITE_API_URL: string;
  readonly VITE_IMAGEKIT_BASE_URL: string;
  readonly VITE_AIRBNB_URL: string;
  readonly VITE_BOOKING_URL: string;
  readonly VITE_PHONE_NUMBER: string;
  readonly VITE_EMAIL_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
