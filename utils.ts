export function uuid() {
    const chars = '0123456789abcdef'.split('');
    const uuid = [];
    for (let i = 0; i < 36; i++) {
        uuid[i] = chars[Math.floor(Math.random() * 16)];
    }
    return uuid.join('');
}