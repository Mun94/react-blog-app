import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette.js';
import {Link} from 'react-router-dom';

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: ${palette.gray[2]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    .logo-area{
        display: block;
        font-weight: bold;
        padding-bottom: 2rem;
        letter-spacing: 2px;
        text-align: center;
    };
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    width: 360px;
    padding: 2rem;
    background: white;
    border-radius: 2px;
`

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className='logo-area'>
                    <Link to = '/'>REACTERS</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    )
}

export default AuthTemplate