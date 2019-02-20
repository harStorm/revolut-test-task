//@flow
import React from 'react';

type RevertProps = {
    handleClick: Function,
}

const Revert = ({
    handleClick,
}: RevertProps) => (
    <div
        className="currency__revert"
        onClick={handleClick}>
        <span className="currency__revert-arrow-up"/>
        <span className="currency__revert-arrow-down" />
    </div>
)

export default Revert;