const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// 将字符串转换为数值
export function parse(input: string): number {
    const regex = /([0-9.]+)([a-z])/;
    const match = input.match(regex);

    if (!match) {
        throw new Error(`Invalid input format: ${input}`);
    }

    const [_, numberPart, letterPart] = match;
    const numberValue = parseFloat(numberPart);

    if (!letterValue) {
        throw new Error(`Invalid letter: ${letterPart}`);
    }

    return numberValue * letterValue;
}