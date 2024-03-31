class TasksController < ApplicationController
    # GET /tasks
    def index
      tasks = Task.all
      render json: tasks
    end
  
    # POST /tasks
    def create
      task = Task.new(task_params)
      if task.save
        render json: task, status: :created
      else
        render json: task.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /tasks/:id
    def destroy
      task = Task.find(params[:id])
      if task
        task.destroy
        head :no_content
      else
        render json: { error: 'Not found' }, status: :not_found
      end
    end
  
    private
  
    def task_params
      params.require(:task).permit(:title)
    end
  end
  