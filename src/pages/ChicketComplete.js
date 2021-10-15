import React from 'react'
import styled from '@emotion/styled';

const ChicketComplete = ({values}) => {
    const handleClick = () => {
        // eslint-disable-next-line no-restricted-globals
        return location.reload()
    }
    return (
        <ChicketItemContainer>
            <ChicketBackButton type="button" value="戻る" onClick={handleClick} />
        </ChicketItemContainer>
    )
}

export default ChicketComplete

const ChicketItemContainer = styled.div`
    width: 584px;
    height: 695px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: 250;
    background-color: #fff;
    border-radius: 24px;
`

const ChicketBackButton = styled.input`
`