Template.appChat.helpers({
	messages: function () {
		return Messages.find({}, {sort: {createdAt: -1}, limit: 10})
	}
});

Template.appChat.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},

	"keyup .txtAddress": function (event) {
		if(event.keyCode == 13){
			Messages.insert({
				Name: $(".txtName").val(),
				Age: $(".txtAge").val(),
				Gender: $(".txtGender").val(),
				Address: $(".txtAddress").val(),
				createdAt: new Date()
			});
			name: $(".txtAddress").val("");
			name: $(".txtAddress").focus();
		}
		return false;
	}
});