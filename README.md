# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://api.monosnap.com/file/download?id=YJbnKt2rAkJGCYHQn74fGIIoaIDjOV



# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://api.monosnap.com/file/download?id=dzN54v8Cou6Cy2bWcypUvYwq8vP4Vc




# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://api.monosnap.com/file/download?id=kOtnJkYnilqqiZCEyssKEf3sJNY0jS



# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://api.monosnap.com/file/download?id=uazzaEgg3xoLBux137hotjbMSLFHp3