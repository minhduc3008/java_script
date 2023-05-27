/* Arrow function
    - Bỏ đi từ khóa function.
    - Cách viết:
        let tenFunction = (tham so1, thamso2) => {
            code 
        }
*/


// Ví dụ:

        let getInfo = (name, email = 'aaa@gmail.com') => {
            return  `Tên bạn là: ${name} <br/>
            Email của bạn là: ${email} <br/> <hr>`
        }

        document.write(getInfo('Vũ Minh Đức', 'vuminhduc3008@gmail.com'))
        document.write(getInfo('Duy'))