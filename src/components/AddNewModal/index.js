import React from 'react';

import './style.scss';

const AddNewModal = () => (
    <div className="AddNewModal">
        <div className="AddNewModal__backdrop"></div>
        <div className="AddNewModal__content">
            <h4 className="AddNewModal__title">
                CREATE NEW TASK
            </h4>
            <div className="AddNewModal__task-status">
                <span className="AddNewModal__radio">
                    <input type="radio" />
                    <span>TODO</span>
                </span>
                <span className="AddNewModal__radio">
                    <input type="radio" />
                    <span>IN PROGRESS</span>
                </span>
                <span className="AddNewModal__radio">
                    <input type="radio" />
                    <span>DONE</span>
                </span>
            </div>
            <div className="AddNewModal__task">
                <input className="AddNewModal__input"
                    type="text"
                    placeholder="Enter your task..." />
            </div>
            <div className="AddNewModal__action">
                <button className="AddNewModal__btn AddNewModal__btn--confirm">
                    Save
                </button>
                <button className="AddNewModal__btn AddNewModal__btn--cancel">
                    Cancel
                </button>
            </div>
        </div>
    </div>
)

export default AddNewModal;
