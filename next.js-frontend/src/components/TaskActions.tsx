import { ShowDetails } from '@/types/TasksItems.types';
import React from 'react';
import {
  BsPencilSquare,
  BsArrowUpCircle,
  BsArrowDownCircle,
} from 'react-icons/bs';

interface TaskActionsProps {
  editing: string | null;
  startEditing: (taskId: string) => void;
  toggleDetails: (taskId: string) => void;
  taskId: string;
  showDetails: ShowDetails;
}

const TaskActions: React.FC<TaskActionsProps> = ({
  editing,
  startEditing,
  toggleDetails,
  taskId,
  showDetails,
}) => {
  if (editing === null) {
    return (
      <div className="flex items-center">
        <div
          className="cursor-pointer mr-2"
          onClick={() => startEditing(taskId)}
        >
          <BsPencilSquare />
        </div>
        <div className="cursor-pointer" onClick={() => toggleDetails(taskId)}>
          {!showDetails[taskId] ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default TaskActions;
