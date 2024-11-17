import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'varin@test.com',
        firstName: 'Varin',
        lastName: 'Mehta',
        imageUrl: 'http://github.com/varinmehta'
    }
})

console.log('added to db')