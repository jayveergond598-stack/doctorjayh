export async function onRequestPost(context) {
    const { request, env } = context;
    try {
        const body = await request.json();
        const { name, phone, mode, symptoms } = body;

        if (!name || !phone || !mode || !symptoms) {
            return new Response('Missing required fields', { status: 400 });
        }

        await env.DB.prepare(
            'INSERT INTO appointments (name, phone, mode, symptoms) VALUES (?, ?, ?, ?)'
        ).bind(name, phone, mode, symptoms).run();

        return new Response('OK', { status: 201 });
    } catch (err) {
        return new Response('Server error: ' + err.message, { status: 500 });
    }
}
