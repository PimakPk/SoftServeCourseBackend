// // // const {execFile} = require("node:child_process");

// // // function foldersGenerator(name, count) {
// // //     let folderNames = [];
// // //     for (let i = 0; i < count; i++) {
// // //         folderNames.push(`${name}${i + 1}`);
// // //     }
// // //     execFile('mkdir', folderNames);
// // // }

// // // foldersGenerator("folder", 3);

// // const {Worker, isMainThread, workerData, parentPort} = require('node:worker_threads');

// // function workerFunction() {
// //     const index = workerData.arr.indexOf(workerData.findVal)
// //     if (index != -1) {
// //         parentPort.postMessage(`Element found at index ${index} of array ${workerData.arrNum}`);
// //     } else {
// //         parentPort.postMessage(null);
// //     }
// // };

// // function findElement(arr1, arr2, findVal) {
// //     if (isMainThread) {
// //         const worker1 = new Worker(__filename, {workerData : {arr : arr1, findVal : findVal, arrNum : 1}})
// //         const worker2 = new Worker(__filename, {workerData : {arr : arr2, findVal : findVal, arrNum : 2}})
// //         let found = false;
// //         let takingResponce = 0;

// //         const callback = (res) => {
// //             takingResponce++;
// //             if (res && !found) {
// //                 found = true;
// //                 console.log(res);
// //             }
// //             if (takingResponce === 2 && !found) {
// //                 console.log("Element not found");
// //             }
// //         }
// //         worker1.on("message", callback);
// //         worker2.on("message", callback);
// //     } else {
// //         workerFunction()
// //     }
// // }


// // arr1 = ['dPRZxomA', '50aoPS1ZOu', 'TPGjTL8l', 'OlzF9pRSP'];
// // arr2 = ['0mHXAQJY6', 'mQueU006Is', 'cFM17Eou', 'pFUk0P3Ivo', 'Ob9NtLii', 'Jk8x5DBNxL'];
// // searchValue = '50aoPS1ZOu';
// // findElement(arr1, arr2, searchValue);




// // // const {Worker, isMainThread} = require('node:worker_threads');

// // // function workerCode() {
// // //     console.log("hello from worker");
// // // }

// // // console.log("inside file");

// // // if (isMainThread) {
// // //     console.log("Its main");
// // //     new Worker(__filename);
// // // } else {
// // //     workerCode();
// // //     console.log(isMainThread);
// // // }

// const {Worker, isMainThread} = require('node:worker_threads');


// // let workerScript = `const fs = require('fs/promises');
// // fs.readFile(filename, {encoding: 'utf8'}).split('\\n').filter((str) => str.includes('Developer')).map((str) => str.split(',')[0]).sort()`;

// let workerScript = `const fs = require('node:fs');
// const { workerData, parentPort } = require('node:worker_threads');
// fs.readFile(workerData.filename, {encoding : 'utf8'}, (err, data) => {
//     if (err) throw err;
//     const ids = data
//         .split('\\n')
//         .filter((str) => str.includes('Developer'))
//         .map((str) => str.split(',')[0])
//         .sort();
//     for (const id of ids) {
//         console.log(id);
//     }
// })`

// // for (const id of ids) {
// //     console.log(id);
// // }

// function parseCSV(filename) {
//     const worker = new Worker(workerScript, {eval : true, workerData : {filename : filename}});
//     // worker.on('message', (res) => {
//     //     console.log(res);
//     // })
// }

// parseCSV('./example.csv');



// let workerScript = `
// const path = require('path');
// const fs = require('node:fs');
// const { workerData } = require('node:worker_threads');

// fs.readdir(__dirname, (err, files) => {
//     if (err) throw err;
//     for (const file of files) {
//         if (file.startsWith(workerData.prefix)) { 
//             console.log(file)
//         }
//     }
// })`;
const {Worker, isMainThread, workerData, parentPort} = require('node:worker_threads');
const fs = require('node:fs');

const findPrefix = () => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
          parentPort.postMessage({ error: err.message });
          return;
        }
        const matchedFiles = files.filter((file) => file.startsWith(workerData.prefix));
        parentPort.postMessage(matchedFiles);
      });
}

// function listFiles(prefix) {
//     if (isMainThread) {
//         const worker = new Worker(__filename, {workerData : { prefix }});
//         worker.on('message', (result) => {
//             if (result.error) {
//             console.error('Error:', result.error);
//             } else {
//             result.forEach((file) => console.log(file));
//             }
//         });
//     }
//     else {
//         findPrefix();
//     }
// }

function listFiles(prefix) {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            console.log("No such file or directory");
            throw err;
        }
        const matchedFiles = files.filter((file) => file.startsWith(prefix));
        if (!matchedFiles) {
            console.log("No such file or directory");
            return;
        }
        matchedFiles.map((value) => console.log(value));
      });
}

listFiles('fol');