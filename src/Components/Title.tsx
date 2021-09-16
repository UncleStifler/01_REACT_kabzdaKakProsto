import React from 'react';

export type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div>
            {props.title}
        </div>
    )
}