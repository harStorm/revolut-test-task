//@flow
import React, { Component } from 'react';
import Revert from '../../components/Revert';

type RevertContainerProps = {
    revertCurrencies: Function,
    baseName: string,
    receiveName: string,
}

class RevertContainer extends Component<RevertContainerProps> {

    render() {
        const {
            revertCurrencies,
            baseName,
            receiveName,
        } = this.props;

        return (
            <Revert 
                handleClick={() => revertCurrencies(receiveName, baseName)}
            />
        )
    }
}

export default RevertContainer;