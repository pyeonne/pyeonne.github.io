/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAIL_SERVICE_ID: string;
  readonly PUBLIC_EMAIL_TEMPLATE_ID: string;
  readonly PUBLIC_EMAIL_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
