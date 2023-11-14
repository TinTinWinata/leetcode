function reverseWords(s: string): string {
    return s.trim().split(' ').map((val) => val.trim()).filter((val) => val !== '').reverse().join(' ')
};