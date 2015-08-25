if (Meteor.isClient) {
    // This code only runs on the client
    Template.aside.helpers({
        projects: function () {
            return Projects.find({});
        }
    });
}

//Template.aside.helpers({
//    projects: function () {
//        var projects = []
//        var asidProjects = _.each(Projects.find(), function (project) {
//            projects.push({
//                name: project.name,
//                requirements: Requirements.findOne({
//                    projectId: project._id
//                })
//            });
//        })
//        return projects;
//    }
//});