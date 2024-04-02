import { dataUser } from "@/types/data";
import { supabaseClient } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const data: dataUser = JSON.parse(body);
  const response = await supabaseClient.from("message").insert(data);
  return NextResponse.json({
    status: "success",
    data: response,
    message: "Data inserted successfully",
    error: null,
    statusCode: 200,
  });
}

export async function GET(req: NextRequest) {
  const data = await supabaseClient.from("message").select("*");

  return NextResponse.json(data);
}
