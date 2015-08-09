Template.aside.helpers({
    projects: function () {
        var projects = []
        var asidProjects = _.each(Projects.find(), function (project) {
            projects.push({
                name: project.name,
                requirements: Requirements.findOne({
                    projectId: project._id
                })
            });
        })
        return projects;
    }
});