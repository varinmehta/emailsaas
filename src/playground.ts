import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'varin2@test.com',
        firstName: 'Varin',
        lastName: 'Mehta',
        imageUrl: 'http://github.com/varinmehta'
    }
})

console.log('added to db')