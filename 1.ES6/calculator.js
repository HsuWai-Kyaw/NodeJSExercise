export function sum(...num) {
    let total = 0;
    for (n of num) {
        total += n;
    }
    return total;
}