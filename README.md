# Boilerplate Fullstack Template

This is a full-stack boilerplate template built with **Next.js**, **Supabase**, **TailwindCSS**, and other modern tools. It provides a solid foundation for building scalable and feature-rich web applications.

## Features

- **Authentication**: Google OAuth and Email-based authentication with Supabase.
- **UI Components**: Pre-built, reusable components styled with TailwindCSS.
- **State Management**: React hooks for managing state and UI interactions.
- **Responsive Design**: Mobile-first design with TailwindCSS utilities.
- **Theming**: Light and dark mode support with `next-themes`.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Supabase account
- Google Cloud Console account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/boilerplate-fullstack.git
   cd boilerplate-fullstack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## Next Steps

### 1. Configure Google OAuth in Supabase

#### 🔧 In Supabase Dashboard:

1. Go to **Authentication → Providers → Google**.
2. Enter your:
   - **Client ID**
   - **Client Secret**

   You’ll get these from your Google Cloud Console.

#### 🛠 In Google Cloud Console:

1. Go to: [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Navigate to **APIs & Services → Credentials**.
4. Click **Create Credentials → OAuth Client ID**.
5. Set **Application type** to **Web Application**.
6. Add the following **Authorized redirect URI**:

   ```
   https://<your-project-ref>.supabase.co/auth/v1/callback
   ```

7. Copy the **Client ID** and **Client Secret**.
8. Paste them into the Supabase Google provider settings.

 **Now Google Sign-In is enabled.**

---

### 2. Configure Email Auth (With Confirmation)

#### 🔧 In Supabase Dashboard:

1. Go to **Authentication → Settings → Email**.
2. Enable:
   -  **“Confirm email” for signups**
   -  **"Enable email provider"**

#### Email Settings (Required for Confirmation Emails to Work):

**Option 1**: Use Supabase’s Built-in Email (Limited, but Simple)

- It's enabled by default for free-tier projects.
- You can start testing with this (though it may hit rate limits).

**Option 2**: Set Up Custom SMTP

1. Go to **Authentication → Settings → SMTP**.
2. Fill in:
   - **Host**, **Port**, **Username**, **Password**
   - **Sender Email** (e.g., `noreply@yourdomain.com`)
   - **Secure flag** (for TLS)

   Popular options: Mailgun, Brevo, Postmark.

---

👨‍💻 Author
Built by Kartikay Pandey
