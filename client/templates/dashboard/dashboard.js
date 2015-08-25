Template.dashboard.rendered = function () {
    $("#calendar").datepicker();
    $('.daterange').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            startDate: moment().subtract(29, 'days'),
            endDate: moment()
        },
        function (start, end) {
            alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });
    
     //Datemask dd/mm/yyyy
        //$("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
        //Datemask2 mm/dd/yyyy
        //$("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
        //Money Euro
        $("[data-mask]").inputmask();
}
Template.dashboard.helpers({
    projectsCount: function () {
        return Projects.find({}).count();
    },
    tasksCount: function () {
        return Tasks.find({}).count();
    },
    users:function(){
        return Meteor.users.find({});
    }
});
Template.dashboard.events({
    'submit': function(event, template) {
    event.preventDefault();
    
    var form=template.$('form');
    
    console.log($(form[0]).serialize());
    }
    
});












