"use server"
import { auth } from "@clerk/nextjs/server"
export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
    const { userId } = await auth()
    if (!userId) {
        
    }
}