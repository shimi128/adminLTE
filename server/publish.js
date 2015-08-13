Meteor.publish('projects', function () {
    return Projects.find({});
});

Meteor.publish('requirements', function () {
    return Requirements.find({});
});

Meteor.publish('tasks', function () {
    return Tasks.find({});
});