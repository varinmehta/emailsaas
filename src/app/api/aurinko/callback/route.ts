import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// /api/aurinko/callback
export const GET = async (req: Request) => {
    const { userId } = await auth
    console.log('user id is', userId)
    return NextResponse.json({message: "Hello World!"})
}