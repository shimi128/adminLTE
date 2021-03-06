Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate: 'appLoading',

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn: function () {
        return [
    Meteor.subscribe('projects'),
    Meteor.subscribe('requirements'),
    Meteor.subscribe('tasks')
  ];
    }
});

dataReadyHold = null;

if (Meteor.isClient) {
    // Keep showing the launch screen on mobile devices until we have loaded
    // the app's data
    dataReadyHold = LaunchScreen.hold();

    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {
        except: ['join', 'signin']
    });
    Router.onBeforeAction('dataNotFound', {
        except: ['join', 'signin']
    });
}

Router.map(function () {
    this.route('join');
    this.route('signin');

    //this.route('listsShow', {
    //  path: '/lists/:_id',
    //  // subscribe to todos before the page is rendered but don't wait on the
    //  // subscription, we'll just render the items as they arrive
    //  onBeforeAction: function () {
    //    this.todosHandle = Meteor.subscribe('todos', this.params._id);

    //    if (this.ready()) {
    //      // Handle for launch screen defined in app-body.js
    //      dataReadyHold.release();
    //    }
    //  },
    //  data: function () {
    //    return Lists.findOne(this.params._id);
    //  },
    //  action: function () {
    //    this.render();
    //  }
    //});

    this.route('home', {
        path: '/',
        action: function () {
            this.render('dashboard');
        }
    });
    this.route('requirement', {
        path: '/requirement/:id',
        data: function () {
            var requirements = Requirements.find({
                projectId: this.params.id
            });

            return {
                projectId: this.params.id,
                requirements: requirements
            };

            //return _.find(project.requirements, function (requirement) {
            //    return requirement.id = id;
            //});
        },
        action: function () {
            this.render();
        }
    });
    this.route('tasks', {
        path: '/requirement/:id/:task',
        data: function () {
            var id = this.params.id;
            var task = this.params.task;
            return {
                projectName:Projects.findOne({_id:id}).name,
                requirements: Requirements.find({
                    projectId: id
                }),
                tasks: Tasks.find({
                    requirementId: task
                })
            }
        }
    });
});