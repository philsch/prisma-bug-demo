const {prisma} = require('./dist');

async function main() {
    const result = await prisma.createUser({
        name: "test",
        posts: {
            create: [
                {
                    text: "hello"
                }
            ]
        }
    });


    const result2 = await prisma.users();
    console.log(JSON.stringify(result));
    console.log(JSON.stringify(result2));
}

main();


