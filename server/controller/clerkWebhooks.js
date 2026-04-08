import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    let event;
    try {
        event = wh.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });
    } catch (error) {
        return res.status(400).json({ success: false, message: "Webhook verification failed" });
    }

    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    switch (event.type) {
        case "user.created":
            await User.create({
                _id: id,
                username: `${first_name} ${last_name}`,
                email: email_addresses[0].email_address,
                image: image_url,
            });
            break;

        case "user.updated":
            await User.findByIdAndUpdate(id, {
                username: `${first_name} ${last_name}`,
                email: email_addresses[0].email_address,
                image: image_url,
            });
            break;

        case "user.deleted":
            await User.findByIdAndDelete(id);
            break;

        default:
            break;
    }

    res.json({ success: true });
};
