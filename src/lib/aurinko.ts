"use server"
import auth
export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
    const {userId} = await auth()
}