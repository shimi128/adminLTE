Template.requirement.onRendered(function () {
    // Session.set("tasks", null);
});

Template.requirement.helpers({
    projectName: function () {
        return Projects.findOne({
            _id: this.projectId
        }).name;
    }
});

//Template.requirement.events({
//    'click #req': function (e) {
//        e.preventDefault();
//        var tasks = Tasks.find({
//            requirementId: this._id
//        });
//        console.log(tasks.fetch());
//        Session.set("tasks", tasks.fetch());
//    }
//});
//