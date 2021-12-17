import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://m.polit.ru/media/photolib/2014/12/08/11_1418058028.png',
    name: 'Никита',
    message: 'Игнат, домашку задавал?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
