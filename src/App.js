import React, { Component } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import uuidv1 from 'uuid/v1';
import { fromJS } from 'immutable'

import './style.scss';
import Column from './components/Column/';
import AddNewModal from './components/AddNewModal/';
import Task from './components/Task/';

class App extends Component {

    state = {
        displayModal: false,
        selectedColumn: '',
        taskContent: '',
        editedTaskIndex: null,
        editedTaskId: null,
        columns: fromJS([
            { id: 'td', title: 'TO DO', tasks: [{id: 'abc', content: 'aaaa'}] },
            { id: 'ip', title: 'IN PROGRESS', tasks: [] },
            { id: 'de', title: 'DONE', tasks: [] }
        ])
    }

    handleToggleModal = (choosenColumn = '') => () => {
        this.setState(prevState => ({
            displayModal: !prevState.displayModal,
            selectedColumn: choosenColumn
        }));
    }

    handleChangeTaskContent = (e) => {
        console.log(e.target.value);
        this.setState({ taskContent: e.target.value })
    }

    handleChangeSelectedColumn = (selectedColumn) => () => this.setState({ selectedColumn: selectedColumn })

    handleAddNewTask = () => {
        const { taskContent } = this.state
        if (taskContent.trim() === '') {
            toastr.warning('Please enter your task', 'Notice', { timeOut: 2000 });
        } else {
            const { selectedColumn, columns } = this.state;
            const newTask = fromJS({
                id: uuidv1(),
                content: taskContent
            });
            const columnIndex = columns.findIndex(column => column.get('id') === selectedColumn);
            const updatedColumn = columns.updateIn([columnIndex, 'tasks'], tasks => tasks.push(newTask));
            this.setState({
                displayModal: false,
                selectedColumn: '',
                taskContent: '',
                columns: fromJS(updatedColumn)
            });
        }
    }

    handleDeleteTask = (columnIndex, taskIndex) => () => {
        const result = window.confirm('Are your sure to delete this task?');
        if (result) {
            const { columns } = this.state;
            const updatedColumn = columns.updateIn(
                [columnIndex, 'tasks'],
                tasks => tasks.remove(taskIndex));
            this.setState({ columns: fromJS(updatedColumn) }, () => {
                toastr.success('Delete task success', 'Notice', { timeOut: 2000 });
            });
        }
    }

    handleChooseEditTask = (columnIndex, taskIndex) => () => {
        const selectedColumn = this.state.columns.getIn([columnIndex, 'id']);
        const task = this.state.columns.getIn([columnIndex, 'tasks', taskIndex]);
        this.setState({
            selectedColumn,
            taskContent: task.get('content'),
            editedTaskIndex: taskIndex,
            editedTaskId: task.get('id')
        })
    }

    handleEdit = () => {
        const { columns, selectedColumn, taskContent, editedTaskIndex } = this.state;
        const columnIndex = columns.findIndex(column => column.get('id') === selectedColumn);
        const updatedColumn = columns.updateIn(
            [columnIndex, 'tasks'],
            tasks => tasks.setIn([editedTaskIndex, 'content'], taskContent)
        );
        this.setState({
            selectedColumn: '',
            taskContent: '',
            editedTaskId: null,
            editedTaskIndex: null,
            columns: fromJS(updatedColumn)
        });
    }

    handleCancelEdit = () => {
        this.setState({
            selectedColumn: '',
            taskContent: '',
            editedTaskId: null,
            editedTaskIndex: null
        });
    }

    render() {
        const { columns, displayModal, selectedColumn, taskContent, editedTaskId } = this.state;

        return (
            <div className="App">
                <h1 className="App__title">TO DO LIST</h1>
                <div className="App__content">
                    {
                        columns.map((column, columnIndex) => (
                            <Column key={column.get('id')}
                                column={column}
                                handleAddNewTask={this.handleToggleModal}
                            >
                                {
                                    column.get('tasks').map((task, taskIndex) => (
                                        <Task key={task.get('id')}
                                            isEditing={task.get('id') === editedTaskId}
                                            handleChangeTaskContent={this.handleChangeTaskContent}
                                            task={task}
                                            handleEdit={this.handleEdit}
                                            handleCancelEdit={this.handleCancelEdit}
                                            handleChooseEditTask={this.handleChooseEditTask(columnIndex, taskIndex)}
                                            handleDeleteTask={this.handleDeleteTask(columnIndex, taskIndex)} />
                                    ))
                                }
                            </Column>
                        ))
                    }
                </div>
                {
                    displayModal &&
                    <AddNewModal selectedColumn={selectedColumn}
                        taskContent={taskContent}
                        handleChangeTaskContent={this.handleChangeTaskContent}
                        handleChangeSelectedColumn={this.handleChangeSelectedColumn}
                        handleAddNewTask={this.handleAddNewTask}
                        handleToggleModal={this.handleToggleModal()} />
                }
            </div>
        );
    }
}

export default App;
