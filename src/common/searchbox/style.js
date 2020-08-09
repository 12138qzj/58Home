import styled from 'styled-components';

export const SearchBoxstyle = styled.div `
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    padding: .1759rem/* 19/108 */;
    height: .815rem/* 88/108 */;
    background-color: white;
    .server-search-input {
        position: relative;
        /* height: 0.9629rem; */
        height: .713rem/* 77/108 */
        ;
        width: 8.38rem/* 905/108 */
        ;
        background-color: #f5f6fa;
        border-radius: 30px;
        .server-search-place {
            position: absolute;
            width: 8.1944rem/* 885/108 */
            ;
            height: .4167rem/* 45/108 */
            ;
            padding: .093rem/* 10/108 */
            ;
            display: flex;
            line-height: .4167rem;
            font-size: 0;
            .server-search-border {
                /* display: inline-block; */
                width: .6759rem/* 73/108 */
                ;
                height: .3704rem/* 40/108 */
                ;
                margin-left: .222rem/* 24/108 */
                ;
                padding-top: .074rem/* 8/108 */
                ;
                .server-search-img {
                    width: 0.3703rem;
                    /*  height: 0.3703rem; */
                }
            }
        }
        input {
            border: none;
            height: .509rem/* 55/108 */
            ;
            color: #848c99;
            background-color: #f5f6fa;
        }
    }
    
`;