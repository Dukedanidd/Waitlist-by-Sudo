import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAnon } from "@/lib/supabase";

const Schema = z.object({ email: z.string().email() });

// Rate limit 
const hits = new Map<string, { count: number; ts: number }>();
function isLimited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > 60_000) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  rec.ts = now;
  return rec.count > 8; 
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "0.0.0.0";
    if (isLimited(ip)) {
      return NextResponse.json({ message: "Too many requests." }, { status: 429 });
    }

    const body = await req.json();
    const parsed = Schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }

    const email = parsed.data.email.toLowerCase().trim();

    const { error } = await supabaseAnon
      .from("waitlist")
      .insert({ email }); // RLS only INSERT

    if (error) {
      // If the uniqueness is broken or something, we return generic
      return NextResponse.json({ message: "Could not save email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
