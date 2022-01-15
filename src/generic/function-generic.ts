// 最初的声明
// export function addUseJS(a, b) {
//     return [a, b]
// }

// 加了参数类型判断的声明
// export function addUseJS(a, b) { 
//     const type = typeof a
//     if (typeof b === type && ['number', 'string'].includes(type)) {
//         return [a, b]
//     } else {
//         throw new Error('参数类型不符合要求')
//     }
// }

// 使用
// addUseJS(1, 'tom')
// addUseJS('tom', 'jery')

// function add(a: number | string, b: number | string): (number | string)[] {
//     return [a, b]
// }

export function add<T>(a: T, b: T): T[] {
    return [a, b]
}

add<number>(1, 2);

add<string>('tom', 'jerry');

add<object>({name: 'tom'}, {name: 'jerry'});


// 传入多个泛型
export function mutiple<T, U>(a: T, b: U): [U, T] {
    // ...
    return [b ,a]
}

// 使用
mutiple<string, number>('tom', 3);
mutiple<number, object>(123, {name: 'jerry'});
