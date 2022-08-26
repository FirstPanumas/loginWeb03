const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();


exports.findUser = async (req, res) => {
    const showuser = await prisma.user.findMany();
    res.json({ ...showuser })
    console.log(showuser[1]['id']);
}

exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    res.json( {username, password} )

     

    // try {
    //     await prisma.user
    //         .create({
    //             data: {
    //                 username: username,
    //                 password: password,
    //             },
    //         })
    //         .then(
    //             res.json({ data: { username, password } }),
    //             console.log("create user success")
    //         );
    // }
    // catch (err) {
    //     if (err instanceof Prisma.PrismaClientKnownRequestError) {
    //         console.log(`Create Record Faile on code : ${err.code}`);
    //     }
    //     res.json({ data: err.code });
    // }

}


