# Waitlist Component by Sudo

A beautiful, animated waitlist signup component built with **Next.js**, **TypeScript**, **TailwindCSS**, and **Supabase**. Perfect for collecting emails for product launches, newsletters, or early access programs.

## ✨ Features

- 🎨 **Beautiful animated UI** with custom purple theme and particle effects
- 📱 **Fully responsive** design that works on all devices
- ⚡ **Fast and lightweight** built with Next.js App Router
- 🔒 **Rate limiting** built-in to prevent spam
- ✅ **Form validation** using Zod and React Hook Form
- 🎭 **Smooth animations** for all elements (logo, title, inputs, buttons)
- 🌟 **Dynamic background** with animated particles and curtain effects
- 🎯 **Accessible** with proper ARIA labels and keyboard navigation
- 🚀 **Production-ready** with error handling and loading states

## 🎥 Preview

![Waitlist Component Preview]()

## 🧰 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Fonts**: [Geist](https://vercel.com/font)

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ installed
- **npm**, **yarn**, or **pnpm** package manager
- A **Supabase** account (free tier works)
- Basic knowledge of **Next.js** and **TypeScript**

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Dukedanidd/waitlist-component.git
or fork
cd waitlist-component
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set up Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Go to **SQL Editor** and run this SQL to create the `waitlist` table:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

3. Copy your **Project URL** and **anon public key** from Supabase settings
4. Add them to your `.env.local` file

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
waitlist-component/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API endpoint for email submission
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── BackgroundEden.tsx        # Animated background with particles
│   ├── FormCard.tsx              # Main form card component
│   └── WaitlistForm.tsx          # Form logic and validation
├── lib/
│   └── supabase.ts               # Supabase client configuration
├── public/                        # Static assets
└── package.json                   # Dependencies and scripts
```

## 🎨 Customization

### Changing Colors

The component uses a purple theme. To change colors, modify these classes in `components/FormCard.tsx` and `components/WaitlistForm.tsx`:

- `text-purple-900` → your color
- `bg-purple-800` → your color
- `border-purple-500` → your color

Also update the background color in `app/globals.css`:
- `.eden-gradient` background-color
- `.eden-blob` colors

### Modifying Animations

Animations are defined in `app/globals.css`. You can adjust:
- Animation duration (e.g., `0.6s` → `0.8s`)
- Animation delays (e.g., `0.1s` → `0.2s`)
- Animation types (fade, slide, scale, etc.)

### Changing Text Content

Edit the text in `components/FormCard.tsx`:
- Logo/icon
- Title and subtitle
- Form labels
- Legal links

## 🔧 Configuration

### Rate Limiting

The API route includes rate limiting (8 requests per minute per IP). To modify:

```typescript
// app/api/waitlist/route.ts
return rec.count > 8; // Change this number
```

### Database Schema

If you need to add more fields to the waitlist table:

```sql
ALTER TABLE waitlist ADD COLUMN your_column TYPE;
```

Then update the API route to handle the new field.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**

Make sure to set your environment variables in your hosting platform's dashboard.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes locally
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the deployment platform

## 📧 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🌟 Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

Made with ❤️ by [Duke/Sudo](https://github.com/Dukedanidd)
