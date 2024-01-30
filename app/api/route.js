import Ticekt from "../(models)/Ticket";
import { NextResponse } from "next/server";
import TicketCard from "../(components)/TicketCard";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await TicketCard.create(tickeData);

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
