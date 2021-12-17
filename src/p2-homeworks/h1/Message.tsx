import React from 'react'
import style from './message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.messageItem}>

                <img src={props.avatar}/>

            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.inner}>
                    <div>{props.message}</div>
                    <div className={style.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
