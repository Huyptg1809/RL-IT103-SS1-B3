const testData = ["150000", "3.75", "", "100k", null, undefined];
for (const value of testData) {
    const numberResult = Number(value);
    const unaryResult = +value;
    console.log(`
Giá trị: ${value}
Kiểu ban đầu: ${typeof value}

Number(value):
Kết quả: ${numberResult}
Kiểu: ${typeof numberResult}

+value:
Kết quả: ${unaryResult}
Kiểu: ${typeof unaryResult}

-------------------------
`);
}

console.log(`Bóc tách chuỗi có đơn vị: parseInt("100k", 10) = ${parseInt("100k", 10)}`);