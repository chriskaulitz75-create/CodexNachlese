export function heading(level, text) {
    return `${"#".repeat(level)} ${text}\n\n`;
}

export function bullet(text) {
    return `- ${text}\n`;
}

export function paragraph(text) {
    return `${text}\n\n`;
}