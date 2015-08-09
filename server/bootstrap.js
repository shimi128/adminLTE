// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Projects.find().count() === 0) {
        var data = [
            {
                name: "NgSoft",
                requirements: [{
                        requirementName: "requirement1",
                        tasks: [{
                                taskName: "task1",
                                taskDascription: "task1 Description"
     },
                            {
                                taskName: "task2",
                                taskDascription: "task2 Description"
     },
                            {
                                taskName: "task1",
                                taskDascription: "task3 Description"
     }]
       },
                    {
                        requirementName: "requirement3",
                        tasks: [{
                                taskName: "task1",
                                taskDascription: "task4 Description"
           },
                            {
                                taskName: "task2",
                                taskDascription: "task2 Description"
     },
                            {
                                taskName: "task1",
                                taskDascription: "task3 Description"
     }]
       }
       ]
            },
            {
                name: "Shorowitz",
                requirements: [{
                    requirementName: "requirement2",
                    tasks: [{
                            taskName: "task1",
                            taskDascription: "task1 Description"
     },
                        {
                            taskName: "task2",
                            taskDascription: "task2 Description"
     },
                        {
                            taskName: "task3",
                            taskDascription: "task3 Description"
     }],
    }]
            },
            {
                name: "Shceffer",
                requirements: [{
                    requirementName: "requirement3",
                    tasks: [{
                            taskName: "task1",
                            taskDascription: "task3 Description"
     },
                        {
                            taskName: "task2",
                            taskDascription: "task3 Description"
     },
                        {
                            taskName: "task3",
                            taskDascription: "task3 Description"
     }],
    }]
            }
    ];
    }

    _.each(data, function (project) {
        var project_id = Projects.insert({
            name: project.name
        });
        _.each(project.requirements, function (requirement) {
            var requirement_id = Requirements.insert({
                projectId: project_id,
                name: requirement.requirementName
            });
            var task_id = _.each(requirement.tasks, function (task) {
                Tasks.insert({
                    requirementId: requirement_id,
                    name: task.taskName,
                    description: task.taskDascription
                });
            });
        });
    });
});