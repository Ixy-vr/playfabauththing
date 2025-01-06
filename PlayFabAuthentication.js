export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username } = req.body;

        // Mock logic for banned user
        if (username === 'banned_user') {
            return res.status(403).json({
                BanMessage: 'Your account has been traced and you have been banned.',
                BanExpirationTime: 'Indefinite',
            });
        }

        // Success response for valid user
        return res.status(200).json({
            Message: 'Authentication successful',
            SessionToken: 'abcdef123456',
        });
    }

    // Unsupported HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
}
