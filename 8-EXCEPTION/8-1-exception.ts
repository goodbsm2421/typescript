// Java: Exception
// JavaScript: Error
// const array = new Array(1000000000000); // RangeError

//Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents'
}

function closeFile(fileName: string) {
    //
}

const fileName = 'file'
try {
    console.log(readFile(fileName))
} catch(error) {
    console.log('catched !!')
} finally { // finally 안에 있으면 catch에서 에러를 발견하더라도 항상 실행이됨.
    console.log('finally!!') // finally안에서 작성하지않고 밖으로 빼면 catch에서 return을 했을경우 실행되지않음.
}