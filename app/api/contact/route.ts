import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Inquiry from "../../../models/Inquiry";
import { processNotifications } from "../../../lib/notifications";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Save to DB if connection exists
    const db = await dbConnect();
    if (db) {
      const inquiry = new Inquiry(data);
      await inquiry.save();
    }
    
    // Process async notifications
    await processNotifications(data);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}