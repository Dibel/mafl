// /server/routes/icons/[..slug].js
import fs from "fs";
import path from 'path'
import process from 'node:process'

export default defineEventHandler(async (event) => {
    const filename = event.context.params?.slug
    if (!filename) {
        throw createError({
            statusCode: 404,
            statusMessage: 'File not found'
        })
    }
    const filePath = path.join(process.cwd(), 'public', 'icons', filename)

    return sendStream(event, fs.createReadStream(filePath))
});
