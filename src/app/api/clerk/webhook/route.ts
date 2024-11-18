export const POST = async (req: Request) => {
    const { data } = await req.json()
    console.log('clerk webhook received', data)
    const emailAddress = data.email_addresses[0].email_address
    return new Response('Webhook received', { status: 200 })
}