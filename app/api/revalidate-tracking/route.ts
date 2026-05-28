import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { vertical_id } = body;

    if (!vertical_id) {
      return NextResponse.json({ error: "Missing vertical_id" }, { status: 400 });
    }

    revalidateTag(`tracking-${vertical_id}`, "max");

    return NextResponse.json(
      { revalidated: true, vertical: vertical_id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}
