// //将一个父类断言为子类
// class ApiError extends Error {
//     code: number = 0;
// }
// class HttpError extends Error {
//     statusCode: number = 200;
// }

// // function isApiError(error: Error) {
// //     if (typeof (error as ApiError).code === 'number') {
// //         return true;
// //     }
// //     return false;
// // }
// function isApiError(error: Error) {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }
// interface ApiError extends Error {
//     code: number;
// }
// interface HttpError extends Error {
//     statusCode: number;
// }

// function isApiError(error: Error) {
//     if (typeof (error as ApiError).code === 'number') {
//         return true;
//     }
//     return false;
// }