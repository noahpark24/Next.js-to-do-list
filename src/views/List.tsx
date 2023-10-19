'use client';
import '@/styles/views/List.css';
import React, { useEffect, useState } from 'react';
import TaskItem from '@/components/List/TaskItems';
//Services
import taskService from '@/services/task.service';
//Types
import { Task } from '@/types/TasksItems.types';

const List = () => {
  const [filter, setFilter] = useState('ALL');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      let response = await taskService.getAllTasks();
      setTasks(response.tasks);
    };
    getTasks();
  }, [tasks]);

  const filterTasks = (filter: string) => {
    setFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    return task.state === filter;
  });

  return (
    <div className="container mx-auto">
      <div className="list-wrapper">
        {/*List Header*/}
        <div className="header">
          <h1>Nest and Next To Do list</h1>
        </div>

        {/*Filter Buttons*/}
        <div className="filter-buttons">
          <button
            onClick={() => filterTasks('ALL')}
            className={`filter-button ${filter === 'ALL' ? 'all' : ''}`}
          >
            All
          </button>
          <button
            onClick={() => filterTasks('PENDING')}
            className={`filter-button ${filter === 'PENDING' ? 'pending' : ''}`}
          >
            Pending
          </button>
          <button
            onClick={() => filterTasks('DONE')}
            className={`filter-button ${filter === 'DONE' ? 'complete' : ''}`}
          >
            Complete
          </button>
        </div>

        {/*Tasks List*/}
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default List;
