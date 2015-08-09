Meteor.publish('requirements', function (projectId) {
    return Requirements.find({ projectId: projectId });
});