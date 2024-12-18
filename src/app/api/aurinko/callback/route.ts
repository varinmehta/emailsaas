import { exchangeCodeForAccessToken } from "@/lib/aurinko"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

// /api/aurinko/callback
export const GET = async (req: NextRequest) => {
    const { userId } = await auth
    if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    const params = req.nextUrl.searchParams
    const status = params.get('status')
    if (status != 'success') return NextResponse.json({ message: 'Failed to link account' }, { status: 400 })
    const code = params.get('code')
    if (!code) return NextResponse.json({ message: 'No code provided' }, { status: 400 })
    const token = await exchangeCodeForAccessToken(code)
    if (!token) return NextResponse.json({ message: 'Failed to exchange code for token' }, { status: 401 })
    console.log('user id is', userId)
    return NextResponse.json({message: "Hello World!"})
}