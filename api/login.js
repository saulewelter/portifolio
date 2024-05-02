export default function handler(req, res) {
    const { password } = req.body;
    const correctPassword = process.env.PASSWORD; 

    if (password === correctPassword) {
        res.status(200).end();
    } else {
        res.status(401).end();
    }
}
